import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { UsuarioRequestDTO } from '../../../models/usuario.model';

@Component({
  selector: 'app-usuario-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  usuarioForm!: FormGroup;
  isEditMode: boolean = false;
  cedula: string = '';
  loading: boolean = false;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Obtener la cédula de los parámetros si existe (modo edición)
    this.cedula = this.route.snapshot.params['id'];
    this.isEditMode = !!this.cedula;

    this.inicializarFormulario();

    if (this.isEditMode) {
      this.cargarUsuario();
      // Deshabilitar el campo cédula en modo edición
      this.usuarioForm.get('cedula')?.disable();
    }
  }

  inicializarFormulario(): void {
    this.usuarioForm = this.fb.group({
      primerNombre: ['', [Validators.required, Validators.minLength(2)]],
      segundoNombre: [''],
      primerApellido: ['', [Validators.required, Validators.minLength(2)]],
      segundoApellido: [''],
      cedula: ['', [Validators.required, Validators.pattern(/^\d{6,12}$/)]],
      peso: ['', [Validators.required, Validators.min(1)]],
      estatura: ['', [Validators.required, Validators.min(1)]],
      genero: ['', Validators.required],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      correo: ['', [Validators.required, Validators.email]],
      fechaNacimiento: ['', Validators.required]
    });
  }

  cargarUsuario(): void {
    this.loading = true;
    this.usuarioService.obtenerPorCedula(this.cedula).subscribe({
      next: (data) => {
        // Cargar los datos en el formulario
        // Nota: El backend solo devuelve algunos campos en UsuarioResponseDTO
        this.usuarioForm.patchValue({
          primerNombre: data.primerNombre,
          primerApellido: data.primerApellido,
          cedula: data.cedula,
          correo: data.correo,
          fechaNacimiento: data.fechaNacimiento
        });
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = 'Error al cargar el usuario: ' + error.message;
        this.loading = false;
        console.error('Error:', error);
      }
    });
  }

  onSubmit(): void {
    if (this.usuarioForm.invalid) {
      Object.keys(this.usuarioForm.controls).forEach((key) => {
        const control = this.usuarioForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
      return;
    }

    this.loading = true;
    
    // Usar getRawValue() para incluir campos deshabilitados (como cédula en modo edición)
    const formValue = this.usuarioForm.getRawValue() as UsuarioRequestDTO;

    if (this.isEditMode) {
      // Actualizar usuario existente
      this.usuarioService.actualizarUsuario(this.cedula, formValue).subscribe({
        next: () => {
          alert('Usuario actualizado exitosamente');
          this.router.navigate(['/usuarios']);
        },
        error: (error) => {
          this.errorMessage = 'Error al actualizar el usuario: ' + error.message;
          this.loading = false;
          console.error('Error:', error);
        }
      });
    } else {
      // Crear nuevo usuario
      this.usuarioService.registrarUsuario(formValue).subscribe({
        next: () => {
          alert('Usuario creado exitosamente');
          this.router.navigate(['/usuarios']);
        },
        error: (error) => {
          this.errorMessage = 'Error al crear el usuario: ' + error.message;
          this.loading = false;
          console.error('Error:', error);
        }
      });
    }
  }

  // Helper methods para validación en el template
  isFieldInvalid(fieldName: string): boolean {
    const field = this.usuarioForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  getErrorMessage(fieldName: string): string {
    const control = this.usuarioForm.get(fieldName);
    
    if (control?.hasError('required')) {
      return 'Este campo es requerido';
    }
    if (control?.hasError('email')) {
      return 'Email inválido';
    }
    if (control?.hasError('minlength')) {
      const minLength = control.errors?.['minlength'].requiredLength;
      return `Mínimo ${minLength} caracteres`;
    }
    if (control?.hasError('min')) {
      return 'Valor debe ser mayor a 0';
    }
    if (control?.hasError('pattern')) {
      return 'Formato inválido';
    }
    
    return '';
  }

  cancelar(): void {
    this.router.navigate(['/usuarios']);
  }
}

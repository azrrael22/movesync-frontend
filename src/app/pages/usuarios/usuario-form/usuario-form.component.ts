import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
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
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.cedula = this.route.snapshot.params['id'];
    this.isEditMode = !!this.cedula;

    if (this.isEditMode) {
      this.cargarUsuario();
      // En modo edición, deshabilitar el campo de cédula
      this.usuarioForm.get('cedula')?.disable();
    }
  }

  initForm(): void {
    this.usuarioForm = this.fb.group({
      primerNombre: ['', [Validators.required, Validators.minLength(2)]],
      segundoNombre: [''],
      primerApellido: ['', [Validators.required, Validators.minLength(2)]],
      segundoApellido: [''],
      cedula: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      peso: [null, [Validators.required, Validators.min(1)]],
      estatura: [null, [Validators.required, Validators.min(1)]],
      genero: ['', Validators.required],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      correo: ['', [Validators.required, Validators.email]],
      fechaNacimiento: ['', Validators.required]
    });
  }

  cargarUsuario(): void {
    this.loading = true;
    this.usuarioService.obtenerPorCedula(this.cedula).subscribe({
      next: (usuario) => {
        // Como el backend devuelve fechas en formato dd-MM-yyyy, necesitamos convertir
        const fechaPartes = usuario.fechaNacimiento.split('-');
        const fechaISO = `${fechaPartes[2]}-${fechaPartes[1]}-${fechaPartes[0]}`;
        
        this.usuarioForm.patchValue({
          primerNombre: usuario.primerNombre,
          primerApellido: usuario.primerApellido,
          cedula: usuario.cedula,
          correo: usuario.correo,
          fechaNacimiento: fechaISO
        });
        
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = 'Error al cargar el usuario: ' + error.message;
        this.loading = false;
      }
    });
  }

  get f() {
    return this.usuarioForm.controls;
  }

  convertirFecha(fechaISO: string): string {
    // Convertir de yyyy-MM-dd a dd-MM-yyyy para el backend
    const [year, month, day] = fechaISO.split('-');
    return `${day}-${month}-${year}`;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.usuarioForm.invalid) {
      return;
    }

    this.loading = true;
    const formValue = this.usuarioForm.getRawValue(); // getRawValue incluye campos deshabilitados
    
    const usuarioData: UsuarioRequestDTO = {
      ...formValue,
      fechaNacimiento: this.convertirFecha(formValue.fechaNacimiento)
    };

    const request = this.isEditMode
      ? this.usuarioService.actualizarUsuario(this.cedula, usuarioData)
      : this.usuarioService.registrarUsuario(usuarioData);

    request.subscribe({
      next: () => {
        alert(this.isEditMode ? 'Usuario actualizado exitosamente' : 'Usuario registrado exitosamente');
        this.router.navigate(['/usuarios']);
      },
      error: (error) => {
        this.errorMessage = 'Error al guardar el usuario: ' + error.message;
        this.loading = false;
      }
    });
  }

  cancelar(): void {
    this.router.navigate(['/usuarios']);
  }
}

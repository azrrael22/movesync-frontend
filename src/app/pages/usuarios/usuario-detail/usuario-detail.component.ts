import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { UsuarioResponseDTO } from '../../../models/usuario.model';

@Component({
  selector: 'app-usuario-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})
export class UsuarioDetailComponent implements OnInit {
  usuario: UsuarioResponseDTO | null = null;
  loading: boolean = false;
  errorMessage: string = '';
  cedula: string = '';

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Obtener la cédula de los parámetros de la ruta
    this.cedula = this.route.snapshot.params['id'];
    if (this.cedula) {
      this.cargarUsuario();
    } else {
      this.errorMessage = 'No se proporcionó una cédula válida';
    }
  }

  cargarUsuario(): void {
    this.loading = true;
    this.usuarioService.obtenerPorCedula(this.cedula).subscribe({
      next: (data) => {
        this.usuario = data;
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = 'Error al cargar el usuario: ' + error.message;
        this.loading = false;
        console.error('Error:', error);
      }
    });
  }

  eliminarUsuario(): void {
    if (!this.usuario) return;

    const nombreCompleto = `${this.usuario.primerNombre} ${this.usuario.primerApellido}`;
    
    if (confirm(`¿Está seguro de eliminar al usuario ${nombreCompleto}?`)) {
      this.usuarioService.eliminarUsuario(this.cedula).subscribe({
        next: () => {
          alert('Usuario eliminado exitosamente');
          this.router.navigate(['/usuarios']);
        },
        error: (error) => {
          alert('Error al eliminar el usuario: ' + error.message);
          console.error('Error:', error);
        }
      });
    }
  }

  volver(): void {
    this.router.navigate(['/usuarios']);
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { UsuarioResponseDTO } from '../../../models/usuario.model';

@Component({
  selector: 'app-usuario-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
  usuarios: UsuarioResponseDTO[] = [];
  loading: boolean = false;
  errorMessage: string = '';

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    this.loading = true;
    this.errorMessage = '';

    this.usuarioService.listarUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = 'Error al cargar los usuarios: ' + error.message;
        this.loading = false;
        console.error('Error:', error);
      }
    });
  }

  verDetalle(cedula: string): void {
    // Navega a la ruta de detalle usando la cédula
    this.router.navigate(['/usuarios/ver', cedula]);
  }

  editarUsuario(cedula: string): void {
    // Navega a la ruta de edición usando la cédula
    this.router.navigate(['/usuarios/editar', cedula]);
  }

  eliminarUsuario(cedula: string, nombreCompleto: string): void {
    if (confirm(`¿Está seguro de eliminar al usuario ${nombreCompleto}?`)) {
      this.usuarioService.eliminarUsuario(cedula).subscribe({
        next: () => {
          alert('Usuario eliminado exitosamente');
          this.cargarUsuarios();
        },
        error: (error) => {
          alert('Error al eliminar el usuario: ' + error.message);
          console.error('Error:', error);
        }
      });
    }
  }
}

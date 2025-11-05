import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { UsuarioService } from "../../../services/usuario.service";
import { UsuarioResponseDTO } from "../../../models/usuario.model";

@Component({
  selector: "app-usuario-detail",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./usuario-detail.component.html",
  styleUrls: ["./usuario-detail.component.css"],
})
export class UsuarioDetailComponent implements OnInit {
  usuario: UsuarioResponseDTO | null = null;
  loading: boolean = false;
  errorMessage: string = "";
  cedula: string = "";

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Intentamos leer un query param `correo`. Si existe, cargamos por correo.
    const correo = this.route.snapshot.queryParamMap.get("correo");
    const idParam = this.route.snapshot.params["id"];

    if (correo) {
      // Cargar usuario por correo
      this.cedula = "";
      this.cargarUsuarioPorCorreo(correo);
    } else if (idParam) {
      // Cargar usuario por cédula (ruta existente)
      this.cedula = idParam;
      this.cargarUsuario();
    } else {
      this.errorMessage =
        "No se proporcionó identificador para cargar el usuario.";
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
        this.errorMessage = "Error al cargar el usuario: " + error.message;
        this.loading = false;
        console.error("Error:", error);
      },
    });
  }

  cargarUsuarioPorCorreo(correo: string): void {
    this.loading = true;
    this.usuarioService.obtenerPorCorreo(correo).subscribe({
      next: (data) => {
        this.usuario = data;
        // Guardamos la cédula para mantener compatibilidad con acciones (editar/eliminar)
        if (this.usuario && this.usuario.cedula) {
          this.cedula = this.usuario.cedula;
        }
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage =
          "Error al cargar el usuario por correo: " + error.message;
        this.loading = false;
        console.error("Error:", error);
      },
    });
  }

  eliminarUsuario(): void {
    const ced = this.usuario?.cedula ?? this.cedula;
    if (
      ced &&
      this.usuario &&
      confirm(
        `¿Está seguro de eliminar al usuario ${this.usuario.primerNombre} ${this.usuario.primerApellido}?`
      )
    ) {
      this.usuarioService.eliminarUsuario(ced).subscribe({
        next: () => {
          alert("Usuario eliminado exitosamente");
          this.router.navigate(["/usuarios"]);
        },
        error: (error) => {
          alert("Error al eliminar el usuario: " + error.message);
          console.error("Error:", error);
        },
      });
    }
  }

  volver(): void {
    this.router.navigate(["/usuarios"]);
  }
}

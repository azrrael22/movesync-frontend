import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "../../environments/environment.development";
import { ApiResponse } from "../models/api-response.model";
import { UsuarioRequestDTO, UsuarioResponseDTO } from "../models/usuario.model";

@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  private apiUrl = `${environment.apiUrl}/usuarios`;

  constructor(private http: HttpClient) {}

  /**
   * Obtiene la lista de todos los usuarios
   */
  listarUsuarios(): Observable<UsuarioResponseDTO[]> {
    return this.http.get<ApiResponse<UsuarioResponseDTO[]>>(this.apiUrl).pipe(
      map((response) => response.data),
      catchError(this.handleError)
    );
  }

  /**
   * Obtiene un usuario por su cédula
   */
  obtenerPorCedula(cedula: string): Observable<UsuarioResponseDTO> {
    return this.http
      .get<ApiResponse<UsuarioResponseDTO>>(`${this.apiUrl}/${cedula}`)
      .pipe(
        map((response) => response.data),
        catchError(this.handleError)
      );
  }

  /**
   * Obtiene un usuario por su correo electrónico
   */
  obtenerPorCorreo(correo: string): Observable<UsuarioResponseDTO> {
    return this.http
      .get<ApiResponse<UsuarioResponseDTO>>(`${this.apiUrl}/correo/${correo}`)
      .pipe(
        map((response) => response.data),
        catchError(this.handleError)
      );
  }

  /**
   * Registra un nuevo usuario
   */
  registrarUsuario(usuario: UsuarioRequestDTO): Observable<UsuarioResponseDTO> {
    return this.http
      .post<ApiResponse<UsuarioResponseDTO>>(this.apiUrl, usuario)
      .pipe(
        map((response) => response.data),
        catchError(this.handleError)
      );
  }

  /**
   * Actualiza un usuario existente
   */
  actualizarUsuario(
    cedula: string,
    usuario: UsuarioRequestDTO
  ): Observable<UsuarioResponseDTO> {
    return this.http
      .put<ApiResponse<UsuarioResponseDTO>>(`${this.apiUrl}/${cedula}`, usuario)
      .pipe(
        map((response) => response.data),
        catchError(this.handleError)
      );
  }

  /**
   * Elimina un usuario por su cédula
   */
  eliminarUsuario(cedula: string): Observable<void> {
    return this.http
      .get<ApiResponse<void>>(`${this.apiUrl}/eliminar/${cedula}`)
      .pipe(
        map(() => void 0),
        catchError(this.handleError)
      );
  }

  /**
   * Maneja los errores HTTP
   */
  private handleError(error: HttpErrorResponse) {
    let errorMessage = "Ha ocurrido un error desconocido";

    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      errorMessage = `Código de error: ${error.status}\nMensaje: ${error.message}`;

      if (error.error && error.error.message) {
        errorMessage = error.error.message;
      }
    }

    console.error("Error en el servicio de usuarios:", errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment.development';
import { ApiResponse } from '../models/api-response.model';
import {
  UsuarioRequestDTO,
  UsuarioResponseDTO
} from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = `${environment.apiUrl}/usuarios`;

  constructor(private http: HttpClient) {}

  /**
   * Obtiene la lista de todos los usuarios
   */
  listarUsuarios(): Observable<UsuarioResponseDTO[]> {
    return this.http
      .get<ApiResponse<UsuarioResponseDTO[]>>(this.apiUrl)
      .pipe(
        map((response) => response.data),
        catchError(this.handleError)
      );
  }

  /**
   * Obtiene un usuario por su cédula
   * Usa el endpoint: GET /api/usuarios/cedula/{cedula}
   */
  obtenerPorCedula(cedula: string): Observable<UsuarioResponseDTO> {
    return this.http
      .get<ApiResponse<UsuarioResponseDTO>>(`${this.apiUrl}/cedula/${cedula}`)
      .pipe(
        map((response) => response.data),
        catchError(this.handleError)
      );
  }

  /**
   * Registra un nuevo usuario
   */
  registrarUsuario(
    usuario: UsuarioRequestDTO
  ): Observable<UsuarioResponseDTO> {
    return this.http
      .post<ApiResponse<UsuarioResponseDTO>>(this.apiUrl, usuario)
      .pipe(
        map((response) => response.data),
        catchError(this.handleError)
      );
  }

  /**
   * Actualiza un usuario existente
   * Usa el endpoint: PUT /api/usuarios/{cedula}
   */
  actualizarUsuario(
    cedula: string,
    usuario: UsuarioRequestDTO
  ): Observable<UsuarioResponseDTO> {
    return this.http
      .put<ApiResponse<UsuarioResponseDTO>>(
        `${this.apiUrl}/${cedula}`,
        usuario
      )
      .pipe(
        map((response) => response.data),
        catchError(this.handleError)
      );
  }

  /**
   * Elimina un usuario por su cédula
   * Usa el endpoint: DELETE /api/usuarios/{cedula} o GET /api/usuarios/eliminar/{cedula}
   * Ajusta según tu backend
   */
  eliminarUsuario(cedula: string): Observable<void> {
    // Si tu backend usa GET /api/usuarios/eliminar/{cedula}
    return this.http
      .get<ApiResponse<void>>(`${this.apiUrl}/eliminar/${cedula}`)
      .pipe(
        map(() => undefined),
        catchError(this.handleError)
      );
    
    // Si tu backend usa DELETE /api/usuarios/{cedula}, usa esto en su lugar:
    // return this.http
    //   .delete<ApiResponse<void>>(`${this.apiUrl}/${cedula}`)
    //   .pipe(
    //     map(() => undefined),
    //     catchError(this.handleError)
    //   );
  }

  /**
   * Maneja los errores HTTP
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Ocurrió un error desconocido';

    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      if (error.error?.message) {
        errorMessage = error.error.message;
      } else {
        errorMessage = `Error ${error.status}: ${error.message}`;
      }
    }

    console.error('Error en la petición HTTP:', error);
    return throwError(() => new Error(errorMessage));
  }
}

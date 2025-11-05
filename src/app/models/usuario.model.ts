// DTO para crear/actualizar usuario
export interface UsuarioRequestDTO {
  primerNombre: string;
  segundoNombre: string;
  primerApellido: string;
  segundoApellido: string;
  cedula: string;
  peso: number;
  estatura: number;
  genero: string;
  contrasena: string;
  correo: string;
  fechaNacimiento: string; // formato: dd-MM-yyyy
}

// DTO de respuesta del backend
export interface UsuarioResponseDTO {
  cedula: string;
  primerNombre: string;
  primerApellido: string;
  correo: string;
  fechaNacimiento: string;
}

// Modelo completo de usuario (para uso interno)
export interface Usuario {
  idUsuario?: string;
  primerNombre: string;
  segundoNombre?: string;
  primerApellido: string;
  segundoApellido?: string;
  cedula: string;
  peso?: number;
  estatura?: number;
  genero: string;
  contrasena?: string;
  correo: string;
  fechaNacimiento: string;
}

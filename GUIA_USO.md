# Guía de Instalación y Uso - MoveSync Frontend

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

1. **Node.js** (versión 18 o superior)
   - Descargar desde: https://nodejs.org/
   - Verificar instalación: `node --version`

2. **npm** (viene con Node.js)
   - Verificar instalación: `npm --version`

3. **Angular CLI**
   ```bash
   npm install -g @angular/cli
   ```

4. **Backend funcionando**
   - El backend debe estar corriendo en `http://localhost:8080`
   - Base de datos PostgreSQL iniciada con Docker

## 🚀 Instalación

### Paso 1: Clonar o descargar el proyecto

```bash
cd movesync-frontend
```

### Paso 2: Instalar dependencias

```bash
npm install
```

Esto instalará todas las dependencias necesarias:
- Angular 17+
- Bootstrap 5
- Bootstrap Icons
- RxJS
- TypeScript

### Paso 3: Verificar configuración del backend

Abre el archivo `src/environments/environment.development.ts` y verifica que la URL del backend sea correcta:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api'
};
```

## ▶️ Ejecutar la Aplicación

### Modo Desarrollo

```bash
ng serve
```

O usando npm:

```bash
npm start
```

La aplicación estará disponible en: **http://localhost:4200**

### Modo Producción (Build)

```bash
ng build --configuration production
```

Los archivos compilados estarán en la carpeta `dist/`

## 🎯 Uso de la Aplicación

### 1. Página Principal (Lista de Usuarios)

Al abrir la aplicación, verás la lista de todos los usuarios registrados.

**Funcionalidades:**
- Ver todos los usuarios en una tabla
- Buscar usuarios
- Acciones rápidas: Ver, Editar, Eliminar

**Ruta:** `/usuarios` o `/`

### 2. Crear Nuevo Usuario

Haz clic en el botón **"Nuevo Usuario"** en la esquina superior derecha.

**Campos requeridos:**
- Primer Nombre (*)
- Primer Apellido (*)
- Cédula (*) - Solo números
- Peso (kg) (*)
- Estatura (cm) (*)
- Género (*) - Masculino/Femenino
- Correo Electrónico (*) - Formato válido
- Contraseña (*) - Mínimo 6 caracteres
- Fecha de Nacimiento (*)

**Campos opcionales:**
- Segundo Nombre
- Segundo Apellido

**Ruta:** `/usuarios/nuevo`

### 3. Ver Detalle de Usuario

Haz clic en el botón con el icono de ojo (👁️) en cualquier usuario.

**Información mostrada:**
- Cédula
- Nombre completo
- Correo electrónico
- Fecha de nacimiento

**Acciones disponibles:**
- Editar usuario
- Eliminar usuario
- Volver a la lista

**Ruta:** `/usuarios/ver/:id`

### 4. Editar Usuario

Haz clic en el botón con el icono de lápiz (✏️) en cualquier usuario.

El formulario se cargará con los datos actuales del usuario. Puedes modificar cualquier campo y guardar los cambios.

**Ruta:** `/usuarios/editar/:id`

### 5. Eliminar Usuario

Desde la lista o desde el detalle, haz clic en el botón con el icono de basura (🗑️).

Se mostrará una confirmación antes de eliminar el usuario de forma permanente.

## 🔧 Configuración Adicional

### Cambiar Puerto del Frontend

Si el puerto 4200 ya está en uso, puedes cambiar el puerto:

```bash
ng serve --port 4300
```

### Cambiar URL del Backend

Si tu backend está en otra URL, modifica los archivos de environment:

**Desarrollo:** `src/environments/environment.development.ts`
**Producción:** `src/environments/environment.ts`

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://tu-servidor:8080/api'  // Cambiar aquí
};
```

## 📂 Estructura del Proyecto

```
movesync-frontend/
├── src/
│   ├── app/
│   │   ├── models/              # Interfaces y modelos
│   │   │   ├── api-response.model.ts
│   │   │   └── usuario.model.ts
│   │   ├── services/            # Servicios HTTP
│   │   │   └── usuario.service.ts
│   │   ├── pages/
│   │   │   └── usuarios/        # Componentes de usuarios
│   │   │       ├── usuario-list/
│   │   │       ├── usuario-form/
│   │   │       └── usuario-detail/
│   │   ├── app.component.*      # Componente principal
│   │   ├── app.routes.ts        # Rutas de la aplicación
│   │   └── app.config.ts        # Configuración
│   ├── environments/            # Configuración de entornos
│   ├── styles.css              # Estilos globales
│   ├── index.html              # HTML principal
│   └── main.ts                 # Punto de entrada
├── angular.json                # Configuración de Angular
├── package.json               # Dependencias
└── tsconfig.json              # Configuración de TypeScript
```

## 🐛 Solución de Problemas

### Error: "Cannot find module '@angular/...'"

```bash
npm install
```

### Error: Puerto 4200 en uso

```bash
ng serve --port 4300
```

### Error de CORS al conectar con el backend

Asegúrate de que el backend tiene configurado CORS. En Spring Boot, agrega:

```java
@Configuration
public class CorsConfig {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/**")
                        .allowedOrigins("http://localhost:4200")
                        .allowedMethods("GET", "POST", "PUT", "DELETE");
            }
        };
    }
}
```

### Error: "Cannot connect to backend"

1. Verifica que el backend esté corriendo en `http://localhost:8080`
2. Verifica que la base de datos PostgreSQL esté activa
3. Prueba la API directamente: `http://localhost:8080/api/usuarios`

## 📝 Validaciones del Formulario

El formulario incluye las siguientes validaciones:

- **Primer Nombre:** Requerido, mínimo 2 caracteres
- **Primer Apellido:** Requerido, mínimo 2 caracteres
- **Cédula:** Requerido, solo números
- **Peso:** Requerido, debe ser mayor a 0
- **Estatura:** Requerido, debe ser mayor a 0
- **Género:** Requerido, Masculino (M) o Femenino (F)
- **Correo:** Requerido, formato de email válido
- **Contraseña:** Requerido, mínimo 6 caracteres
- **Fecha Nacimiento:** Requerido

## 🎨 Personalización

### Cambiar Colores

Edita el archivo `src/styles.css` para cambiar los colores principales de la aplicación.

### Cambiar Logo

Reemplaza el icono en la barra de navegación editando `src/app/app.component.html`

## 📧 Soporte

Para reportar problemas o sugerencias, contacta al equipo de desarrollo.

---

¡Disfruta usando MoveSync! 🎉

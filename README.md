# MoveSync Frontend 🎨

Frontend en Angular para la aplicación **MoveSync**, un sistema de gestión de actividades físicas y seguimiento de salud.

## 🚀 Tecnologías

- Angular 17+
- TypeScript
- Bootstrap 5
- RxJS
- Angular Reactive Forms

## 📋 Prerequisitos

- Node.js (v18 o superior)
- npm (v9 o superior)
- Angular CLI (`npm install -g @angular/cli`)

## ⚙️ Instalación

```bash
# Clonar el repositorio
git clone <tu-repo>
cd movesync-frontend

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
ng serve
```

La aplicación estará disponible en `http://localhost:4200`

## 🔗 Configuración del Backend

Asegúrate de que el backend esté corriendo en `http://localhost:8080`

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── core/              # Servicios core, guards, interceptors
│   ├── shared/            # Componentes, pipes, directivas compartidas
│   ├── models/            # Interfaces y modelos
│   ├── services/          # Servicios de la aplicación
│   └── pages/             # Páginas/Componentes principales
│       └── usuarios/      # Módulo de usuarios
└── environments/          # Configuración de entornos
```

## 🎯 Funcionalidades Implementadas

### Módulo de Usuarios
- ✅ Listar usuarios
- ✅ Crear nuevo usuario
- ✅ Editar usuario existente
- ✅ Ver detalle de usuario
- ✅ Eliminar usuario
- ✅ Validación de formularios
- ✅ Mensajes de confirmación

## 🔜 Próximas Funcionalidades

- Módulo de Eventos
- Módulo de Metas
- Módulo de Logros
- Dashboard principal
- Autenticación y autorización

## 👥 Equipo

Desarrollado como parte del curso de **Bases de Datos 1** en el programa de Ingeniería de Sistemas.

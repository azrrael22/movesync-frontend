# 🚀 Inicio Rápido - MoveSync Frontend

## ⚡ Instalación en 3 Pasos

### 1️⃣ Instalar dependencias
```bash
cd movesync-frontend
npm install
```

### 2️⃣ Configurar Backend (Spring Boot)

**IMPORTANTE:** Agrega la configuración CORS al backend

Copia el contenido de `BACKEND_CORS_CONFIG.java` y créalo en tu backend en:
```
src/main/java/com/movesync/move_sync_api/infrastructurecross/config/CorsConfig.java
```

### 3️⃣ Iniciar aplicación
```bash
npm start
```

Abre tu navegador en: **http://localhost:4200**

---

## 📁 Archivos Importantes

```
movesync-frontend/
├── README.md                    ← Documentación general
├── GUIA_USO.md                 ← Guía detallada de uso
├── BACKEND_CORS_CONFIG.java    ← ¡IMPORTANTE! Config para Spring Boot
├── package.json                ← Dependencias del proyecto
│
├── src/
│   ├── app/
│   │   ├── models/             ← Interfaces TypeScript
│   │   │   ├── api-response.model.ts
│   │   │   └── usuario.model.ts
│   │   │
│   │   ├── services/           ← Servicios HTTP
│   │   │   └── usuario.service.ts
│   │   │
│   │   ├── pages/usuarios/     ← Componentes de usuarios
│   │   │   ├── usuario-list/     (Lista)
│   │   │   ├── usuario-form/     (Crear/Editar)
│   │   │   └── usuario-detail/   (Ver detalle)
│   │   │
│   │   ├── app.component.*     ← Componente principal + Navbar
│   │   ├── app.routes.ts       ← Configuración de rutas
│   │   └── app.config.ts       ← Configuración Angular
│   │
│   ├── environments/           ← URLs del backend
│   │   ├── environment.ts
│   │   └── environment.development.ts
│   │
│   ├── styles.css             ← Estilos globales
│   ├── index.html             ← HTML principal
│   └── main.ts                ← Punto de entrada
│
└── angular.json               ← Configuración de Angular
```

---

## 🎯 Rutas Disponibles

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | Lista | Redirige a /usuarios |
| `/usuarios` | Lista | Lista todos los usuarios |
| `/usuarios/nuevo` | Formulario | Crear nuevo usuario |
| `/usuarios/editar/:id` | Formulario | Editar usuario existente |
| `/usuarios/ver/:id` | Detalle | Ver información del usuario |

---

## 🔧 Comandos Útiles

```bash
# Instalar dependencias
npm install

# Iniciar en modo desarrollo
npm start
# o
ng serve

# Iniciar en otro puerto
ng serve --port 4300

# Compilar para producción
ng build --configuration production

# Ejecutar tests
ng test

# Ver ayuda de Angular CLI
ng help
```

---

## ✅ Checklist de Verificación

Antes de ejecutar el frontend, verifica:

- [ ] Node.js instalado (v18+)
- [ ] npm instalado
- [ ] Angular CLI instalado globalmente
- [ ] Dependencias instaladas (`npm install`)
- [ ] Backend corriendo en http://localhost:8080
- [ ] Base de datos PostgreSQL activa
- [ ] Configuración CORS agregada al backend
- [ ] Variables de entorno configuradas

---

## 🎨 Características Implementadas

✅ **CRUD Completo de Usuarios**
- Listar todos los usuarios
- Crear nuevo usuario
- Editar usuario existente
- Ver detalle de usuario
- Eliminar usuario

✅ **Validación de Formularios**
- Validación en tiempo real
- Mensajes de error claros
- Campos requeridos marcados

✅ **UI/UX Moderna**
- Diseño responsivo con Bootstrap 5
- Iconos de Bootstrap Icons
- Animaciones suaves
- Feedback visual (loading, alerts)

✅ **Manejo de Errores**
- Mensajes de error informativos
- Confirmaciones antes de eliminar
- Manejo de errores HTTP

---

## 🆘 Problemas Comunes

### ❌ Error: "npm: command not found"
**Solución:** Instala Node.js desde https://nodejs.org/

### ❌ Error: CORS blocked
**Solución:** Asegúrate de haber agregado la configuración CORS al backend (archivo `BACKEND_CORS_CONFIG.java`)

### ❌ Error: Cannot connect to backend
**Solución:** 
1. Verifica que el backend esté corriendo: `http://localhost:8080/api/usuarios`
2. Verifica la URL en `src/environments/environment.development.ts`

### ❌ Error: Puerto 4200 en uso
**Solución:** Usa otro puerto: `ng serve --port 4300`

---

## 📚 Documentación Completa

- **README.md** - Información general del proyecto
- **GUIA_USO.md** - Guía detallada de instalación y uso
- **Angular Docs** - https://angular.io/docs

---

## 🎓 Próximos Pasos

Una vez que tengas funcionando el CRUD de usuarios, puedes:

1. Implementar los módulos de Eventos, Metas y Logros
2. Agregar autenticación y autorización
3. Crear un dashboard principal
4. Agregar gráficos y estadísticas
5. Implementar filtros y búsquedas avanzadas

---

## 👥 Soporte

Para dudas o problemas, revisa:
1. La **GUIA_USO.md** para instrucciones detalladas
2. Los comentarios en el código
3. La documentación oficial de Angular

---

**¡Disfruta desarrollando con MoveSync! 💪🏃‍♂️**

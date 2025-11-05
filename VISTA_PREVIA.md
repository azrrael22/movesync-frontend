# 📸 Vista Previa de la Aplicación

## 🎨 Paleta de Colores

- **Primario:** Azul (#0d6efd) - Botones principales, navbar
- **Secundario:** Gris (#6c757d) - Botones cancelar
- **Info:** Azul claro (#0dcaf0) - Ver detalle
- **Warning:** Amarillo (#ffc107) - Editar
- **Danger:** Rojo (#dc3545) - Eliminar
- **Success:** Verde (#198754) - Acciones exitosas

---

## 📱 Pantalla 1: Navbar (Superior)

```
╔═══════════════════════════════════════════════════════════╗
║  [⚡] MoveSync     👥 Usuarios  📅 Eventos  🏆 Logros  🎯 Metas  ║
╚═══════════════════════════════════════════════════════════╝
```

**Características:**
- Logo con icono de actividad (⚡)
- Navegación responsive
- Elementos futuros deshabilitados (Eventos, Logros, Metas)
- Fondo azul (#0d6efd)
- Texto blanco

---

## 📱 Pantalla 2: Lista de Usuarios

```
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║  👥 Gestión de Usuarios              [+ Nuevo Usuario]   ║
║                                                           ║
║  ┌─────────────────────────────────────────────────────┐ ║
║  │ Cédula │ Nombre │ Apellido │ Correo │ F.Nac │ Acciones│ ║
║  ├─────────────────────────────────────────────────────┤ ║
║  │ 12345  │ Carlos │ Gómez    │ carlos@│ 15-05│ 👁️ ✏️ 🗑️ │ ║
║  │        │        │          │ ex.com │ 1990 │         │ ║
║  ├─────────────────────────────────────────────────────┤ ║
║  │ 87654  │ María  │ Rodrí    │ maria@ │ 03-09│ 👁️ ✏️ 🗑️ │ ║
║  │        │        │ guez     │ ex.com │ 1992 │         │ ║
║  └─────────────────────────────────────────────────────┘ ║
║                                                           ║
║  Total de usuarios: 6                                    ║
╚═══════════════════════════════════════════════════════════╝
```

**Características:**
- Título con icono de personas
- Botón azul "Nuevo Usuario" en la esquina superior derecha
- Tabla responsive con hover effect
- Tres botones de acción por fila:
  - 👁️ Azul (Info) - Ver detalle
  - ✏️ Amarillo (Warning) - Editar
  - 🗑️ Rojo (Danger) - Eliminar
- Contador total al pie

---

## 📱 Pantalla 3: Formulario Crear/Editar Usuario

```
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║  ╔════════════════════════════════════════════════════╗  ║
║  ║ 👤 Nuevo Usuario                                   ║  ║
║  ╠════════════════════════════════════════════════════╣  ║
║  ║                                                    ║  ║
║  ║  👤 Información Personal                          ║  ║
║  ║  ─────────────────────────────────────────────    ║  ║
║  ║  Primer Nombre *     │ Segundo Nombre            ║  ║
║  ║  [____________]      │ [____________]            ║  ║
║  ║                                                    ║  ║
║  ║  Primer Apellido *   │ Segundo Apellido          ║  ║
║  ║  [____________]      │ [____________]            ║  ║
║  ║                                                    ║  ║
║  ║  📝 Identificación                                ║  ║
║  ║  ─────────────────────────────────────────────    ║  ║
║  ║  Cédula *           │ Fecha de Nacimiento *      ║  ║
║  ║  [____________]     │ [____-__-__]               ║  ║
║  ║                                                    ║  ║
║  ║  ⚡ Datos Físicos                                 ║  ║
║  ║  ─────────────────────────────────────────────    ║  ║
║  ║  Peso (kg) * │ Estatura (cm) * │ Género *       ║  ║
║  ║  [_____]     │ [_____]          │ [▼ Selec...]   ║  ║
║  ║                                                    ║  ║
║  ║  🔒 Datos de Acceso                               ║  ║
║  ║  ─────────────────────────────────────────────    ║  ║
║  ║  Correo Electrónico *    │ Contraseña *          ║  ║
║  ║  [__________________]    │ [••••••••]            ║  ║
║  ║                                                    ║  ║
║  ║  [Cancelar]                    [💾 Registrar]    ║  ║
║  ╚════════════════════════════════════════════════════╝  ║
╚═══════════════════════════════════════════════════════════╝
```

**Características:**
- Card con sombra elevada
- Header azul con título
- 4 secciones claramente separadas:
  1. Información Personal (nombre y apellidos)
  2. Identificación (cédula y fecha)
  3. Datos Físicos (peso, estatura, género)
  4. Datos de Acceso (correo y contraseña)
- Campos marcados con asterisco (*) son obligatorios
- Validación en tiempo real
- Mensajes de error debajo de cada campo inválido
- Botones: Cancelar (gris) y Registrar (azul)

---

## 📱 Pantalla 4: Ver Detalle de Usuario

```
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║  ╔════════════════════════════════════════════════════╗  ║
║  ║ 👤 Detalle del Usuario                             ║  ║
║  ╠════════════════════════════════════════════════════╣  ║
║  ║                                                    ║  ║
║  ║              👤                                    ║  ║
║  ║        Carlos Gómez                                ║  ║
║  ║                                                    ║  ║
║  ║  ┌──────────────┐  ┌──────────────────────────┐  ║  ║
║  ║  │ 📝 Cédula    │  │ 📧 Correo Electrónico    │  ║  ║
║  ║  │ 12345678     │  │ carlos@example.com       │  ║  ║
║  ║  └──────────────┘  └──────────────────────────┘  ║  ║
║  ║                                                    ║  ║
║  ║  ┌──────────────┐  ┌──────────────────────────┐  ║  ║
║  ║  │ 📅 F. Nac.   │  │ 👤 Nombre Completo       │  ║  ║
║  ║  │ 15-05-1990   │  │ Carlos Gómez             │  ║  ║
║  ║  └──────────────┘  └──────────────────────────┘  ║  ║
║  ║                                                    ║  ║
║  ║  [← Volver]            [✏️ Editar] [🗑️ Eliminar]  ║  ║
║  ╚════════════════════════════════════════════════════╝  ║
╚═══════════════════════════════════════════════════════════╝
```

**Características:**
- Card con sombra
- Header azul claro (Info)
- Icono grande de usuario centrado
- Nombre del usuario destacado
- 4 tarjetas con información:
  - Cédula
  - Correo
  - Fecha de nacimiento
  - Nombre completo
- Cards con efecto hover (se elevan)
- Botones de acción:
  - Volver (gris, izquierda)
  - Editar (amarillo, derecha)
  - Eliminar (rojo, derecha)

---

## 📱 Pantalla 5: Footer (Inferior)

```
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║  ⚡ MoveSync                                              ║
║  Sistema de gestión de         Desarrollado como parte   ║
║  actividades físicas y         del curso de Bases de     ║
║  seguimiento de salud.         Datos 1                   ║
║                                                           ║
║                                © 2025 MoveSync            ║
╚═══════════════════════════════════════════════════════════╝
```

**Características:**
- Fondo gris claro (#f8f9fa)
- Borde superior gris
- Dos columnas:
  - Izquierda: Logo y descripción
  - Derecha: Créditos y copyright
- Texto gris oscuro

---

## 🎭 Componentes UI Adicionales

### 🔄 Loading Spinner
```
    ⟳
Cargando...
```
- Spinner azul rotando
- Texto descriptivo debajo

### ✅ Alert de Éxito
```
┌────────────────────────────────────────┐
│ ✓ Usuario registrado exitosamente      │
└────────────────────────────────────────┘
```
- Fondo verde claro
- Icono de check
- Texto verde oscuro

### ❌ Alert de Error
```
┌────────────────────────────────────────┐
│ ⚠ Error al cargar los usuarios         │
└────────────────────────────────────────┘
```
- Fondo rojo claro
- Icono de advertencia
- Texto rojo oscuro
- Botón X para cerrar

### ❔ Confirmación de Eliminación
```
┌────────────────────────────────────────┐
│ ¿Está seguro de eliminar al usuario    │
│ Carlos Gómez?                           │
│                                         │
│         [Cancelar]    [Aceptar]        │
└────────────────────────────────────────┘
```
- Modal browser nativo
- Confirmación obligatoria antes de eliminar

---

## 📱 Responsive Design

La aplicación se adapta a diferentes tamaños de pantalla:

### 💻 Desktop (> 992px)
- Tabla completa visible
- Formulario en 2 columnas
- Navbar completo

### 📱 Tablet (768px - 992px)
- Tabla con scroll horizontal si es necesario
- Formulario en 2 columnas
- Navbar colapsable

### 📱 Mobile (< 768px)
- Cards en lugar de tabla
- Formulario en 1 columna
- Navbar hamburguesa
- Botones apilados verticalmente

---

## 🎨 Efectos Visuales

### Hover Effects
- Botones: Se elevan ligeramente (translateY -2px)
- Cards: Sombra más pronunciada
- Filas de tabla: Fondo gris claro

### Transiciones
- Todas las transiciones: 0.3s ease
- Fadeín de contenido: 0.5s
- Animación suave en carga de páginas

### Sombras
- Cards: box-shadow suave
- Navbar: sombra ligera inferior
- Botones hover: sombra más pronunciada

---

## 🔤 Tipografía

- **Fuente:** Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Títulos:** Font-weight 600 (semi-bold)
- **Texto normal:** Font-weight 400 (regular)
- **Labels:** Font-weight 500 (medium)

---

## 📐 Espaciado

- Padding de cards: 1-2rem
- Margin entre secciones: 1-2rem
- Gap entre botones: 0.5rem
- Border radius: 5-10px

---

¡Con esta información tienes una idea clara de cómo se ve y funciona la aplicación! 🎉

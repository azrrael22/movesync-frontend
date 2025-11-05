import { Routes } from "@angular/router";
import { UsuarioListComponent } from "./pages/usuarios/usuario-list/usuario-list.component";
import { UsuarioFormComponent } from "./pages/usuarios/usuario-form/usuario-form.component";
import { UsuarioDetailComponent } from "./pages/usuarios/usuario-detail/usuario-detail.component";

export const routes: Routes = [
  { path: "", redirectTo: "/usuarios", pathMatch: "full" },
  { path: "usuarios", component: UsuarioListComponent },
  { path: "usuarios/nuevo", component: UsuarioFormComponent },
  { path: "usuarios/editar/:id", component: UsuarioFormComponent },
  { path: "usuarios/ver/:id", component: UsuarioDetailComponent },
  // Ruta para ver usuario a partir de su correo (se pasa como query param `?correo=...`)
  { path: "usuarios/ver-correo", component: UsuarioDetailComponent },
  { path: "**", redirectTo: "/usuarios" },
];

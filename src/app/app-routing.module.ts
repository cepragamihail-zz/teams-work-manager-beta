import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EditSiteComponent } from "./components/edit-site/edit-site.component";
import { SitesComponent } from "./components/sites/sites.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./_helpers/auth.guard";

const routes: Routes = [
  {
    path: "dashboard",
    canActivate: [AuthGuard],
    data: { preload: false },
    loadChildren: () =>
      import("./dashboard/dashboard.module").then(m => m.DashboardModule)
  },
  { path: "login", component: LoginComponent },
  { path: "sites", component: SitesComponent },
  { path: "edit-site", component: EditSiteComponent },
   {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  // otherwise redirect to home
  { path: "**", redirectTo: "dashboard" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

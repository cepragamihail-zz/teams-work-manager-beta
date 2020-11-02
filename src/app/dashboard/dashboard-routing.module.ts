import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EditSiteComponent } from "../components/edit-site/edit-site.component";
import { SitesComponent } from "../components/sites/sites.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "site",
    pathMatch: "full"
  },
  {
    path: "site",
    component: SitesComponent
  },
  {
    path: "site/:id",
    component: EditSiteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}

import { NgModule } from "@angular/core";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { SitesComponent } from "../components/sites/sites.component";
import { EditSiteComponent } from "../components/edit-site/edit-site.component";
import { DashboardComponent } from "./dashboard.component";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule,
    MatCardModule,
    MatIconModule,
    MatListModule
  ],
  declarations: [SitesComponent, EditSiteComponent, DashboardComponent]
})
export class DashboardModule {}

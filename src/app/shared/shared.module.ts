import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavComponent } from "./nav/nav.component";

@NgModule({
  imports: [CommonModule],
  declarations: [NavComponent],
  exports: [NavComponent, CommonModule]
})
export class SharedModule {}

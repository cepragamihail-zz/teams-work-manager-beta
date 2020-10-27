import { Component, OnInit, Input } from "@angular/core";
import { MENU_ITEMS } from "../../_mock/mock_menu-items";
import { MenuItem } from "../../_models";
import { AuthenticationService } from "../../_services";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  @Input() title: string;
  menuItems: MenuItem[];

  constructor(
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.menuItems = MENU_ITEMS;
  }

  logout() {
        this.authenticationService.logout();
    }

}

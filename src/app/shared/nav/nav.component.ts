import { Component, OnInit, Input } from "@angular/core";
import { MenuItem } from "../../_models";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  @Input() title: string;

  constructor() {}

  ngOnInit() {}

  menuItems: MenuItem[] = [
    {
      label: "logout",
      icon: "login",
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: "About",
      icon: "help",
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    }
  ];
}

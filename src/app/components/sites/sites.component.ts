import { Component, OnInit } from "@angular/core";
import { SiteService } from "../../_services/site.service";
import { first } from "rxjs/operators";
import { Site } from "../../_models/site";

@Component({
  selector: "app-sites",
  templateUrl: "./sites.component.html",
  styleUrls: ["./sites.component.css"]
})
export class SitesComponent implements OnInit {
  public loading = false;
  public sites: Site[];
  // public teamsData = TEAMS_DATA;
  // selectedTeam: teamInterface;

  constructor(private siteService: SiteService) {}

  ngOnInit() {
    this.loading = true;
    this.siteService
      .getAll()
      .pipe(first())
      .subscribe(sites => {
        this.loading = false;
        this.sites = sites;
      });
  }
}

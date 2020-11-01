import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Site } from "../_models/site";

@Injectable()
export class SiteService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Site[]>(`${environment.apiUrl}/sites`);
  }
}

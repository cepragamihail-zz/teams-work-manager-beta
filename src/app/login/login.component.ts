import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  loginForm: FormGroup = this.formBuilder.group({
    userName: [, { validators: [Validators.required], updateOn: "change" }],
    password: [, { validators: [Validators.required], updateOn: "change" }]
  });

  ngOnInit() {}

  onSubmit() {
    console.log("login");
  }
}

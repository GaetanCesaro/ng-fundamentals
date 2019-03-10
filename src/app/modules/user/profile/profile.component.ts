import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  templateUrl: "profile.component.html",
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
      .error input {
        background-color: #e3c3c5;
      }
      .error ::-webkit-input-placeholder {
        color: #999;
      }
      .error ::-moz-placeholder {
        color: #999;
      }
      .error :-moz-placeholder {
        color: #999;
      }
      .error :ms-input-placeholder {
        color: #999;
      }
    `
  ]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      let firstName = new FormControl(this.authService.currentUser.firstName, [
        Validators.required,
        Validators.pattern("[A-Z].*")
      ]);
      let lastName = new FormControl(
        this.authService.currentUser.lastName,
        Validators.required
      );

      this.profileForm = new FormGroup({
        firstName: firstName,
        lastName: lastName
      });
    }
  }

  validateFirstName() {
    return (
      this.profileForm.controls.firstName.valid ||
      this.profileForm.controls.firstName.untouched
    );
  }

  validateLastName() {
    return (
      this.profileForm.controls.lastName.valid ||
      this.profileForm.controls.lastName.untouched
    );
  }

  saveProfile() {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(
        this.profileForm.value.firstName,
        this.profileForm.value.lastName
      );
      this.router.navigate(["/events"]);
    }
  }
}

import { AuthService } from '../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  errors = [];

  constructor(private authSservice: AuthService, private router: Router) {}

  ngOnInit() {}

  register(registerForm) {
    this.authSservice.register(registerForm.value).subscribe(
      (result) => {
        console.log('User created');
        this.router.navigate(['/login']);
      },
      (err: HttpErrorResponse) => {
        console.log('Failed to create user');
        this.errors = err.error.errors;
      }
    );
  }
}

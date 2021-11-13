import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginFormGroup();
  }

  loginFormGroup(): void {
    this.loginForm = this.formBuilder.group({
      username: [
        '',
        [Validators.required, Validators.minLength(7), Validators.email],
      ],
      password: ['', [Validators.required, Validators.minLength(7)]],
    });
  }

  onSubmit(): void {
    this.authService.login(
      this.loginForm.value.username,
      this.loginForm.value.password
    );
  }
}

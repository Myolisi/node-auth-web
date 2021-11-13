import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService) {}
  message: any;
  ngOnInit(): void {}

  getPing(): any {
    this.authService.ping().subscribe((res) => {
      this.message = res;
    });
  }
}

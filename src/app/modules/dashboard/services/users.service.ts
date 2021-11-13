import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private api: ApiService) {}
  getUsers(): any {
    this.api.get('admin/all').subscribe((res) => {
      return res;
    });
  }
}

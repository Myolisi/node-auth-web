import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private api: HttpClient) {}
  baseURL = 'http://localhost:8080/api';

  get(url: string, options?: any): any {
    return this.api.get(`${this.baseURL}/${url}`, options);
  }

  post(url: string, body, isLoader?, options?: any): any {
    return this.api.post(`${this.baseURL}/${url}`, body, options);
  }

  delete(url: string, isLoader?, options?: any): any {
    return this.api.delete(`${this.baseURL}/${url}`, options);
  }
}

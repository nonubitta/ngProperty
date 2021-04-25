import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HousingApiService {

  constructor(private http: HttpClient) { }

  getPropertyList() {
    return this.http.get('data/properties.json');
  }
}

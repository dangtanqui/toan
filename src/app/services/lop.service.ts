import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lop } from '../models/lop';
// import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LopService {
  // private urlBase: String = "http://localhost:8080/api";
  private urlBase: String = "https://springangularapi.azurewebsites.net/api";
  // private urlBase = environment.baseUrl;

  constructor(private http: HttpClient) { }

  layTatCaLop(): Observable<Lop[]> {
    return this.http.get<Lop[]>(`${this.urlBase}/lops`);
  }

  layLopBangMaLop(maLop: String): Observable<Lop> {
    return this.http.get<Lop>(`${this.urlBase}/lop/${maLop}`);
  }

  themLop(lop: Lop): Observable<Object> {
    return this.http.post<Object>(`${this.urlBase}/lop`, lop);
  }

  capNhatTenLopBangMaLop(maLop: String, lop: Lop): Observable<Lop> {
    return this.http.put<Lop>(`${this.urlBase}/lop/${maLop}`, lop);
  }

  xoaLopBangMaLop(maLop: String): Observable<Object> {
    return this.http.delete<Object>(`${this.urlBase}/lop/${maLop}`);
  }
}
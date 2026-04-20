import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DatosContacto {
  nombre: string;
  email: string;
  mensaje: string;
}

export interface RespuestaServidor {
  mensaje: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/contacto'; 

  enviarCorreo(datos: DatosContacto): Observable<RespuestaServidor> {
    
    return this.http.post<RespuestaServidor>(this.apiUrl, datos);
    
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root'
})

export class AsistenciaService {
  apiUrl = 'https://g0427e384785cab-apimovil.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/asistencias'; // URL de tu API

  
  



  constructor(private http: HttpClient) {} 

  obtenerAsistenciaUsuario(idUsuario: string) {
    const endpoint = `${this.apiUrl}/usuarios/${idUsuario}/asistencia`;   

    return this.http.get<any>(endpoint); // Se realiza la solicitud GET para obtener la asistencia del usuario
  }
  filtrarAsistencia(usuario: string){
    axios.get(this.apiUrl, { params: {nombre_usuario: usuario} }).then((response: AxiosResponse) => {
    // Manejar la respuesta
    const datosFiltrados = response.data;
    console.log('Datos filtrados:', datosFiltrados);
  })
  .catch((error) => {
    // Manejar errores
    console.error('Error al realizar la solicitud:', error.message);
  });
  }

  actualizarAsistenciaUsuario(idUsuario: string, nuevaAsistencia: number) {
    const endpoint = `${this.apiUrl}/usuarios/${idUsuario}/asistencia`;

    return this.http.put<any>(endpoint, { nuevaAsistencia }); // Se realiza un PUT para actualizar la asistencia luego de el proceso principal 
  }
}
import { Component, OnInit } from '@angular/core';
import { AsistenciaService } from '../services/asistencia.service';


@Component({
  selector: 'app-qrscan',
  templateUrl: './qrscan.page.html',
  styleUrls: ['./qrscan.page.scss'],
})
export class QrscanPage{

  constructor(private asistenciaService: AsistenciaService) {}

  usuarioActual: any; // Información del usuario actual obtenida de dos formas(autenticación por token (No la recomiendo xd) o autenticacion por ID simplemente o haciendo la autenticacion que se hace al principio de verificacion de usuario.)

  procesarCodigoQR() {
    // Suponiendo que el texto de el codigo QR es el ID del alumno
    const idUsuarioEscaneado = 'ID_USUARIO_DEL_CODIGO_QR';

    // Obtener la asistencia actual del usuario, suponiendo que las validaciones anteriores estan bien, deberia funcionar.
    this.asistenciaService.obtenerAsistenciaUsuario(idUsuarioEscaneado).subscribe(
      asistencia => {
        const nuevaAsistencia = asistencia + 1; // Agregar un día a la asistencia actual

        // Actualizar la asistencia del usuario
        this.asistenciaService.actualizarAsistenciaUsuario(idUsuarioEscaneado, nuevaAsistencia).subscribe(
          response => {
            console.log('Asistencia actualizada con éxito:', response);
            // Otra lógica después de actualizar la asistencia si es necesaria
          },
          error => {
            console.error('Error al actualizar la asistencia:', error);
            // Manejo de errores si es necesario
          }
        );
      },
      error => {
        console.error('Error al obtener la asistencia:', error);
        // Manejo de errores si es necesario
      }
    );
  }

}

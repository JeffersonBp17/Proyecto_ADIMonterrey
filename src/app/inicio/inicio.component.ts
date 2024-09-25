import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  images = [
    { src: 'Images/Principal.jpg', caption: 'Imagen Principal' },
    { src: 'Images/VistaEscuela.jpg', caption: 'Vista de la Escuela' },
    { src: 'Images/Noche.jpg', caption: 'Vista de Noche' },
    { src: 'Images/Fiesta.jpg', caption: 'Vista Fiesta' },
    { src: 'Images/Centro.jpg', caption: 'Vista Centro' },
    { src: 'Images/VistaVolcan.jpg', caption: 'Vista del Volcán' }
    
  ];
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from "./encabezado/encabezado.component";
import { PiePaginaComponent } from "./pie-pagina/pie-pagina.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EncabezadoComponent, PiePaginaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ADI-Monterrey';
}

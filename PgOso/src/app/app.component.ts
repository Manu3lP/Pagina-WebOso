import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/Footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true, // Importante en Angular 17+ para standalone components
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
   // 🔧 Debe ser "styleUrls"
})
export class AppComponent {
  title = 'PgOso';

  onClick() {
    alert('¡Hiciste clic en el botón!');
  }
}
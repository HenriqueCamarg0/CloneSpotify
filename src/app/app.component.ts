import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { PlaylistComponent } from "./components/playlist/playlist.component";
import { CardComponent } from "./shared/components/card/card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    FontAwesomeModule,
    FooterComponent,
    HeaderComponent,
    PlaylistComponent,
    CardComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrigido aqui
})
export class AppComponent {
  title = 'CloneSopoty';
}

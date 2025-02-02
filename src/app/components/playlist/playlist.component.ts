// filepath: src/app/components/playlist/playlist.component.ts
import { Component, AfterViewInit } from '@angular/core';
import { GreetingService } from '../../services/greeting.service';
import { CardComponent } from "../../shared/components/card/card.component";

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements AfterViewInit {
  constructor(private greetingService: GreetingService) {}

  ngAfterViewInit() {
    this.greetingService.setGreetingMessage();
    this.greetingService.setupGridObserver();
  }
}
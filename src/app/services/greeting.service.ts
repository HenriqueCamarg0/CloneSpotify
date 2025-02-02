import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {
  constructor(private ngZone: NgZone) {}

  setGreetingMessage() {
    this.ngZone.runOutsideAngular(() => {
      const greetingElement = document.getElementById('greeting');
      if (!greetingElement) return;

      const currentHour = new Date().getHours();
      const greetingMessage =
        currentHour >= 5 && currentHour < 12
          ? 'Bom dia'
          : currentHour >= 12 && currentHour < 18
          ? 'Boa tarde'
          : 'Boa noite';

      this.ngZone.run(() => {
        greetingElement.textContent = greetingMessage;
      });
    });
  }

  setupGridObserver() {
    this.ngZone.runOutsideAngular(() => {
      const containers = document.querySelectorAll('.offer__list-item');

      containers.forEach(container => {
        const observer = new ResizeObserver(() => {
          const containerWidth = (container as HTMLElement).offsetWidth;
          const numColumns = Math.floor(containerWidth / 200);
          (container as HTMLElement).style.gridTemplateColumns = `repeat(${numColumns}, minmax(200px, 1fr))`;
        });

        observer.observe(container);
      });
    });
  }
}

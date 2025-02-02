import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {
  constructor(private ngZone: NgZone) {}

  // Método para definir a mensagem de saudação com base na hora atual
  setGreetingMessage() {
    // Executa o código fora da zona Angular para evitar mudanças de detecção desnecessárias
    this.ngZone.runOutsideAngular(() => {
      // Obtém o elemento com o ID 'greeting'
      const greetingElement = document.getElementById('greeting');
      if (!greetingElement) return;

      // Obtém a hora atual do sistema
      const currentHour = new Date().getHours();
      // Define a mensagem de saudação com base na hora atual
      const greetingMessage =
        currentHour >= 5 && currentHour < 12
          ? 'Bom dia'
          : currentHour >= 12 && currentHour < 18
          ? 'Boa tarde'
          : 'Boa noite';

      // Define o texto do elemento de saudação
      greetingElement.textContent = greetingMessage;
    });
  }

  // Método para configurar o observador de redimensionamento da grade
  setupGridObserver() {
    // Executa o código fora da zona Angular para evitar mudanças de detecção desnecessárias
    this.ngZone.runOutsideAngular(() => {
      // Seleciona todos os elementos com a classe 'offer__list-item'
      const containers = document.querySelectorAll('.offer__list-item');

      // Itera sobre cada elemento selecionado
      containers.forEach(container => {
        // Cria um novo observador de redimensionamento
        const observer = new ResizeObserver(() => {
          // Obtém a largura do contêiner
          const containerWidth = (container as HTMLElement).offsetWidth;
          // Calcula o número de colunas com base na largura do contêiner
          const numColumns = Math.floor(containerWidth / 200);
          // Define o estilo de grade do contêiner com o número de colunas calculado
          (container as HTMLElement).style.gridTemplateColumns = `repeat(${numColumns}, minmax(200px, 1fr))`;
        });

        // Inicia a observação do contêiner para mudanças de tamanho
        observer.observe(container);
      });
    });
  }
}
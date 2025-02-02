import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Adicione todos os ícones da coleção 'fas' à biblioteca
library.add(fas);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
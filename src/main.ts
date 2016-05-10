import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { MorphTouch2016AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(MorphTouch2016AppComponent);

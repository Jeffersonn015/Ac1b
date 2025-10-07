import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Home } from './home/home';
import { Banner } from './banner/banner';
import { FormsModule } from '@angular/forms';
import { produto} from './produto/produto';
import { SobreNos } from './sobre-nos/sobre-nos';

@NgModule({
  declarations: [
    App,
    Home,
    Banner,
    produto,
    SobreNos
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    NgbModule, NgbCarouselModule,
    FormsModule,
    CommonModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }

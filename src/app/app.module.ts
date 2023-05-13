import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OverlayComponent } from './components/shared/overlay/overlay.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavElementsComponent } from './components/navbar/nav-elements/root/nav-elements.component';
import { MobileMenuComponent } from './components/navbar/nav-elements/mobile/mobile-menu/mobile-menu.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
@NgModule({
  declarations: [
    AppComponent,
    OverlayComponent,
    NavbarComponent,
    NavElementsComponent,
    MobileMenuComponent,
    HeroSectionComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OverlayComponent } from './overlay/overlay.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavElementsComponent } from './nav-elements/nav-elements.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { MobileNavElementsComponent } from './mobile-nav-elements/mobile-nav-elements.component';

@NgModule({
  declarations: [
    AppComponent,
    OverlayComponent,
    NavbarComponent,
    NavElementsComponent,
    MobileMenuComponent,
    MobileNavElementsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

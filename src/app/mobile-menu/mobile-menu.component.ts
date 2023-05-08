import { Component } from '@angular/core';
import { OverlayComponent } from '../overlay/overlay.component';
import { MobileNavElementsComponent } from '../mobile-nav-elements/mobile-nav-elements.component';
@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.sass'],
})
export class MobileMenuComponent {
  navComponent = MobileNavElementsComponent;
}

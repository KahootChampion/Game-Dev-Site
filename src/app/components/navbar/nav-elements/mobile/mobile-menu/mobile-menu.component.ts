import { Component, Output, EventEmitter } from '@angular/core';
import { OverlayComponent } from 'src/app/components/shared/overlay/overlay.component';
import { MobileNavElementsComponent } from '../mobile-nav-elements/mobile-nav-elements.component';
@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.sass'],
})
export class MobileMenuComponent {
  navComponent = MobileNavElementsComponent;
  @Output() secondCloseMobileMenu = new EventEmitter<boolean>();

  onCloseMobileMenu(): void {
    console.log('second mobile menu event triggered');
    this.secondCloseMobileMenu.emit(true);
  }
}

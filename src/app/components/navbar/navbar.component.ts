import { Component } from '@angular/core';
import { MobileMenuComponent } from './nav-elements/mobile/mobile-menu/mobile-menu.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent {
  showMobileMenu: boolean = false;

  handleClick() {
    this.showMobileMenu = !this.showMobileMenu;
  }
}

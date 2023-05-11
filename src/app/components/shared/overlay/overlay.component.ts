import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.sass'],
})
export class OverlayComponent {
  @Input() navComponent: any;
  @Output() closeMobileMenu = new EventEmitter<boolean>();

  closeMenu(): void {
    console.log('emitting');

    this.closeMobileMenu.emit(true);
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.sass'],
})
export class OverlayComponent {
  @Input() navComponent: any;
}

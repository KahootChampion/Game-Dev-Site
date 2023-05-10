import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNavElementsComponent } from './mobile-nav-elements.component';

describe('MobileNavElementsComponent', () => {
  let component: MobileNavElementsComponent;
  let fixture: ComponentFixture<MobileNavElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileNavElementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileNavElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

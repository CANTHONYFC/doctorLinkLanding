import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingWhatsappButtonComponent } from './floating-whatsapp-button.component';

describe('FloatingWhatsappButtonComponent', () => {
  let component: FloatingWhatsappButtonComponent;
  let fixture: ComponentFixture<FloatingWhatsappButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingWhatsappButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatingWhatsappButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

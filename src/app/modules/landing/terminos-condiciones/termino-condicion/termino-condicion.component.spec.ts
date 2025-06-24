import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminoCondicionComponent } from './termino-condicion.component';

describe('TerminoCondicionComponent', () => {
  let component: TerminoCondicionComponent;
  let fixture: ComponentFixture<TerminoCondicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminoCondicionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminoCondicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

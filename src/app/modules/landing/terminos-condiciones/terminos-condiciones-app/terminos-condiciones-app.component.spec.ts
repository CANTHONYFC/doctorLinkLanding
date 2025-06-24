import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminosCondicionesAppComponent } from './terminos-condiciones-app.component';

describe('TerminosCondicionesAppComponent', () => {
  let component: TerminosCondicionesAppComponent;
  let fixture: ComponentFixture<TerminosCondicionesAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminosCondicionesAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminosCondicionesAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

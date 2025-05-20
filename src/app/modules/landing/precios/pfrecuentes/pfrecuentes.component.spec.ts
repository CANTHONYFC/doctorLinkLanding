import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfrecuentesComponent } from './pfrecuentes.component';

describe('PfrecuentesComponent', () => {
  let component: PfrecuentesComponent;
  let fixture: ComponentFixture<PfrecuentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfrecuentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PfrecuentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

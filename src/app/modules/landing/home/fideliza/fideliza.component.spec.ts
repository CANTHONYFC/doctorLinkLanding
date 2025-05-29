import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FidelizaComponent } from './fideliza.component';

describe('FidelizaComponent', () => {
  let component: FidelizaComponent;
  let fixture: ComponentFixture<FidelizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FidelizaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FidelizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

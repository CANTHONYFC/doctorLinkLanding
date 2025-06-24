import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitaDemoComponent } from './solicita-demo.component';

describe('SolicitaDemoComponent', () => {
  let component: SolicitaDemoComponent;
  let fixture: ComponentFixture<SolicitaDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitaDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitaDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

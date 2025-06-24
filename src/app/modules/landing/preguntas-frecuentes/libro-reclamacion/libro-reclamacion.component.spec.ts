import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroReclamacionComponent } from './libro-reclamacion.component';

describe('LibroReclamacionComponent', () => {
  let component: LibroReclamacionComponent;
  let fixture: ComponentFixture<LibroReclamacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibroReclamacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibroReclamacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section5aComponent } from './section5a.component';

describe('Section5aComponent', () => {
  let component: Section5aComponent;
  let fixture: ComponentFixture<Section5aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section5aComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section5aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistenciasAngularComponent } from './resistencias-angular.component';

describe('ResistenciasAngularComponent', () => {
  let component: ResistenciasAngularComponent;
  let fixture: ComponentFixture<ResistenciasAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResistenciasAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResistenciasAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

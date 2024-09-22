import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinepolisAngularComponent } from './cinepolis-angular.component';

describe('CinepolisAngularComponent', () => {
  let component: CinepolisAngularComponent;
  let fixture: ComponentFixture<CinepolisAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CinepolisAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinepolisAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

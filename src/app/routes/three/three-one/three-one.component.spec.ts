import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeOneComponent } from './three-one.component';

describe('ThreeOneComponent', () => {
  let component: ThreeOneComponent;
  let fixture: ComponentFixture<ThreeOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

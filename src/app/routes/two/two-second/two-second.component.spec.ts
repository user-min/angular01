import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoSecondComponent } from './two-second.component';

describe('TwoSecondComponent', () => {
  let component: TwoSecondComponent;
  let fixture: ComponentFixture<TwoSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

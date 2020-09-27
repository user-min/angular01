import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoFirstComponent } from './two-first.component';

describe('TwoFirstComponent', () => {
  let component: TwoFirstComponent;
  let fixture: ComponentFixture<TwoFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

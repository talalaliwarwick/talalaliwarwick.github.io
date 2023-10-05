import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeirdComponent } from './weird.component';

describe('WeirdComponent', () => {
  let component: WeirdComponent;
  let fixture: ComponentFixture<WeirdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeirdComponent]
    });
    fixture = TestBed.createComponent(WeirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

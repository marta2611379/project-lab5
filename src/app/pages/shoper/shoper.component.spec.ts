import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoperComponent } from './shoper.component';

describe('ShoperComponent', () => {
  let component: ShoperComponent;
  let fixture: ComponentFixture<ShoperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tmp1Component } from './tmp1.component';

describe('Tmp1Component', () => {
  let component: Tmp1Component;
  let fixture: ComponentFixture<Tmp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tmp1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tmp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

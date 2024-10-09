import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod2Component } from './mod2.component';

describe('Mod2demo1Component', () => {
  let component: Mod2Component;
  let fixture: ComponentFixture<Mod2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mod2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mod2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

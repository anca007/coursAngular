import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod2demo1Component } from './mod2demo1.component';

describe('Mod2demo1Component', () => {
  let component: Mod2demo1Component;
  let fixture: ComponentFixture<Mod2demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mod2demo1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Mod2demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

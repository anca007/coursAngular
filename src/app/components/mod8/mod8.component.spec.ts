import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod8Component } from './mod8.component';

describe('Mod8Component', () => {
  let component: Mod8Component;
  let fixture: ComponentFixture<Mod8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mod8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Mod8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

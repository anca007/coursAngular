import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod4Component } from './mod4.component';

describe('Mod4Component', () => {
  let component: Mod4Component;
  let fixture: ComponentFixture<Mod4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mod4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Mod4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

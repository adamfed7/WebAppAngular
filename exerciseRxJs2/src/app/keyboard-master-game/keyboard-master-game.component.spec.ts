import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardMasterGameComponent } from './keyboard-master-game.component';

describe('KeyboardMasterGameComponent', () => {
  let component: KeyboardMasterGameComponent;
  let fixture: ComponentFixture<KeyboardMasterGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeyboardMasterGameComponent]
    });
    fixture = TestBed.createComponent(KeyboardMasterGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickClickGameComponent } from './quick-click-game.component';

describe('QuickClickGameComponent', () => {
  let component: QuickClickGameComponent;
  let fixture: ComponentFixture<QuickClickGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuickClickGameComponent]
    });
    fixture = TestBed.createComponent(QuickClickGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

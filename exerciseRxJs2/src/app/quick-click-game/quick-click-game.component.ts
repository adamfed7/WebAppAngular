import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';

@Component({
  selector: 'app-quick-click-game',
  templateUrl: './quick-click-game.component.html',
  styleUrls: ['./quick-click-game.component.scss']
})
export class QuickClickGameComponent implements OnInit, OnDestroy {

  buttons = [1, 2, 3];
  targetButton: number | null = null;
  message = '';
  private unsubscribe$ = new Subject<void>();

  ngOnInit(): void {
    timer(0, 2000).pipe(
      takeUntil(this.unsubscribe$),
      map(() => this.buttons[Math.floor(Math.random() * this.buttons.length)])
    ).subscribe(target => {
      this.targetButton = target;
      this.message = `Kliknij przycisk ${target} szybko!`;
      setTimeout(() => {
        if (this.targetButton === target) {
          this.message = 'Za wolno!';
        }
      }, 1000);
    });
  }

  onButtonClick(button: number) {
    if (button === this.targetButton) {
      this.message = 'Udało się!';
      this.targetButton = null;
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}


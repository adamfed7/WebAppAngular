import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { timer, Subject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';

@Component({
  selector: 'app-keyboard-master-game',
  templateUrl: './keyboard-master-game.component.html',
  styleUrls: ['./keyboard-master-game.component.scss']
})
export class KeyboardMasterGameComponent implements OnInit, OnDestroy {

  targetKey: string | null = null;
  message = '';
  score = 0;
  private unsubscribe$ = new Subject<void>();

  ngOnInit(): void {
    timer(0, 2000).pipe(
      takeUntil(this.unsubscribe$),
      map(() => String.fromCharCode(65 + Math.floor(Math.random() * 26)))
    ).subscribe(target => {
      this.targetKey = target;
      this.message = `Wciśnij klawisz ${target} szybko!`;
      setTimeout(() => {
        if (this.targetKey === target) {
          this.message = 'Za wolno!';
        }
      }, 1000); 
    });
  }

  @HostListener('window:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (event.key.toUpperCase() === this.targetKey) {
      this.score++;
      this.message = 'Udało się!';
      this.targetKey = null;
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

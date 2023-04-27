import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Output() gift: EventEmitter<any> = new EventEmitter();

  passGiftParent() {
    // const giftData = [{}];
    this.gift.emit('gift from child');
  }
}

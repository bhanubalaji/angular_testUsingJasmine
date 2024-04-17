import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-ouput-event-emitter',
  templateUrl: './input-ouput-event-emitter.component.html',
  styleUrls: ['./input-ouput-event-emitter.component.scss']
})
export class InputOuputEventEmitterComponent {
  @Input() post!: any;
  @Output() delete = new EventEmitter<any>();

  onDeletePost(event: Event) {
    event.preventDefault();
    this.delete.emit(this.post);
  }
}

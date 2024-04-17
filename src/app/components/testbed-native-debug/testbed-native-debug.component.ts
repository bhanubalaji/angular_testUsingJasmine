import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-testbed-native-debug',
  templateUrl: './testbed-native-debug.component.html',
  styleUrls: ['./testbed-native-debug.component.scss']
})
export class TestbedNativeDebugComponent {
  @Input() post!: any;
  @Output() delete = new EventEmitter<any>();

  onDeletePost(event: Event) {
    event.preventDefault();
    this.delete.emit(this.post);
  }
}

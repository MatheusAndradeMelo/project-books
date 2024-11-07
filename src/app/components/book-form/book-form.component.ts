import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent {
  @Input() bookForm!: FormGroup;
  @Output() formSubmit = new EventEmitter<void>();

  onSubmit() {
    this.formSubmit.emit();
  }
}

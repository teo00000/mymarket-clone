import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  imports: [],
  templateUrl: './confirmation-modal.html',
  styleUrl: './confirmation-modal.css',
})
export class ConfirmationModal {
  title = input.required<string>();
  message = input.required<string>();

  confirmed = output<void>();
  cancelled = output<void>();
}

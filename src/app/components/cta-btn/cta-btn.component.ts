import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cta-btn',
  imports: [NgClass, NgIf],
  templateUrl: './cta-btn.component.html',
  styleUrl: './cta-btn.component.scss',
})
export class CtaBtnComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() label!: string;
  @Input() href!: string;
  @Output() clickEmit = new EventEmitter();

  onClick(): void {
    this.clickEmit.emit();
  }
}

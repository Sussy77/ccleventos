import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'footer-link',
  imports: [NgClass],
  templateUrl: './footer-link.component.html',
  styleUrl: './footer-link.component.scss',
})
export class FooterLinkComponent {
  @Input() link: string;
  @Input() label: string;
  @Input() className: string;
}

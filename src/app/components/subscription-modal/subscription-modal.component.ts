import { Component } from '@angular/core';
import { NewsletterService } from '../../services/newsletter.service';
import { Subject, takeUntil } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-subscription-modal',
  imports: [NgIf],
  templateUrl: './subscription-modal.component.html',
  styleUrl: './subscription-modal.component.scss',
})
export class SubscriptionModalComponent {
  private _unsubscribeAll$ = new Subject<any>();
  isDialog: boolean = false;

  constructor(private newsletterService: NewsletterService) {}

  // ------------------------------------------------------------------------------------------
  // @ LifeCycle Hooks
  // ------------------------------------------------------------------------------------------

  ngOnInit(): void {
    this.newsletterService.showDialog
      .pipe(takeUntil(this._unsubscribeAll$))
      .subscribe((res) => {
        this.isDialog = res;
      });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll$.next(null);
    this._unsubscribeAll$.complete();
  }
}

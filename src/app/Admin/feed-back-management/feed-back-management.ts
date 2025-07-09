import { Component, inject } from '@angular/core';
import { CommonHeader } from '../../common-header/common-header';
import { CommonComponent } from '../../common-sidebar/common-component';
import { PageServiceAdmin } from '../../services/pageServiceAdmin';

@Component({
  selector: 'app-feed-back-management',
  imports: [],
  templateUrl: './feed-back-management.html',
  styleUrl: './feed-back-management.css',
})
export class FeedBackManagement {
  private pageServiceAdmin = inject(PageServiceAdmin);
  ngOnInit(): void {
    this.pageServiceAdmin.pageTitle.set('FeedBack Management');
  }
}

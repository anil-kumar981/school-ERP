import { Component, inject } from '@angular/core';
import { PageServiceAdmin } from '../../services/pageServiceAdmin';

@Component({
  selector: 'app-leave-management',
  imports: [],
  templateUrl: './leave-management.html',
  styleUrl: './leave-management.css',
})
export class LeaveManagement {
  private pageServiceAdmin = inject(PageServiceAdmin);
  ngOnInit(): void {
    this.pageServiceAdmin.pageTitle.set('Leave Management');
  }
}

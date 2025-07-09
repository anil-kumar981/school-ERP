import { Component, inject } from '@angular/core';
import { CommonHeader } from '../../common-header/common-header';
import { CommonComponent } from '../../common-sidebar/common-component';
import { PageServiceAdmin } from '../../services/pageServiceAdmin';

@Component({
  selector: 'app-attendance',
  imports: [],
  templateUrl: './attendance.html',
  styleUrl: './attendance.css',
})
export class Attendance {
  private pageServiceAdmin = inject(PageServiceAdmin);
  ngOnInit(): void {
    this.pageServiceAdmin.pageTitle.set('Attendance View');
  }
}

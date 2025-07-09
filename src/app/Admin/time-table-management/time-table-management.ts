import { Component, inject } from '@angular/core';

import { PageServiceAdmin } from '../../services/pageServiceAdmin';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-time-table-management',
  imports: [RouterLink],
  templateUrl: './time-table-management.html',
  styleUrl: './time-table-management.css',
})
export class TimeTableManagement {
  private pageServiceAdmin = inject(PageServiceAdmin);

  ngOnInit(): void {
    this.pageServiceAdmin.pageTitle.set('Time Table Management');
  }
}

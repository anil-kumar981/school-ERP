import { Component, inject } from '@angular/core';
import { PageServiceAdmin } from '../../services/pageServiceAdmin';

@Component({
  selector: 'app-library-management',
  imports: [],
  templateUrl: './library-management.html',
  styleUrl: './library-management.css',
})
export class LibraryManagement {
  private pageServiceAdmin = inject(PageServiceAdmin);
  ngOnInit(): void {
    this.pageServiceAdmin.pageTitle.set('Library Management');
  }
}

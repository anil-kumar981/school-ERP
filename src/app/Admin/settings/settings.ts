import { Component, inject } from '@angular/core';
import { PageServiceAdmin } from '../../services/pageServiceAdmin';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-settings',
  imports: [RouterLink],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings {
  private pageServiceAdmin = inject(PageServiceAdmin);
  ngOnInit(): void {
    this.pageServiceAdmin.pageTitle.set('Dashboard');
  }
}

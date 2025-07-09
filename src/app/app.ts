import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonHeader } from './common-header/common-header';
import { CommonComponent } from './common-sidebar/common-component';
import { PageServiceAdmin } from './services/pageServiceAdmin';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonHeader, CommonComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'school_ERP';
  pageState = inject(PageServiceAdmin);
}

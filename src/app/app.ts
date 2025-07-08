import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonHeader } from './common-header/common-header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonHeader],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'school_ERP';
}

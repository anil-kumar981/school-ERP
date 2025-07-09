import { Component, input } from '@angular/core';

@Component({
  selector: 'app-common-header',
  imports: [],
  templateUrl: './common-header.html',
  styleUrl: './common-header.css',
})
export class CommonHeader {
  readonly pageTitle = input<string>('');
}

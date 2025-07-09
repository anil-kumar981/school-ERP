import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PageServiceAdmin {
  pageTitle = signal<string>('');
}

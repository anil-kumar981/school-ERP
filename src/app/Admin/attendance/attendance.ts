import { Component } from '@angular/core';
import { CommonHeader } from '../../common-header/common-header';
import { CommonComponent } from '../common-component/common-component';

@Component({
  selector: 'app-attendance',
  imports: [CommonHeader, CommonComponent],
  templateUrl: './attendance.html',
  styleUrl: './attendance.css',
})
export class Attendance {}

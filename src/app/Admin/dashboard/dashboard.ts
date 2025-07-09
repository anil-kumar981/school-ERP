import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  output,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';

import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideChartLine,
  lucideCircleDollarSign,
  lucideCircleCheck,
  lucideCircleUserRound,
  lucideUserPlus,
  lucideCheck,
  lucideDollarSign,
  lucideAlarmClock,
  lucideUsersRound,
  lucideGraduationCap,
  lucideBookOpen,
  lucideCalculator,
  lucideUser,
  lucideCalendarCheck,
  lucideMessageCircle,
  lucideTableOfContents,
  lucideSettings,
  lucideRepeat,
} from '@ng-icons/lucide';
import { CommonComponent } from '../../common-sidebar/common-component';
import { PageServiceAdmin } from '../../services/pageServiceAdmin';

// Register Chart.js globally
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgIcon],
  viewProviders: [
    provideIcons({
      lucideBookOpen,
      lucideGraduationCap,
      lucideChartLine,
      lucideCircleDollarSign,
      lucideCircleUserRound,
      lucideCircleCheck,
      lucideUserPlus,
      lucideDollarSign,
      lucideCheck,
      lucideAlarmClock,
      lucideUsersRound,
      lucideCalculator,
      lucideUser,
      lucideMessageCircle,
      lucideCalendarCheck,
      lucideTableOfContents,
      lucideSettings,
      lucideRepeat,
    }),
  ],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard implements OnInit, AfterViewInit {
  private pageServiceAdmin = inject(PageServiceAdmin);
  ngOnInit(): void {
    this.pageServiceAdmin.pageTitle.set('Dashboard');
  }

  @ViewChild('attendanceChart') attendanceChartRef!: ElementRef;
  @ViewChild('feeChart') feeChartRef!: ElementRef;

  ngAfterViewInit(): void {
    this.renderAttendanceChart();
    this.renderFeeChart();
  }

  renderAttendanceChart() {
    new Chart(this.attendanceChartRef.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Attendance %',
            data: [92, 88, 86, 91, 94, 89],
            backgroundColor: '#4a5cf4',
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true },
        },
      },
    });
  }

  renderFeeChart() {
    new Chart(this.feeChartRef.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Collected', 'Pending'],
        datasets: [
          {
            data: [75, 25],
            backgroundColor: ['#4a5cf4', '#d3d3d3'],
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  }
}

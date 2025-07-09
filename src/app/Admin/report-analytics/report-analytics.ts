import { Component, inject } from '@angular/core';

import { PageServiceAdmin } from '../../services/pageServiceAdmin';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-report-analytics',
  imports: [],
  templateUrl: './report-analytics.html',
  styleUrl: './report-analytics.css',
})
export class ReportAnalytics {
  private pageServiceAdmin = inject(PageServiceAdmin);
  ngOnInit(): void {
    this.pageServiceAdmin.pageTitle.set('Dashboard');
  }
  constructor() {
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    // Line chart - Attendance Trend
    const attendanceCtx = document.getElementById(
      'attendanceChart'
    ) as HTMLCanvasElement;
    new Chart(attendanceCtx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [
          {
            label: 'Attendance %',
            data: [96, 92, 99, 94, 97],
            borderColor: '#4F46E5',
            backgroundColor: 'rgba(79, 70, 229, 0.2)',
            tension: 0.4,
            pointBackgroundColor: '#4F46E5',
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
        },
        scales: {
          y: {
            min: 80,
            max: 100,
            ticks: {
              stepSize: 3,
            },
          },
        },
      },
    });

    // Doughnut chart - Fee Collection
    const feeCtx = document.getElementById('feeChart') as HTMLCanvasElement;
    new Chart(feeCtx, {
      type: 'doughnut',
      data: {
        labels: ['Paid', 'Pending', 'Overdue'],
        datasets: [
          {
            data: [220, 88, 44],
            backgroundColor: ['#4F46E5', '#10B981', '#F59E0B'],
            hoverOffset: 10,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              usePointStyle: true,
            },
          },
        },
      },
    });
  }
}

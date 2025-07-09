import { Component, AfterViewInit, inject } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { CommonComponent } from '../../common-sidebar/common-component';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideAlarmClock,
  lucideDollarSign,
  lucideUsers,
} from '@ng-icons/lucide';
import { PageServiceAdmin } from '../../services/pageServiceAdmin';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.html',
  styleUrls: ['./fees.css'],
  standalone: true,
  imports: [NgIcon],
  viewProviders: [
    provideIcons({ lucideUsers, lucideAlarmClock, lucideDollarSign }),
  ],
})
export class FeesComponent implements AfterViewInit {
  private pageServiceAdmin = inject(PageServiceAdmin);
  ngOnInit(): void {
    this.pageServiceAdmin.pageTitle.set('Fees Management');
  }
  constructor() {
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    this.createPieChart();
    this.createBarChart();
  }

  createPieChart() {
    new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ['Collected', 'Pending', 'Overdue'],
        datasets: [
          {
            data: [80, 10, 10],
            backgroundColor: ['#4e73df', '#f6c23e', '#e74a3b'],
          },
        ],
      },
    });
  }

  createBarChart() {
    new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Monthly Collection',
            data: [48000, 53000, 49000, 57000, 59000, 55000],
            backgroundColor: '#4e73df',
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}

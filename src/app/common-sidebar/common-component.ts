import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideAlarmClock,
  lucideBookOpen,
  lucideCalculator,
  lucideCalendarCheck,
  lucideChartLine,
  lucideCheck,
  lucideCircleCheck,
  lucideCircleDollarSign,
  lucideCircleUserRound,
  lucideDollarSign,
  lucideGraduationCap,
  lucideMessageCircle,
  lucideRepeat,
  lucideSettings,
  lucideTableOfContents,
  lucideUser,
  lucideUserPlus,
  lucideUsersRound,
} from '@ng-icons/lucide';

@Component({
  selector: 'app-common-component',
  imports: [RouterLink, NgIcon],
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
  templateUrl: './common-component.html',
  styleUrl: './common-component.css',
})
export class CommonComponent {
  pageTitle = input<string>('');
  passingData = output<string>();
  PassData() {
    this.passingData.emit(this.pageTitle());
  }
}

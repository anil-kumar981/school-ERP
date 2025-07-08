import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./Admin/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'admin/attendance',
    loadComponent: () =>
      import('./Admin/attendance/attendance').then((m) => m.Attendance),
  },
  {
    path: 'admin/fees',
    loadComponent: () => import('./Admin/fees/fees').then((m) => m.Fees),
  },
  {
    path: 'admin/library',
    loadComponent: () =>
      import('./Admin/library-management/library-management').then(
        (m) => m.LibraryManagement
      ),
  },
  {
    path: 'admin/leave',
    loadComponent: () =>
      import('./Admin/leave-management/leave-management').then(
        (m) => m.LeaveManagement
      ),
  },
  {
    path: 'admin/feedback',
    loadComponent: () =>
      import('./Admin/feed-back-management/feed-back-management').then(
        (m) => m.FeedBackManagement
      ),
  },
  {
    path: 'admin/timetable',
    loadComponent: () =>
      import('./Admin/time-table-management/time-table-management').then(
        (m) => m.TimeTableManagement
      ),
  },
  {
    path: 'admin/teacher-assignment',
    loadComponent: () =>
      import(
        './Admin/time-table-management/teacher-assignment-management/teacher-assignment-management'
      ).then((m) => m.TeacherAssignmentManagement),
  },
  {
    path: 'admin/report-analytics',
    loadComponent: () =>
      import('./Admin/report-analytics/report-analytics').then(
        (m) => m.ReportAnalytics
      ),
  },
];

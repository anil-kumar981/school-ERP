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
    loadComponent: () =>
      import('./Admin/fees/fees').then((m) => m.FeesComponent),
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
    path: 'teacher-assignment',
    loadComponent: () =>
      import(
        './Admin/time-table-management/teacher-assignment-management/teacher-assignment-management'
      ).then((m) => m.TeacherAssignmentManagement),
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
  {
    path: 'admin/settings',
    loadComponent: () =>
      import('./Admin/settings/settings').then((m) => m.Settings),
  },
  {
    path: 'admin/add-user',
    loadComponent: () =>
      import('./Admin/add-user/add-user').then((m) => m.AddUser),
  },
];

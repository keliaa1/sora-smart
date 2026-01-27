import { Routes } from '@angular/router';
import { DashboardPage } from './pages/dashboard.page';
import { DistrictsPage } from './pages/districts.page';
import { RevenuePage } from './pages/revenue.page';
import { AnalyticsPage } from './pages/analytics.page';
import { StaffPage } from './pages/staff.page';
import { LandlordsPage } from './pages/landlords.page';
import { ReportsPage } from './pages/reports.page';
import { SettingsPage } from './pages/settings.page';
import { ActivityLogPage } from './pages/activity-log.page';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardPage },
  { path: 'districts', component: DistrictsPage },
  { path: 'revenue', component: RevenuePage },
  { path: 'analytics', component: AnalyticsPage },
  { path: 'staff', component: StaffPage },
  { path: 'landlords', component: LandlordsPage },
  { path: 'reports', component: ReportsPage },
  { path: 'settings', component: SettingsPage },
  { path: 'activity', component: ActivityLogPage },
  { path: '**', redirectTo: 'dashboard' }
];

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, LottieComponent, MatIconModule, RouterModule, RouterLink],
  template: `
    <div class="dashboard-content">
      <div class="left-section">
        <div class="welcome-card">
          <div class="welcome-text">
            <h1 class="greeting">Property & Rental Ecosystem</h1>
            <p class="subtitle">Digitizing taxation for commercial houses, rental units, and landlord-owned land parcels.</p>

            <div class="quick-actions">
              <button class="action-btn" *ngFor="let action of quickActions"
                      [routerLink]="action.link" (click)="onAction(action)">
                <mat-icon>{{ action.icon }}</mat-icon>
                {{ action.label }}
              </button>
            </div>
          </div>

          <div class="lottie-container">
            <ng-lottie [options]="lottieOptions" width="320px" height="320px"></ng-lottie>
          </div>
        </div>

        <div class="stats-grid">
          <div class="stat-card" *ngFor="let stat of mainStats">
            <button class="stat-more" (click)="alert('Viewing details for ' + stat.label)">
              <mat-icon>more_vert</mat-icon>
            </button>
            <div class="stat-icon">
              <mat-icon>{{ stat.icon }}</mat-icon>
            </div>
            <div class="stat-content">
              <p class="stat-label">{{ stat.label }}</p>
              <h3 class="stat-value">{{ stat.value }}</h3>
            </div>
            <div class="stat-trend" *ngIf="stat.trend" [style.color]="stat.trend.startsWith('+') ? '#10b981' : '#ef4444'">
              {{stat.trend}}
            </div>
          </div>
        </div>
      </div>

      <aside class="notifications-panel">
        <div class="panel-header">
          <div class="filter-section">
            <span>Filter by Sector</span>
            <button class="filter-btn">
              <mat-icon>filter_list</mat-icon>
            </button>
          </div>
        </div>

        <div class="live-map-card">
          <div class="card-title" style="margin-bottom: 15px; font-weight: 600;">Active Property Surveys</div>
          <div class="map-schematic">
            <div class="pulse-dot" style="top: 40%; left: 30%;"></div>
            <div class="pulse-dot" style="top: 20%; left: 60%;"></div>
            <div class="pulse-dot" style="top: 70%; left: 50%;"></div>
          </div>
          <div class="map-stats" style="margin-top: 15px; display: flex; justify-content: space-between; font-size: 12px; opacity: 0.8;">
            <span>85 Rental Units Active</span>
            <span>Rulindo District</span>
          </div>
        </div>

        <div class="notifications-section" style="margin-top: 25px;">
          <div class="activity-header">
            <h3>Rental Activity</h3>
            <button class="see-all" routerLink="/activity">View All</button>
          </div>

          <div class="notification-list">
            <div class="notification-item" *ngFor="let notification of notifications">
              <div class="notification-icon" [style.color]="notification.iconColor">
                <mat-icon>{{ notification.icon }}</mat-icon>
              </div>
              <div class="notification-content">
                <p class="notification-title">{{ notification.title }}</p>
                <p class="notification-subtitle" *ngIf="notification.subtitle">{{ notification.subtitle }}</p>
              </div>
              <button class="notification-more">
                <mat-icon>more_vert</mat-icon>
              </button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  `
})
export class DashboardPage {
  lottieOptions: AnimationOptions = {
    path: '/lottie/Cryptocurrency App.json',
    loop: true,
    autoplay: true
  };

  mainStats = [
    { icon: 'home_work', label: 'Rental Units Surveyed', value: '14,285', trend: '+8%' },
    { icon: 'storefront', label: 'Commercial Revenue', value: 'RWF 620M', trend: '+15%' },
    { icon: 'gavel', label: 'Landlord Arrears (GAP)', value: 'RWF 240M', trend: '-12%' },
    { icon: 'real_estate_agent', label: 'Active Evaluators', value: '54', trend: '+4' }
  ];

  notifications = [
    {
      icon: 'apartment',
      iconColor: '#f59e0b',
      title: 'Missing rental declarations in Gasabo',
      subtitle: '42 landlords haven\'t updated data',
      time: '1 hour ago',
    },
    {
      icon: 'receipt_long',
      iconColor: '#ef4444',
      title: 'Payment dispute: Commercial House #84',
      subtitle: 'Owner claims incorrect square footage',
      time: '3 hours ago',
    },
    {
      icon: 'verified',
      iconColor: '#10b981',
      title: 'Nyarugenge Rental Target Met',
      subtitle: '98% synchronization complete',
      time: '1 day ago',
    }
  ];

  quickActions = [
    { icon: 'add_business', label: 'Add Property', action: 'modal' },
    { icon: 'history_edu', label: 'Rental Reports', link: '/reports' },
    { icon: 'supervisor_account', label: 'Manage Landlords', link: '/landlords' },
    { icon: 'cloud_sync', label: 'Sync GIS Data', action: 'sync' }
  ];

  onAction(action: any) {
    if (action.link) {
      // Navigation is handled by routerLink in template
    } else if (action.action === 'sync') {
      this.alert('GIS Data Synchronization initiated. Connecting to ground-truth parcels...');
    } else if (action.action === 'modal') {
      this.alert('Opening Property Registration Form...');
    }
  }

  alert(msg: string) {
    window.alert(msg);
  }
}

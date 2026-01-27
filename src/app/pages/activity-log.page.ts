import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-activity-log',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule, RouterLink],
  template: `
    <div class="page-container">
      <div class="header-row">
        <h1 class="greeting">System Activity Log</h1>
        <div class="actions">
          <input type="text" placeholder="Search activity..." class="search-input">
        </div>
      </div>

      <div class="content-grid">
        <div class="log-card">
          <div class="log-item" *ngFor="let l of logs">
            <div class="log-time">{{l.time}}</div>
            <div class="log-icon" [style.background]="l.bg">
              <mat-icon>{{l.icon}}</mat-icon>
            </div>
            <div class="log-details">
              <p class="log-text"><strong>{{l.user}}</strong> {{l.action}} <strong>{{l.target}}</strong></p>
              <p class="log-meta">{{l.district}} • {{l.type}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-container { padding: 5px; }
    .header-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; }
    .search-input { padding: 10px 16px; border-radius: 50px; border: 1px solid #efefef; width: 300px; outline: none; box-shadow: 0 2px 10px rgba(0,0,0,0.02); }
    .log-card { background: white; border-radius: 16px; padding: 25px; border: 1px solid #efefef; display: flex; flex-direction: column; gap: 20px; }
    .log-item { display: flex; align-items: flex-start; gap: 15px; padding-bottom: 20px; border-bottom: 1px solid #f9f9f9; }
    .log-item:last-child { border-bottom: none; padding-bottom: 0; }
    .log-time { width: 100px; font-size: 12px; color: #999; font-weight: 500; padding-top: 4px; }
    .log-icon { width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; flex-shrink: 0; }
    .log-icon mat-icon { font-size: 18px; width: 18px; height: 18px; }
    .log-details { flex: 1; }
    .log-text { font-size: 14px; color: #1a1a1a; margin-bottom: 4px; }
    .log-meta { font-size: 12px; color: #666; }
  `]
})
export class ActivityLogPage {
  alert(msg: string) { window.alert(msg); }
  logs = [
    { time: '10:42 AM', user: 'Jean Bosco', action: 'completed survey for', target: 'Commercial House #284', district: 'Gasabo', type: 'Survey', icon: 'check_circle', bg: '#10b981' },
    { time: '09:15 AM', user: 'Admin', action: 'revoked access for', target: 'Robert Musoni', district: 'Kicukiro', type: 'Staff', icon: 'person_remove', bg: '#ef4444' },
    { time: 'Yesterday', user: 'Alice Smith', action: 'registered new landlord', target: 'Mutanguha Eric', district: 'Nyarugenge', type: 'Landlord', icon: 'person_add', bg: '#3b82f6' },
    { time: 'Yesterday', user: 'System', action: 'generated monthly report', target: 'January 2026', district: 'All', type: 'Report', icon: 'summarize', bg: '#f59e0b' }
  ];
}

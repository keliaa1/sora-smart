import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule],
  template: `
    <div class="page-container">
      <div class="header-row">
        <h1 class="greeting">Tax & Survey Reports</h1>
        <div class="actions">
          <button class="create-btn" (click)="alert('Generating new comprehensive tax report...')">
            <mat-icon>summarize</mat-icon>
            Generate New Report
          </button>
          <div class="setting-item">
            <div class="info">
              <span class="label">Survey Alerts</span>
              <span class="desc">Receive notifications for new surveys</span>
            </div>
            <div class="toggle-switch active" (click)="alert('Toggling Survey Alerts...')"></div>
          </div>
          <div class="setting-item">
            <div class="info">
              <span class="label">Weekly Revenue Digest</span>
              <span class="desc">Email summary of total collection</span>
            </div>
            <div class="toggle-switch" (click)="alert('Toggling Weekly Digest...')"></div>
          </div>
        </div>
      </div>

      <div class="content-grid">
        <div class="table-card">
          <table class="data-table">
            <thead>
              <tr>
                <th>Report Title</th>
                <th>Type</th>
                <th>Generated Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let r of reports">
                <td>
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <mat-icon style="color: #666;">description</mat-icon>
                    <span style="font-weight: 500;">{{ r.title }}</span>
                  </div>
                </td>
                <td>
                  <span class="type-tag">{{ r.type }}</span>
                </td>
                <td>{{ r.date }}</td>
                <td>
                  <span class="status-badge" [class]="r.status.toLowerCase()">
                    {{ r.status }}
                  </span>
                </td>
                <td>
                  <button
                    class="icon-btn-small"
                    title="Download"
                    (click)="alert('Downloading report: ' + r.title)"
                  >
                    <mat-icon>download</mat-icon>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .page-container {
        padding: 5px;
      }
      .header-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 25px;
      }
      .table-card {
        background: white;
        border-radius: 16px;
        padding: 25px;
        border: 1px solid #efefef;
      }
      .data-table {
        width: 100%;
        border-collapse: collapse;
      }
      .data-table th {
        text-align: left;
        padding: 15px 12px;
        border-bottom: 1px solid #f0f0f0;
        color: #777;
        font-size: 11px;
        text-transform: uppercase;
        font-weight: 600;
      }
      .data-table td {
        padding: 18px 12px;
        border-bottom: 1px solid #f9f9f9;
        font-size: 14px;
        color: #1a1a1a;
      }
      .type-tag {
        font-size: 10px;
        font-weight: 700;
        background: #f0f0f0;
        padding: 2px 8px;
        border-radius: 4px;
        text-transform: uppercase;
      }
      .status-badge {
        padding: 5px 12px;
        border-radius: 6px;
        font-size: 12px;
        font-weight: 600;
      }
      .status-badge.ready {
        background: #e6f7ef;
        color: #10b981;
      }
      .status-badge.processing {
        background: #fef3c7;
        color: #f59e0b;
      }
      .icon-btn-small {
        background: #f8f9fa;
        border: 1px solid #eee;
        border-radius: 6px;
        cursor: pointer;
        padding: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `,
  ],
})
export class ReportsPage {
  alert(msg: string) {
    toast(msg);
  }
  reports = [
    {
      title: 'Annual Rental Realization 2025',
      type: 'Revenue',
      date: 'Jan 24, 2026',
      status: 'Ready',
    },
    {
      title: 'District Efficiency Audit - Q4',
      type: 'Staff',
      date: 'Jan 20, 2026',
      status: 'Ready',
    },
    {
      title: 'Commercial Property Deficit Analysis',
      type: 'Gap Analysis',
      date: 'Jan 15, 2026',
      status: 'Processing',
    },
  ];
}

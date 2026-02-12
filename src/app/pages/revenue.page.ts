import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-revenue',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule],
  template: `
    <div class="page-container">
      <div class="header-row">
        <h1 class="greeting">Tax Revenue Tracking</h1>
        <div class="date-selector" (click)="alert('Opening Fiscal Period Selector...')">
          <mat-icon>calendar_today</mat-icon>
          <span>January 2026</span>
          <mat-icon>expand_more</mat-icon>
        </div>
      </div>

      <div class="revenue-grid">
        <div class="main-chart-card">
          <div class="chart-header">
            <h3>Revenue Collection Progress</h3>
            <div class="legend">
              <span class="item"><span class="dot actual"></span> Actual Collection</span>
              <span class="item"><span class="dot projected"></span> Projected Revenue</span>
            </div>
          </div>
          <div class="placeholder-chart">
            <!-- Simulated chart visualization -->
            <div class="bars">
              <div class="bar-group" *ngFor="let p of progress">
                <div class="bar projected" [style.height.%]="p.proj"></div>
                <div class="bar actual" [style.height.%]="p.act"></div>
                <span class="bar-label">{{ p.month }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="stats-sidebar">
          <div class="stat-box">
            <span class="label">Total Tax Collected</span>
            <span class="value">RWF 14.8 Billion</span>
            <span class="trend up">+12.4% vs last month</span>
          </div>
          <div class="stat-box">
            <span class="label">Pending Declarations</span>
            <span class="value">1,240</span>
            <span class="trend down">-5.2% improved</span>
          </div>
          <div class="stat-box">
            <span class="label">Survey Impact Factor</span>
            <span class="value">1.45x</span>
            <span class="trend neutral">Stable increase</span>
          </div>
        </div>
      </div>

      <div class="revenue-breakdown">
        <h3>Revenue by Sector</h3>
        <div class="sector-list">
          <div
            class="sector-item"
            *ngFor="let s of sectors"
            (click)="alert('Viewing deep-dive revenue for ' + s.name)"
          >
            <div class="sector-info">
              <div class="icon-wrap" [style.background]="s.color">
                <mat-icon>{{ s.icon }}</mat-icon>
              </div>
              <div class="text">
                <span class="name">{{ s.name }}</span>
                <span class="count">{{ s.surveys }} Surveys</span>
              </div>
            </div>
            <div class="amount">{{ s.amount }}</div>
          </div>
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
      .date-selector {
        display: flex;
        align-items: center;
        gap: 10px;
        background: white;
        padding: 8px 16px;
        border-radius: 8px;
        border: 1px solid #e0e0e0;
        font-size: 14px;
        cursor: pointer;
      }
      .revenue-grid {
        display: grid;
        grid-template-columns: 1fr 280px;
        gap: 20px;
        margin-bottom: 20px;
      }
      .main-chart-card {
        background: white;
        border-radius: 16px;
        padding: 25px;
        border: 1px solid #e0e0e0;
      }
      .chart-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
      }
      .legend {
        display: flex;
        gap: 20px;
        font-size: 12px;
        color: #666;
      }
      .dot {
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin-right: 4px;
      }
      .dot.actual {
        background: #1a1a1a;
      }
      .dot.projected {
        background: #e0e0e0;
      }
      .placeholder-chart {
        height: 250px;
        display: flex;
        align-items: flex-end;
        padding-bottom: 20px;
        border-bottom: 2px solid #f5f5f5;
      }
      .bars {
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 100%;
        align-items: flex-end;
      }
      .bar-group {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        gap: 4px;
        height: 100%;
        position: relative;
      }
      .bar {
        width: 12px;
        border-radius: 4px 4px 0 0;
      }
      .bar.actual {
        background: #1a1a1a;
      }
      .bar.projected {
        background: #e0e0e0;
      }
      .bar-label {
        position: absolute;
        bottom: -25px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 11px;
        color: #999;
      }
      .stats-sidebar {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
      .stat-box {
        background: white;
        border-radius: 16px;
        padding: 20px;
        border: 1px solid #e0e0e0;
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .stat-box .label {
        font-size: 12px;
        color: #666;
      }
      .stat-box .value {
        font-size: 20px;
        font-weight: 700;
        color: #1a1a1a;
      }
      .trend {
        font-size: 11px;
        font-weight: 500;
        margin-top: 4px;
      }
      .trend.up {
        color: #10b981;
      }
      .trend.down {
        color: #ef4444;
      }
      .trend.neutral {
        color: #666;
      }
      .revenue-breakdown {
        background: white;
        border-radius: 16px;
        padding: 20px;
        border: 1px solid #e0e0e0;
      }
      .revenue-breakdown h3 {
        margin-bottom: 20px;
        font-size: 18px;
      }
      .sector-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 15px;
      }
      .sector-item {
        background: #f5f5f5;
        padding: 15px;
        border-radius: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .sector-info {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .icon-wrap {
        width: 36px;
        height: 36px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
      }
      .icon-wrap mat-icon {
        font-size: 18px;
        width: 18px;
        height: 18px;
      }
      .sector-info .text {
        display: flex;
        flex-direction: column;
      }
      .sector-info .name {
        font-size: 13px;
        font-weight: 600;
        color: #1a1a1a;
      }
      .sector-info .count {
        font-size: 11px;
        color: #666;
      }
      .amount {
        font-weight: 600;
        font-size: 14px;
        color: #1a1a1a;
      }
    `,
  ],
})
export class RevenuePage {
  alert(msg: string) {
    toast(msg);
  }
  progress = [
    { month: 'Jul', act: 65, proj: 80 },
    { month: 'Aug', act: 72, proj: 80 },
    { month: 'Sep', act: 85, proj: 90 },
    { month: 'Oct', act: 92, proj: 95 },
    { month: 'Nov', act: 88, proj: 95 },
    { month: 'Dec', act: 95, proj: 100 },
    { month: 'Jan', act: 40, proj: 30 },
  ];

  sectors = [
    { name: 'Commercial', surveys: 1240, amount: 'RWF 8.4B', icon: 'storefront', color: '#1a1a1a' },
    { name: 'Residential', surveys: 4820, amount: 'RWF 3.2B', icon: 'home', color: '#333' },
    { name: 'Industrial', surveys: 420, amount: 'RWF 2.1B', icon: 'factory', color: '#4d4d4d' },
    { name: 'Services', surveys: 850, amount: 'RWF 1.1B', icon: 'room_service', color: '#666' },
  ];
}

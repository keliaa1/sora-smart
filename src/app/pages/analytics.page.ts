import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule],
  template: `
    <div class="page-container">
      <div class="header-row">
        <h1 class="greeting">Government Revenue Analytics</h1>
        <div class="actions">
          <button class="create-btn">
            <mat-icon>file_download</mat-icon>
            Export Yearly Report
          </button>
        </div>
      </div>

      <div class="analytics-grid">
        <!-- Main Chart: Yearly Revenue Trend -->
        <div class="chart-card wide">
          <div class="card-header">
            <div>
              <h3>Yearly Revenue Growth</h3>
              <p class="subtitle">Comparing Rental vs Commercial tax collection trends</p>
            </div>
            <div class="chart-legend">
              <span class="legend-item"><span class="dot rental"></span> Rental</span>
              <span class="legend-item"><span class="dot commercial"></span> Commercial</span>
            </div>
          </div>

          <div class="line-chart-container">
            <svg viewBox="0 0 800 200" class="line-chart">
              <!-- Grid Lines -->
              <line x1="0" y1="0" x2="800" y2="0" stroke="#f0f0f0" />
              <line x1="0" y1="50" x2="800" y2="50" stroke="#f0f0f0" />
              <line x1="0" y1="100" x2="800" y2="100" stroke="#f0f0f0" />
              <line x1="0" y1="150" x2="800" y2="150" stroke="#f0f0f0" />

              <!-- Rental Path -->
              <path
                d="M0,150 L100,130 L200,140 L300,110 L400,90 L500,100 L600,70 L700,50 L800,40"
                fill="none"
                stroke="#10b981"
                stroke-width="3"
                stroke-linecap="round"
              />

              <!-- Commercial Path -->
              <path
                d="M0,160 L100,150 L200,155 L300,140 L400,130 L500,120 L600,110 L700,90 L800,85"
                fill="none"
                stroke="#1a1a1a"
                stroke-width="3"
                stroke-linecap="round"
                stroke-dasharray="8,4"
              />

              <!-- Interaction Points -->
              <circle cx="700" cy="50" r="4" fill="#10b981" />
              <circle cx="700" cy="90" r="4" fill="#1a1a1a" />
            </svg>
            <div class="x-axis">
              <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span
              ><span>Nov</span><span>Dec</span>
            </div>
          </div>
        </div>

        <!-- Side Card: Revenue Source Breakdown -->
        <div class="chart-card">
          <h3>Source Breakdown</h3>
          <div class="donut-container">
            <div class="donut-chart">
              <div class="donut-hole">
                <span class="total">RWF 1.2B</span>
                <span class="label">Total Potential</span>
              </div>
            </div>
          </div>
          <div class="source-list">
            <div class="source-item">
              <span class="swatch commercial"></span>
              <span class="name">Commercial</span>
              <span class="val">45%</span>
            </div>
            <div class="source-item">
              <span class="swatch residential"></span>
              <span class="name">Residential</span>
              <span class="val">35%</span>
            </div>
            <div class="source-item">
              <span class="swatch land"></span>
              <span class="name">Land Plots</span>
              <span class="val">20%</span>
            </div>
          </div>
        </div>

        <!-- Comparison Card: District Revenue Gap -->
        <div class="chart-card wide">
          <h3>Top District Revenue Gaps (Arrears)</h3>
          <div class="bar-chart-container">
            <div class="bar-item" *ngFor="let d of districtGaps">
              <div class="bar-label">{{ d.name }}</div>
              <div class="bar-track">
                <div class="bar-fill" [style.width.%]="d.gapPercent">
                  <span class="bar-val">RWF {{ d.gap }}M</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Insights -->
        <div class="chart-card">
          <h3>Crucial Insights</h3>
          <div class="insight-item">
            <mat-icon style="color: #ef4444;">trending_down</mat-icon>
            <div>
              <p class="i-title">High Arrears in Gasabo</p>
              <p class="i-desc">Landlords are 25% behind on rental declarations this month.</p>
            </div>
          </div>
          <div class="insight-item">
            <mat-icon style="color: #10b981;">payments</mat-icon>
            <div>
              <p class="i-title">Commercial Growth</p>
              <p class="i-desc">Tax realization from commercial units increased by 15% in Q4.</p>
            </div>
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
      .analytics-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
      }
      .chart-card {
        background: white;
        border-radius: 20px;
        padding: 25px;
        border: 1px solid #efefef;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
      }
      .chart-card.wide {
        grid-column: span 2;
      }
      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 25px;
      }
      .subtitle {
        font-size: 12px;
        color: #777;
        margin-top: 4px;
      }
      h3 {
        font-size: 16px;
        font-weight: 700;
        color: #1a1a1a;
        margin-bottom: 5px;
      }

      .chart-legend {
        display: flex;
        gap: 15px;
      }
      .legend-item {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 11px;
        font-weight: 600;
      }
      .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
      }
      .dot.rental {
        background: #10b981;
      }
      .dot.commercial {
        border: 2px solid #1a1a1a;
      }

      .line-chart-container {
        margin-top: 10px;
      }
      .line-chart {
        width: 100%;
        height: 200px;
        overflow: visible;
      }
      .x-axis {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        color: #999;
        font-size: 10px;
        font-weight: 600;
      }

      .bar-chart-container {
        display: flex;
        flex-direction: column;
        gap: 18px;
        margin-top: 20px;
      }
      .bar-item {
        display: flex;
        align-items: center;
        gap: 15px;
      }
      .bar-label {
        width: 100px;
        font-size: 12px;
        font-weight: 600;
        color: #555;
      }
      .bar-track {
        flex: 1;
        height: 32px;
        background: #f8f9fa;
        border-radius: 6px;
        position: relative;
        overflow: hidden;
      }
      .bar-fill {
        height: 100%;
        background: #1a1a1a;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 12px;
        transition: width 1s ease-out;
      }
      .bar-val {
        color: white;
        font-size: 10px;
        font-weight: 700;
      }

      .donut-container {
        display: flex;
        justify-content: center;
        margin-top: 25px;
      }
      .donut-chart {
        width: 140px;
        height: 140px;
        border-radius: 50%;
        background: conic-gradient(#1a1a1a 0% 45%, #666 45% 80%, #eee 80% 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
      }
      .donut-hole {
        width: 100px;
        height: 100px;
        background: white;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.05);
      }
      .donut-hole .total {
        font-size: 14px;
        font-weight: 800;
        color: #1a1a1a;
      }
      .donut-hole .label {
        font-size: 9px;
        color: #999;
        text-transform: uppercase;
        font-weight: 600;
      }

      .source-list {
        margin-top: 25px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .source-item {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 12px;
      }
      .swatch {
        width: 10px;
        height: 10px;
        border-radius: 3px;
      }
      .swatch.commercial {
        background: #1a1a1a;
      }
      .swatch.residential {
        background: #666;
      }
      .swatch.land {
        background: #eee;
        border: 1px solid #ddd;
      }
      .source-item .name {
        flex: 1;
        color: #555;
      }
      .source-item .val {
        font-weight: 700;
        color: #1a1a1a;
      }

      .insight-item {
        display: flex;
        gap: 15px;
        margin-top: 20px;
        padding-bottom: 15px;
        border-bottom: 1px solid #f9f9f9;
      }
      .insight-item:last-child {
        border-bottom: none;
      }
      .i-title {
        font-size: 13px;
        font-weight: 700;
        color: #1a1a1a;
        margin-bottom: 2px;
      }
      .i-desc {
        font-size: 11px;
        color: #666;
        line-height: 1.4;
      }
    `,
  ],
})
export class AnalyticsPage {
  districtGaps = [
    { name: 'Gasabo', gap: 700, gapPercent: 90 },
    { name: 'Kicukiro', gap: 450, gapPercent: 65 },
    { name: 'Musanze', gap: 480, gapPercent: 68 },
    { name: 'Nyarugenge', gap: 250, gapPercent: 40 },
    { name: 'Huye', gap: 110, gapPercent: 20 },
  ];
}

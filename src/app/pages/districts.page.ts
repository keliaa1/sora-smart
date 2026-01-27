import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, RouterLink } from '@angular/router';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-districts',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule, RouterLink],
  template: `
    <div class="page-container">
      <div class="header-row">
        <h1 class="greeting">Property & Rental Tracking</h1>
        <div class="actions">
          <button class="create-btn" (click)="alert('Opening Property Registration Form...')">
            <mat-icon>add_business</mat-icon>
            Register Property
          </button>
          <button class="create-btn" (click)="alert('Exporting high-fidelity PDF report...')">
            <mat-icon>file_download</mat-icon>
            Export Yearly Report
          </button>
        </div>
      </div>

      <div class="content-grid">
        <div class="actions">
          <button class="create-btn" (click)="alert('Setting up new ground evaluator account...')">
            <mat-icon>person_add</mat-icon>
            Add Evaluator
          </button>
        </div>
        <div class="table-card">
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>District</th>
                  <th>Rental Houses</th>
                  <th>Commercial Units</th>
                  <th>Potential Tax</th>
                  <th>Actual Received</th>
                  <th>Revenue GAP</th>
                  <th>Realization</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let d of districts">
                  <td>{{d.name}}</td>
                  <td>{{d.rentals}}</td>
                  <td>{{d.commercial}}</td>
                  <td class="revenue-cell">{{d.potential}}</td>
                  <td class="revenue-cell" style="color: #10b981;">{{d.collected}}</td>
                  <td class="revenue-cell" style="color: #ef4444;">{{d.gap}}</td>
                  <td>
                    <div class="progress-bar-small">
                      <div class="progress-fill" [style.width.%]="d.realization" [style.background]="d.realization < 70 ? '#ef4444' : '#10b981'"></div>
                    </div>
                    <span style="font-size: 11px; margin-top: 4px; display: block;">{{d.realization}}%</span>
                  </td>
                  <td>
                    <span class="status-badge" [class]="d.status.toLowerCase()">
                      {{d.status}}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-container { padding: 5px; }
    .header-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; }
    .content-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
    .table-card { background: white; border-radius: 16px; padding: 25px; box-shadow: 0 4px 20px rgba(0,0,0,0.04); border: 1px solid #efefef; overflow: hidden; }
    .table-responsive { width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; }
    .data-table { width: 100%; border-collapse: collapse; min-width: 800px; }
    .data-table th { text-align: left; padding: 15px 12px; border-bottom: 1px solid #f0f0f0; color: #777; font-size: 11px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px; }
    .data-table td { padding: 18px 12px; border-bottom: 1px solid #f9f9f9; font-size: 14px; color: #1a1a1a; vertical-align: middle; }
    .revenue-cell { font-weight: 600; font-family: 'JetBrains Mono', monospace; }
    .progress-bar-small { width: 60px; height: 4px; background: #eee; border-radius: 10px; overflow: hidden; }
    .progress-fill { height: 100%; }
    .status-badge { padding: 5px 12px; border-radius: 6px; font-size: 12px; font-weight: 600; }
    .status-badge.completed { background: #e6f7ef; color: #10b981; }
    .status-badge.warning { background: #fef3c7; color: #f59e0b; }
    .status-badge.pending { background: #f5f5f5; color: #666; }
  `]
})
export class DistrictsPage {
  alert(msg: string) { toast(msg); }
  districts = [
    { name: 'Nyarugenge', rentals: 4280, commercial: 850, potential: 'RWF 1.5B', collected: 'RWF 1.25B', gap: 'RWF 250M', realization: 83, status: 'Completed' },
    { name: 'Gasabo', rentals: 6120, commercial: 1240, potential: 'RWF 2.8B', collected: 'RWF 2.1B', gap: 'RWF 700M', realization: 75, status: 'Warning' },
    { name: 'Kicukiro', rentals: 3850, commercial: 720, potential: 'RWF 1.4B', collected: 'RWF 950M', gap: 'RWF 450M', realization: 67, status: 'Warning' },
    { name: 'Musanze', rentals: 2940, commercial: 420, potential: 'RWF 1.1B', collected: 'RWF 620M', gap: 'RWF 480M', realization: 56, status: 'Pending' },
    { name: 'Rubavu', rentals: 4100, commercial: 890, potential: 'RWF 1.3B', collected: 'RWF 1.15B', gap: 'RWF 150M', realization: 88, status: 'Completed' },
    { name: 'Huye', rentals: 3200, commercial: 650, potential: 'RWF 950M', collected: 'RWF 840M', gap: 'RWF 110M', realization: 88, status: 'Completed' }
  ];
}

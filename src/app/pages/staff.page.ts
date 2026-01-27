import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-staff',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule, RouterLink],
  template: `
    <div class="page-container">
      <div class="header-row">
        <h1 class="greeting">Staff & Field Evaluators</h1>
        <div class="actions">
          <button class="create-btn">
            <mat-icon>person_add</mat-icon>
            Add Evaluator
          </button>
        </div>
      </div>

      <div class="content-grid">
        <div class="table-card">
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Evaluator</th>
                  <th>District</th>
                  <th>Active Surveys</th>
                  <th>Efficiency</th>
                  <th>Last Active</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let s of staff">
                  <td>
                    <div style="display: flex; align-items: center; gap: 10px;">
                      <img [src]="s.avatar" style="width: 32px; height: 32px; border-radius: 50%;">
                      <span>{{s.name}}</span>
                    </div>
                  </td>
                  <td>{{s.district}}</td>
                  <td>{{s.activeSurveys}}</td>
                  <td>
                    <div class="efficiency-tag" [style.background]="s.efficiency > 80 ? '#e6f7ef' : '#fef3c7'">
                      {{s.efficiency}}%
                    </div>
                  </td>
                  <td>{{s.lastActive}}</td>
                  <td>
                    <span class="status-dot" [style.background]="s.online ? '#10b981' : '#ccc'"></span>
                    {{s.online ? 'Online' : 'Offline'}}
                  </td>
                  <td>
                    <div style="display: flex; gap: 8px;">
                      <button class="icon-btn-small" title="Edit"><mat-icon>edit</mat-icon></button>
                      <button class="icon-btn-small" title="Revoke" style="color: #ef4444;"><mat-icon>person_remove</mat-icon></button>
                    </div>
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
    .efficiency-tag { padding: 4px 8px; border-radius: 6px; font-size: 12px; font-weight: 600; display: inline-block; }
    .status-dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; margin-right: 6px; }
    .icon-btn-small { background: #f8f9fa; border: 1px solid #eee; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; padding: 6px; transition: all 0.2s; }
    .icon-btn-small:hover { background: #eee; }
    .icon-btn-small mat-icon { font-size: 16px; width: 16px; height: 16px; }
  `]
})
export class StaffPage {
  alert(msg: string) { window.alert(msg); }
  staff = [
    { name: 'John Doe', district: 'Gasabo', activeSurveys: 24, efficiency: 92, lastActive: '2 mins ago', online: true, avatar: 'https://i.pravatar.cc/150?u=1' },
    { name: 'Alice Smith', district: 'Nyarugenge', activeSurveys: 18, efficiency: 88, lastActive: '1 hour ago', online: true, avatar: 'https://i.pravatar.cc/150?u=2' },
    { name: 'Robert Musoni', district: 'Kicukiro', activeSurveys: 42, efficiency: 76, lastActive: '12 mins ago', online: false, avatar: 'https://i.pravatar.cc/150?u=3' },
    { name: 'Grace Uwase', district: 'Musanze', activeSurveys: 12, efficiency: 95, lastActive: 'Now', online: true, avatar: 'https://i.pravatar.cc/150?u=4' },
    { name: 'Kevin Rukundo', district: 'Rubavu', activeSurveys: 31, efficiency: 81, lastActive: '3 hours ago', online: false, avatar: 'https://i.pravatar.cc/150?u=5' }
  ];
}

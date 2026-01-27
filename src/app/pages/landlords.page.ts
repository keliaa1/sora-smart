import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-landlords',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule, RouterLink],
  template: `
    <div class="page-container">
      <div class="header-row">
        <h1 class="greeting">Landlord Database</h1>
        <div class="actions">
          <button class="create-btn">
            <mat-icon>person_add</mat-icon>
            Register Landlord
          </button>
        </div>
      </div>

      <div class="content-grid">
        <div class="table-card">
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Landlord Name</th>
                  <th>Contact</th>
                  <th>Total Properties</th>
                  <th>Annual Potential</th>
                  <th>Paid Revenue</th>
                  <th>Arrears</th>
                  <th>Compliance</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let l of landlords">
                  <td>{{l.name}}</td>
                  <td>{{l.contact}}</td>
                  <td>{{l.properties}}</td>
                  <td class="revenue-cell">{{l.potential}}</td>
                  <td class="revenue-cell" style="color: #10b981;">{{l.paid}}</td>
                  <td class="revenue-cell" style="color: #ef4444;">{{l.arrears}}</td>
                  <td>
                    <span class="status-badge" [class]="l.compliance === 'High' ? 'completed' : 'warning'">
                      {{l.compliance}}
                    </span>
                  </td>
                  <td>
                    <button class="icon-btn-small"><mat-icon>visibility</mat-icon></button>
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
    .table-responsive { width: 100%; overflow-x: auto; }
    .data-table { width: 100%; border-collapse: collapse; min-width: 900px; }
    .data-table th { text-align: left; padding: 15px 12px; border-bottom: 1px solid #f0f0f0; color: #777; font-size: 11px; text-transform: uppercase; font-weight: 600; }
    .data-table td { padding: 18px 12px; border-bottom: 1px solid #f9f9f9; font-size: 14px; color: #1a1a1a; vertical-align: middle; }
    .revenue-cell { font-weight: 600; font-family: 'JetBrains Mono', monospace; }
    .status-badge { padding: 5px 12px; border-radius: 6px; font-size: 12px; font-weight: 600; }
    .status-badge.completed { background: #e6f7ef; color: #10b981; }
    .status-badge.warning { background: #fef3c7; color: #f59e0b; }
    .icon-btn-small { background: #f8f9fa; border: 1px solid #eee; border-radius: 6px; cursor: pointer; padding: 6px; display: flex; align-items: center; justify-content: center; }
  `]
})
export class LandlordsPage {
  alert(msg: string) { window.alert(msg); }
  landlords = [
    { name: 'Mutanguha Eric', contact: '+250 788 123 456', properties: 12, potential: 'RWF 4.2M', paid: 'RWF 3.8M', arrears: 'RWF 400K', compliance: 'High' },
    { name: 'Umuhoza Alice', contact: '+250 788 654 321', properties: 8, potential: 'RWF 2.1M', paid: 'RWF 1.2M', arrears: 'RWF 900K', compliance: 'Medium' },
    { name: 'Kagabo John', contact: '+250 788 111 222', properties: 4, potential: 'RWF 1.5B', paid: 'RWF 1.5B', arrears: 'RWF 0', compliance: 'High' }
  ];
}

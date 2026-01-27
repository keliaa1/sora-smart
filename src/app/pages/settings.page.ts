import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, RouterLink } from '@angular/router';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule, RouterLink],
  template: `
    <div class="page-container">
      <div class="header-row">
        <h1 class="greeting">System Settings</h1>
      </div>

      <div class="settings-grid">
        <div class="settings-group">
          <h3>RRA Branding & Region</h3>
          <div class="setting-item">
            <div class="info">
              <span class="label">Organization Name</span>
              <span class="desc">Displayed on all official reports</span>
            </div>
            <input type="text" value="Rwanda Revenue Authority" class="setting-input">
          </div>
          <div class="setting-item">
            <div class="info">
              <span class="label">Primary Currency</span>
              <span class="desc">Base currency for tax calculations</span>
            </div>
            <select class="setting-select">
              <option>RWF - Rwandan Franc</option>
              <option>USD - US Dollar</option>
            </select>
          </div>
        </div>

        <div class="settings-group">
          <h3>Notification Preferences</h3>
          <div class="setting-item">
            <div class="info">
              <span class="label">Survey Alerts</span>
              <span class="desc">Notify when surveys are pending for >48h</span>
            </div>
            <div class="toggle-switch active"></div>
          </div>
          <div class="setting-item">
            <div class="info">
              <span class="label">Weekly Revenue Digest</span>
              <span class="desc">Email summary of total collection</span>
            </div>
            <div class="toggle-switch"></div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-container { padding: 5px; }
    .header-row { margin-bottom: 25px; }
    .settings-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
    .settings-group { background: white; border-radius: 16px; padding: 25px; border: 1px solid #efefef; }
    h3 { font-size: 16px; font-weight: 700; margin-bottom: 20px; color: #1a1a1a; }
    .setting-item { display: flex; justify-content: space-between; align-items: center; padding: 15px 0; border-bottom: 1px solid #f9f9f9; }
    .setting-item:last-child { border-bottom: none; }
    .info { display: flex; flex-direction: column; gap: 4px; }
    .label { font-size: 14px; font-weight: 600; color: #1a1a1a; }
    .desc { font-size: 12px; color: #777; }
    .setting-input, .setting-select { padding: 8px 12px; border-radius: 8px; border: 1px solid #ddd; font-family: inherit; font-size: 13px; outline: none; }
    .toggle-switch { width: 40px; height: 20px; background: #eee; border-radius: 20px; position: relative; cursor: pointer; transition: background 0.3s; }
    .toggle-switch::after { content: ''; position: absolute; width: 16px; height: 16px; background: white; border-radius: 50%; top: 2px; left: 2px; transition: transform 0.3s; }
    .toggle-switch.active { background: #1a1a1a; }
    .toggle-switch.active::after { transform: translateX(20px); }
  `]
})
export class SettingsPage {
  alert(msg: string) { toast(msg); }
}

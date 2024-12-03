import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SidebarMenu } from './interfaces/sidebar.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  standalone: false,
})
export class SidebarComponent {
  @Input() isSidebarVisible = false;
  @Input() isSidebarToggle = false;

  constructor() {}

  ngOnInit() {}

  sidebarMenu: SidebarMenu[] = [
    {
      mainView: [
        { icon: 'dashboard', name: 'Dashboard', route: '/dashboard' },
        { icon: 'manage accounts', name: 'Accounts', route: '/accounts' },
        { icon: 'directions car', name: 'All Vehicle', route: '/all-vehicle' },
        {
          icon: 'bar_chart_4_bars',
          name: 'Expense Tracker',
          route: '/expense-tracker',
        },
        { icon: 'inventory', name: 'Fuel Record', route: '/fuel-record' },
        { icon: 'garage', name: 'Ready To Go', route: '/ready-to-go-vehicles' },
        {
          icon: 'search_activity',
          name: 'Recent Activity',
          route: '/recent-activity',
        },

        {
          icon: 'car crash',
          name: 'Insuarance Management',
          route: '/insurance-management',
        },
        { icon: 'engineering', name: 'Maintenance', route: '/maintenance' },
        {
          icon: 'Notification Multiple',
          name: 'Notifications',
          route: '/notifications',
        },
        {
          icon: 'monitoring',
          name: 'Report & Analytics',
          route: '/report-and-analytics',
        },
        {
          icon: 'Service Toolbox',
          name: 'Service Record',
          route: '/service-record',
        },
      ],
      advanceView: [
        {
          icon: 'feature_search',
          name: 'Additional Features',
          route: '/additional-features',
          children: [
            {
              icon: 'ev_mobiledata_badge',
              name: 'Vin Decoding',
              route: '/vin-decoding',
            },
          ],
        },
        {
          icon: 'Notifications Active',
          name: 'Alert & Notificatons',
          route: '/alert-and-notificatons',
        },
        { icon: 'settings', name: 'Settings', route: '/settings' },
        { icon: 'shield_person', name: 'Permissions', route: '/permissions' },
        {
          icon: 'encrypted',
          name: 'Documents Locker',
          route: '/store-documents',
        },
        {
          icon: 'groups_2',
          name: 'Staff Management',
          route: '/staff-management',
        },
        {
          icon: 'no_crash',
          name: 'Manage Vahicle',
          route: '/vehicle-management',
        },
        {
          icon: 'shield_locked',
          name: 'Authentication',
          route: '/authentication',
        },
      ],
    },
  ];
}

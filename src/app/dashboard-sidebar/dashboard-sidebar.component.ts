import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.css']
})
export class DashboardSidebarComponent {

  constructor(private router: Router){}

  onAllDay(){
    this.router.navigate(['/home']);
  }

  onBreakfast(){
    this.router.navigate(['/breakfast']);
  }
  onLunch(){
    this.router.navigate(['/lunch'])
  }
  onDinner(){
    this.router.navigate(['/dinner'])
  }

}

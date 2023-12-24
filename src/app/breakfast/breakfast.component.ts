import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent {

  
  constructor(private router: Router) {}

  onAddItem(){
    this.router.navigate(['/additem'])
  }

  onAddCategory(){
    this.router.navigate(['/addcategory'])
  }
}

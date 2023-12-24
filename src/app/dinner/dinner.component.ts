import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.css']
})
export class DinnerComponent {
    
  constructor(private router: Router) {}

  onAddItem(){
    this.router.navigate(['/additem'])
  }
  onAddCategory(){
    this.router.navigate(['/addcategory'])
  }
}

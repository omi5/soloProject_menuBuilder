import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent {

  constructor(private router: Router) {}

  onAddItem(){
    this.router.navigate(['/additem'])
  }
  onAddCategory(){
    this.router.navigate(['/addcategory'])
  }

}

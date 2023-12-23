import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes} from '@angular/router';
// import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { LunchComponent } from './lunch/lunch.component';
import { DinnerComponent } from './dinner/dinner.component';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { CategoryListComponent } from './category-list/category-list.component';


const routes: Routes = [
  {
    path: '', component: CategoryListComponent //here we add the login component
  },
  {
    path:'home', component: HomepageComponent
  },
  {
    path: 'breakfast', component: BreakfastComponent
  },
  {
    path:'lunch', component: LunchComponent
  },
  {
    path:'dinner', component: DinnerComponent
  },
  {
    path:'additem', component: AddItemFormComponent
  }

 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
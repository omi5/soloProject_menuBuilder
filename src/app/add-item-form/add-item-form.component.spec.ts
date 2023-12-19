import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemFormComponent } from './add-item-form.component';

describe('AddItemFormComponent', () => {
  let component: AddItemFormComponent;
  let fixture: ComponentFixture<AddItemFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddItemFormComponent]
    });
    fixture = TestBed.createComponent(AddItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

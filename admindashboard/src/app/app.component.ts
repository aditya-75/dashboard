import { Component } from '@angular/core';
import { FormBuilder } from'@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admindashboard';

  constructor(private fb : FormBuilder){ }
userprofileform=this.fb.group({
enterProductName:['',Validators.required],
enterModelNo:['',Validators.required],
enterDateOfPurchase:['',Validators.required],
enterContactNumber:['',Validators.required],
enterProblem:['',Validators.required],
dashBoardBody:['',Validators.required]



})

}

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  
  registerForm : FormGroup;
  lstData = [];
 // IsAvailable :boolean = true;
 itemRows: FormArray;
 enableEdit: boolean = false;

 FormArrayfb(){
  this.registerForm = this.fb.group({
    itemRows: this.fb.array([this.initItemRows()])
  });
 }
  initItemRows() {
   return this.fb.group({
    id :[''],
     name :['' , Validators.required],
     bod : ['', Validators.required],
     add :['', Validators.required],
     gender :['', Validators.required],
     mail: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,63}')])],
     contactno  :['', Validators.compose([Validators.required, Validators.pattern('[0-9]\\d{9}')])],
     isEdit : [true]
   });
 }
 get formArr() {
   return this.registerForm.get('itemRows') as FormArray;
 }
 add() {
   this.formArr.push(this.initItemRows());
 }
 save(i) {
  if (this.registerForm.valid) {
    const form_data = this.registerForm.value;
    console.log(form_data);
    this.formArr.controls[i].disable();   
  };
}
cancleEdit(i) {
  this.formArr.controls[i].disable();
}
editRow(i) {
  this.formArr.controls[i].enable();
}

 deleteRow(i: number) {
  if (confirm("Are you sure you want to delete this record?")) {
       this.formArr.removeAt(i);
    }
 }
 submitForm($ev, value: any) {
   for (let val in this.registerForm.controls) {
     this.registerForm.controls[val].markAsTouched();
   };
   if (this.registerForm.valid) {
     const form_data = this.registerForm.value;
     console.log(form_data);
   };
 }
 constructor(private fb : FormBuilder) {  }
  ngOnInit() {
    this.FormArrayfb()
   }
}

import { Component, OnInit } from '@angular/core';
import { CustomValidators } from 'ng2-validation';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registraion',
  templateUrl: './registraion.component.html',
  styleUrls: ['./registraion.component.css']
})
export class RegistraionComponent implements OnInit {
  
  registerForm : FormGroup;


   initItemRows() {
    let password = new FormControl(null, Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9]{6,10}$')]));
    let confirm_password = new FormControl(null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9]{6,10}$'),CustomValidators.equalTo(password)]));
    return this.fb.group({
      name :['' , Validators.required],
      bod : ['', Validators.required],
      add :['', Validators.required],
      gender :['', Validators.required],
      mail: ['', Validators.compose([Validators.required, Validators.email])],
      pass : password,
      cpass : confirm_password,
      contactno  :[null, Validators.compose([Validators.required, Validators.pattern('[0-9]\\d{9}')])],
    });
  }

  get formArr() {
    return this.registerForm.get('itemRows') as FormArray;
  }

  addNewRow() {
    this.formArr.push(this.initItemRows());
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
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
  back( ){
    this.router.navigate(['/', 'list']);
  }
  constructor(private fb : FormBuilder, private router:Router) {
    
    this.registerForm = this.fb.group({
      itemRows: this.fb.array([this.initItemRows()])
    });
   }

  ngOnInit() {
  }


}

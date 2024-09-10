import { NgIf, NgClass } from "@angular/common";
import { Component } from "@angular/core";
import {ReactiveFormsModule } from "@angular/forms";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector : "app-simple-interest",
  standalone : true,
  imports : [ReactiveFormsModule, NgClass, NgIf],
  templateUrl : './simple-interest.component.html',
  styleUrl : './simple-interest.component.css',
})

export class SimpleInterestComponent{

  SimpleInterestForm = new FormGroup({
    principal : new FormControl(100, [Validators.required, Validators.min(100)]),
    rate : new FormControl(1, [Validators.required, Validators.min(1)]),
    time : new FormControl(1, [Validators.required, Validators.min(1)]),
  });

  get f(){
    return this.SimpleInterestForm.controls;
  }

  submit(){
    console.log("Form Submitted");
    const principal = this.SimpleInterestForm.get('princial')?.value??1;
    const rate = this.SimpleInterestForm.get('rate')?.value??1;
    const time = this.SimpleInterestForm.get("time")?.value??1;

    const simpleInterest = (principal * rate * time) /100;
    console.log("Simple Interest : ", simpleInterest);
    console.log("Form Value : ", this.SimpleInterestForm.value);
  }
  

}
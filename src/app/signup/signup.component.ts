import {Component, OnInit} from '@angular/core';
import {Sharing} from '../model/sharing';
import {UserService} from '../user.service';
import {FormGroup,FormControl,FormBuilder,Validators,NgForm} from '@angular/forms'
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;
 
  data:string; 
  sharing:Sharing=new Sharing();
  
  constructor(public myservice:UserService,private fb:FormBuilder,private router:Router ) { 
     this.signupForm=this.fb.group({
       username:['', Validators.compose([Validators.required, Validators.minLength(5)])],
       email:['',Validators.compose([Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])],
       password:['',Validators.compose([Validators.required])]
     });
    

  }
  get f() { return this.signupForm.controls; }
  // get email() { return this.signupForm.get('email'); }
  // get password() { return this.signupForm.get('password'); }

  signup(){
    this.myservice.getdata(this.signupForm.value);
    this.router.navigateByUrl('/login');
  }
  
  GetData(value){
   this.sharing.username=value.username;
   this.sharing.password=value.password;
   this.sharing.email=value.email;
  }
  reset(){
    this.signupForm.reset();
  }
  ngOnInit() {
  }

}

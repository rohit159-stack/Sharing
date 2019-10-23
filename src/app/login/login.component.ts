import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Sharing} from '../model/sharing';
import { UserService } from '../user.service';
import {FormGroup,FormBuilder,FormControl,NgForm,Validators} from '@angular/forms'

import { from } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;

  @Output() myoutput:EventEmitter<any>= new EventEmitter();

  dataList:any[]=[];
  flag:boolean;
  sharing:Sharing=new Sharing();
  constructor(public myService:UserService,public fb:FormBuilder, private router:Router) { 
    this.loginForm=this.fb.group({
      username:['', Validators.compose([Validators.required, Validators.minLength(5)])],
      password:['',Validators.compose([Validators.required])]
    });
  }
  ngOnInit() {
   this.dataList= this.myService.senddata();
   this.flag=false;
  }  

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  login(){
    if(this.dataList.length>0){
      for(let i=0;i<this.dataList.length;i++)
      {
        //alert(this.loginForm);
        console.log(this.dataList[i].username);
        if(this.loginForm.value.username == this.dataList[i].username && this.loginForm.value.password == this.dataList[i].password)
        {
          //alert("sff");
          this.flag=true;
        }
        
      }
      if(this.flag){
        alert("Login Successfull");
        this.flag=false;
      }
      else{
        alert("Invalid credential");
      }
    }
    else{
      alert("Please Sign up First");
      this.router.navigateByUrl('/signup');
    }
  }

}
    // this.myoutput.emit(this.sharing);
    // if(this.fb.group(this.username)==this.username && this.password==this.myService.share.password){
    //   alert("valid data")
    // }else
    // {
    //   alert("data is invalid")
    // }
  
  
  


  

  


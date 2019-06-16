import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.css']
})
export class Example3Component implements OnInit {
  eml:any;
  pswd:any;
  email;
  password;
  show:boolean;
  constructor() { }

  ngOnInit() {
  }

  submit()
  {
    this.show=true;
    this.eml=this.email;
    this.pswd=this.password;
    console.log('eml:',this.eml,'pswd:',this.pswd);
   
  }



}

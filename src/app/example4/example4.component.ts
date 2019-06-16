import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-example4',
  templateUrl: './example4.component.html',
  styleUrls: ['./example4.component.css']
})
export class Example4Component implements OnInit {
  tabledata: any = [];

  firstname;
  lastname;
  email;
  contact;
  count: any = 1;
  view: boolean;
  objIndex;
  i;

  constructor() {}

  ngOnInit() {
  }

  //submiting the data
  submit() {
    this.view=true;
    this.tabledata.push({
      fname: this.firstname,
      lname: this.lastname,
      eml: this.email,
      cnct: this.contact
    });
    
    console.log(this.tabledata);

    this.firstname = '',
      this.lastname = '',
      this.email = '',
      this.contact = ''


  }

  //edit the data
  edit1(item: any) {
    this.view = true;
    console.log(item);
    this.i = this.tabledata.indexOf(item);
    this.firstname = item.fname,
    this.lastname = item.lname,
    this.email = item.eml,
    this.contact = item.cnct
  }



  edit2() {
    this.view = false;
    this.tabledata[this.i].fname = this.firstname;
    this.tabledata[this.i].lname = this.lastname;
    this.tabledata[this.i].eml = this.email;
    this.tabledata[this.i].cnct = this.contact;

    this.firstname = '',
      this.lastname = '',
      this.email = '',
      this.contact = ''
  }


  //deleting the data
  delete(item: any) {
    console.log(item);
    this.tabledata.splice(item.index, 1);
  }

}

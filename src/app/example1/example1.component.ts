import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css']
})
export class Example1Component implements OnInit {
  view : boolean=true;

   bio :any =  [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
  },
  {
    firstName: "Mary",
    lastName: "Moe",
    email: "mary@example.com"
    
  },
  {
    firstName: "July",
    lastName: "Dooley",
    email: "july@example.com",
  } 
];

employees :any =  [
  {
    projectName: "Work 1",
    employer: "Doe",
    awards: "award 1",
  },
  {
    projectName: "Work 2",
    employer: "abc",
    awards: "award 2",
  },
  {
    projectName: "Work 3",
    employer: "cdf",
    awards: "award 3",
  }
];
  constructor() { }

  ngOnInit() {
  }


showTable1()
  {
  this.view=true;
  }
showTable2()
{
  this.view=false;
}

}

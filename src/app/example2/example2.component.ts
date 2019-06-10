import { Component, OnInit } from '@angular/core';
import{ FormsModule} from '@angular/forms';
@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css']
})
export class Example2Component implements OnInit {
  name:any ='ngModel';
  constructor() { }

  ngOnInit() {
  }

}

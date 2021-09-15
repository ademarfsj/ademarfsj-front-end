import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'open-div',
  templateUrl: './open-div.component.html',
  styleUrls: ['./open-div.component.scss']
})
export class OpenDivComponent implements OnInit {

  @Input() htmlClass: String = ''; 

  constructor() { }

  ngOnInit(): void {
  }

}

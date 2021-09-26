import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'open-tag',
  templateUrl: './open-tag.component.html',
  styleUrls: ['./open-tag.component.scss']
})
export class OpenTagComponent implements OnInit {

  @Input() htmlClass: String = ''; 

  @Input() tagName: String = ''; 

  constructor() { }

  ngOnInit(): void {
  }

}

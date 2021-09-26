import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'close-tag',
  templateUrl: './close-tag.component.html',
  styleUrls: ['./close-tag.component.scss']
})
export class CloseTagComponent implements OnInit {

  @Input() tagName: String = ''; 

  constructor() { }

  ngOnInit(): void {
  }

}

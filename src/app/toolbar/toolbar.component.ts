import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  public buttonData = [
    {
      label: 'home',
    },
    {
      label: 'profissional',
    },
    {
      label: 'button2',
    },
    {
      label: 'button3',
    },
    {
      label: 'button4',
    },
    {
      label: 'button5',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

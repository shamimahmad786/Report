import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-methodology',
  templateUrl: './methodology.component.html',
  styleUrls: ['./methodology.component.css']
})
export class MethodologyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let accordion = document.getElementsByClassName('accordion');
    for (let i = 0; i < accordion.length; i++) {
      accordion[i].addEventListener('click', function() {
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });
    }
  }

}

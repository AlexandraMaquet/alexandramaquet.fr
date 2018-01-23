import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*  cheet;
   constructor(){
     this.cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
       alert('Voilà!');
     });
   } */

  function(d, id) {
    if (d.getElementById(id)) {
       return;
      }
    const s = d.createElement('script');
    const c = d.getElementsByTagName('script')[0];
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://widgets.malt.com/v1/js/sdk.min.js';
    c.parentNode.insertBefore(s, c);
  }
}

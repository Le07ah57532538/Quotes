import { Component } from '@angular/core';
import { Quote } from './quote'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  quotes = [
      new Quote(1,'Watch Finding Nemo','been there',new Date(2019,1,7)),
      new Quote(2,'Buy Cookies','so sweet',new Date(2019,1,7)),
      new Quote(3, 'Get new Phone Case','new me',new Date(2019,1,7)),
      new Quote(4, 'Get Dog Food','distgusting',new Date(2019,1,7)),
      new Quote(5, 'Solve math homework','oops wrong',new Date(2019,1,7)),
      new Quote(6, 'Plot my world domination plan','too cool',new Date(2019,1,7)),

  ]
}

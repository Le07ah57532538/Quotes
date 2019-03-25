import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,'Watch Finding Nemo','been there',new Date(2019,1,7)),
    new Quote(2,'Buy Cookies','so sweet',new Date(2019,1,7)),
    new Quote(3, 'Get new Phone Case','new me',new Date(2019,1,7)),
    new Quote(4, 'Get Dog Food','distgusting',new Date(2019,1,7)),
    new Quote(5, 'Solve math homework','oops wrong',new Date(2019,1,7)),
    new Quote(6, 'Plot my world domination plan','too cool',new Date(2019,1,7)),

]

addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id=quoteLength+1;
  quote.completeDate = new Date(quote.completeDate)
  this.quotes.push(quote)

}

toogleDetails(index){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
}
deleteQuote(isComplete,index){
  if (isComplete){
      let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)
      
      if(toDelete){
          this.quotes.splice(index,1)
      }
  }
}



constructor() { }
ngOnInit() {
}
}


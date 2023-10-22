import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';
  stringToEvaluate:string=""

  //entrada- %-+/-
  takeInput(num:string){
    if(num === '+/-'){
      if(this.stringToEvaluate.includes('-')){
        this.stringToEvaluate = this.stringToEvaluate.replace('-', '');
      }else{
        this.stringToEvaluate = "-", this.stringToEvaluate;
      }
    }else if(num === '%'){
        const result = eval(this.stringToEvaluate);
        this.stringToEvaluate = (result / 100).toString();
    }else{
      this.stringToEvaluate = this.stringToEvaluate + num;
    }
  }

  //resultados
  evalResult(){
    if(this.stringToEvaluate != ''){
      const result = eval(this.stringToEvaluate);
        if (isFinite(result)) {
          this.stringToEvaluate = result.toString();
        } else {
          alert('Resultado infinito. Verifique sua entrada!');
        }
    }
  }

  //AC
  resetInput(){
    this.stringToEvaluate = '';
  }
}

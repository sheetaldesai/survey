import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-survey',
  templateUrl: './new-survey.component.html',
  styleUrls: ['./new-survey.component.css']
})
export class NewSurveyComponent implements OnInit {

  question : Question = new Question();
  

  

  constructor(private _dataService : DataService,
    private _router: Router) { 
    console.log(this.question)
  }

  ngOnInit() {
  }

  onSubmit(){
    
    this.question.username = this._dataService.getLogin();
    if (this.question.username == "") {
      this.question.username = "sheetal"
    }
    console.log("save clicked question: ", this.question);
    this._dataService.create(this.question);
    this._router.navigate(['/dashboard']);
  }

}

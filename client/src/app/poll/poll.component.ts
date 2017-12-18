import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { query } from '@angular/core/src/animation/dsl';
import { Question } from '../question';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

  question = {};
  options = [];

  constructor(private _route : ActivatedRoute, private _router : Router, private _dataService : DataService) { 
    this._route.paramMap.subscribe( params => {
      //console.log("params: ", params);
      var id = params.get('id');
      console.log("id:", id);
      if (id) {
        this._dataService.getQuestion(id, (question) => {
          this.question= question;
          console.log(this.question['question']);
          this.options = this.question['_options'];
          console.log("Options: ", this.options)
        });
      } else {
        console.log("Id not found");
      }
    });
  }

  ngOnInit() {
    
  }

  onVote(option){
    option['votes'] += 1;
    console.log("Vote clicked for ", option);
    this._dataService.updateOption(option._id, option.votes);
  }

}

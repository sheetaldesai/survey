import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Question } from './question';

@Injectable()
export class DataService {

  questionObservable = new BehaviorSubject([]);
  qObservable = new BehaviorSubject({});

  private login = {username:""};

  constructor(private _http : HttpClient) {
    console.log("service constructor login: ", this.login.username);
   }

  setLogin(name:string){
    this.login.username = name;
  }

  getLogin():string {
    return this.login.username;
  }

  getAllQuestions() {
    this._http.get('/questions').subscribe(
      (questions: any[])=>{
        console.log("Got questions from server: ",questions);
        this.questionObservable.next(questions)
      }),
      error => console.log(error);
  }

  create(que: Question) {

    console.log("Service adding question to the serer: ",que);
    this._http.post('/questions', que).subscribe(
      response => this.getAllQuestions(),
      errorResponse => console.log(errorResponse)
    );
  }

  delete(que){
    console.log("Service deleting question ", que);
    this._http.delete('/questions/'+que._id).subscribe(response => {
      console.log(response);
      this.getAllQuestions();
    });
  }

  getQuestion(id, callback){
    console.log("Service getting question id: ",id);
    this._http.get('questions/'+id).subscribe(response => {
      console.log("Got question from server : ", response);
      callback(response);
      //this.qObservable.next(response);
    }), error => console.log(error);
  }

  updateOption(id,votes){
    console.log("Service sending updateOption id, votes: ", id, votes);
    this._http.put('comments/'+id, {votes:votes}).subscribe(response => {
      console.log("Updated comment: ", response);
    })
  }
}

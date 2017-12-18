import { Option } from "./option";

export class Question {
    constructor(
        public question:string="",
        public username:string="",
        public option1: Option=new Option(),
        public option2: Option=new Option(),
        public option3: Option=new Option(),
        public option4: Option=new Option(),
    ){}
}

import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { UserService } from '../../services/user.service';
import { ChallengeQuestionService } from '../../services/challenge-question.service';


@Component({
  selector: 'app-challenges',
  templateUrl: 'challenges.component.html',
  styles: [],
    animations: [
        trigger('fadeInOut', [
            transition('void => *', [
                style({ opacity: 0 }),
                animate(500, style({ opacity: 1 }))
            ]),
            transition('* => void', [
                animate(500, style({ opacity: 0 }))
            ])
        ])
    ]
})
export class ChallengesComponent implements OnInit {

	userDetails: any = [];
  showModalChallengeAnswer = false;
  challengeQuestion: any = [];
  selectedAnswerData: any = [];
  status: string;

  constructor(
    private _getUserService: UserService,
  	private _getChallengeService: ChallengeQuestionService
  	) { }

  ngOnInit() {
  	this.getUserDetails();
    this.getQuestion();
  }

  getUserDetails() {
  	this._getUserService.GetUser().subscribe(
            (data) => {
                this.userDetails = data.userDetails;
            }
        );
  }
  getQuestion() {
    this._getChallengeService.GetQuestion().subscribe(
            (data) => {
                this.challengeQuestion = data.challengeQuestion;
                console.log(data.challengeQuestion);
            }
        );
  }
  closeModal() {
    this.showModalChallengeAnswer = false;

  }
  checkAnswer() {
    this.showModalChallengeAnswer = true;
  }
  selectedAnswer(choice) {
    this.selectedAnswerData = choice;
  }

}

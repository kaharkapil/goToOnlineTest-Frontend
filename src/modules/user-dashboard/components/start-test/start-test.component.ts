import { Component, OnInit, Pipe } from '@angular/core';
import { TestService } from '@modules/test/test.service';
import { AppService } from '@app/app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { CountdownModule } from 'ngx-countdown';
import { Time } from '@angular/common';
declare var $: any;


@Component({
  selector: 'sb-start-test',
  templateUrl: './start-test.component.html',
  styleUrls: ['./start-test.component.css']
})
export class StartTestComponent implements OnInit {

  config: any;

  constructor(private testService: TestService, private appService: AppService, private router: Router, private _route: ActivatedRoute, private countdown: CountdownModule) {





  }

  public currentTest;
  public currentTestId
  public allQuestions;

  public userId;
  public currentUser;
  public email;

  public CurrentPage = 0;
  public pageSize = 1;
  public numberOfPages;

  public testDuration = 1; // default time 1sec



  public correctAnswer = 0;
  public wrongAnswer = 0;
  public skippedQues = 0;
  public userOptions: any[] = [];

  public score = 0;
  public checkedOption;

  public timeTaken = 0;

  public timesUp = false;
  public timeLeft = 0;


  ngOnInit(): void {
    this.currentTestId = this._route.snapshot.paramMap.get('testId');

    this.testService.viewQuestionsFunction(this.currentTestId).subscribe((apiResponse) => {
      if (apiResponse.status == 200) {
        this.allQuestions = apiResponse["data"];
        this.numberOfPages = Math.ceil(this.allQuestions.length / this.pageSize);
        // assigning default values to options
        for (let i = 0; i < this.numberOfPages; i++) {
          this.userOptions[i] = {
            qId: 0,
            option: 0,
          }
        }
      } else {
        console.log("No Questions Found")
      }
    }, (err) => {
      console.log("Some error occured while loading all questions");
      console.log(err.errorMessage);
    })

    //  get single user Information
    this.userId = Cookie.get('userId');
    console.log(this.userId);
    this.appService.getSingleUser(this.userId).subscribe((apiResponse) => {
      if (apiResponse.status === 200) {
        this.currentUser = apiResponse["data"];
        this.email = this.currentUser.email;
      } else {
        alert("Some Error Occured");
      }
    }, (err) => {
      alert("Some Error occured(err)");
    })

    // get single test information
    this.appService.getSingleTestInformation(this.currentTestId).subscribe(
      data => {
        this.currentTest = data["data"];
        this.testDuration = this.currentTest.testDuration * 60;
      },
      error => {
        console.log("Some error occured");
        console.log(error.errorMessage);
      }

    )

    $(document).on('click', "input[name='answerGroup']", function () {
      let qId = $("input[name='answerGroup']").attr('value')
      $('#' + qId).addClass('box-color');
    });
    $('.testsubmit').on('click', function () {
      $('#alertModal').modal('hide');
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();

    });



  } // end ngOnInit

  // push the user performance data to the attemptedBy array in test model
  public addToAttemptedUsers = () => {
    var data = {
      testId: this.currentTestId,
      email: this.email,
      score: this.score,
    }
    this.testService.addToAttemptedUsers(data).subscribe((apiResponse) => {

      if (apiResponse.status == 200) {
        console.log("Added to attempted users successfully")
      } else {
        alert("Some Error")
      }
    }, (err) => {
      alert("Some Error occured while adding to attempted users")
    })
  };

  // go to a particular question
  public goToQuestion = (qNo) => {
    this.CurrentPage = qNo;
  }

  // store the answers in array before submitting
  public getAnswers = (qNo, option, qId) => {
    // let qObject = {
    //   qId: qId,
    //   option: option
    // }
    this.userOptions.splice(qNo, 1, { qId: qId, option: option });
  }


  // alert modal 
  public showAlertModal = () => {
    $('#alertModal').modal('show');
  };

  //submit the questions answers given by the user
  public submitAnswers = () => {
    var performance = {
      userEmail: this.email,
      testId: this.currentTestId,
      score: this.score,
      totalQuestions: this.allQuestions.length,
      timeTaken: this.timeTaken,
      correctAnswers: this.correctAnswer,
      skippedQues: this.skippedQues
    }
    this.testService.addPerformance(performance).subscribe((apiResponse) => {
      if (apiResponse.status == 200) {
        this.router.navigate(['/user-dashboard/result/' + this.currentTestId]);
        this.addToAttemptedUsers();
      } else {
        alert("Some Error occured while adding performance")
      }
    }, (err) => {
      alert("Some Error occured while adding performance of user")
    })
  };
// Function to calculate performance of user
  public calculatePerformance = (leftTime) => {
    this.timeLeft = leftTime;
    console.log("timeleft"+this.timeLeft);
    this.timeTaken = ((this.testDuration) - this.timeLeft);
    for (let i = 0; i < this.allQuestions.length; i++) {
      for (let j = 0; j < this.userOptions.length; j++) {
        if (typeof this.userOptions[j] !== 'undefined' && this.userOptions[j] !== null) {
          if (this.allQuestions[i].questionId == this.userOptions[j].qId) {
            if (this.allQuestions[i].answer == this.userOptions[j].option) {
              //each answer is worth 2 marks
              this.score = this.score + 2;
            }
          }
        }
      }
    }

    //get no. of skipped questions
    for (let i = 0; i < this.userOptions.length; i++) {
      if (this.userOptions[i].option == 0) {
        this.skippedQues = this.skippedQues + 1;
      }
    }
    this.correctAnswer = this.score / 2;
    this.wrongAnswer = this.allQuestions.length - (this.correctAnswer + this.skippedQues);
    this.submitAnswers();
  } // end calculate performance

  // function to handle time finish
  public onTimerFinished(e: Event) {
    if (e["action"] == "done") {
      this.timesUp = true;
      $('#alertModal').modal('show');
    }
  }

}

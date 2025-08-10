import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-bug',
  imports: [],
  templateUrl: './score-bug.component.html',
  styleUrl: './score-bug.component.scss',
  standalone: true
})
export class ScoreBugComponent implements OnInit {

  inning: number = 1;
  inningWithAbb: string = '';
  inningText: string = 'Top';  // You can dynamically change this
  inningIcon: string = 'assets/images/top_of_inning.PNG';
  basesIcon: string = 'assets/images/bases_Empty.PNG';
  runnerOnFirst: boolean = false;
  runnerOnSecond: boolean = false;
  runnerOnThird: boolean = false;
  team1Name: string = 'Cardinals'; // home
  team1NameAbb: string = 'STL'; // away
  team2Name: string = 'Mets'; // home
  team2NameAbb: string = 'NYM'; // away
  team1Score: number = 0;
  team2Score: number = 0;
  outs: number = 0;
  count: string = '0-0';

  ngOnInit(): void {
    
    this.handleInning(false);


  }

  handleCount(ballOrStrike: string) {

    var ball = Number(this.count[0]);
    var strike = Number(this.count[2]);

    if(ballOrStrike === 'BALL') {


     if(ball < 3) {
     ball++;
     this.count = ball.toString() + '-' + strike.toString();
     
     } else {
     
     this.count = '0-0' // Reset count for next batter. 4 balls = walk

     }


    }


    if(ballOrStrike === 'STRIKE') {
        
      if(strike < 2) {
        strike++;
        this.count = ball.toString() + '-' + strike.toString();
      } else {
       
        this.handleOut();
        this.count = '0-0' // Reset count for next batter. 3 strikes = out

      }

    }


  }

  handleInning(goToNextHalfInningFlag: boolean) {

    if(goToNextHalfInningFlag) {
      
      this.outs = 0;
      this.count = '0-0' // Reset count
     if(this.inningText === 'Top') {
       
      this.inningText = 'Bottom';
      this.inningIcon = 'assets/images/bottom_of_inning.PNG';

     }
     else {
      this.inning++;
      this.inningText = 'Top';
      this.inningIcon = 'assets/images/top_of_inning.PNG';

          

     }

    }

    if(this.inning === 1) {
      this.inningWithAbb = this.inning.toLocaleString() + 'ST';


    } 

    else if(this.inning === 2) {

      this.inningWithAbb = this.inning.toLocaleString() + 'ND';

    } else if(this.inning === 3) {

      this.inningWithAbb = this.inning.toLocaleString() + 'RD';

    }
    else {
        
      this.inningWithAbb = this.inning.toLocaleString() + 'TH';

    }


  
  }

  handleOut() {

  if(this.outs < 2) {

    this.outs++;
  }

    else {
       this.outs = 0;
       this.handleInning(true);

    }

     


  }

  scoreRun() {

    if(this.inningText === 'Top') {
          this.team1Score++;

    }
    else {
           this.team2Score++;

    }


  }



}



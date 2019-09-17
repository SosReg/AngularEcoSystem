import { Component } from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Eco System';
  input:number=1;
  results : any;
  profile:any;
  constructor(public appService : AppService ){

  }
  
  getProfiles(){
    this.appService.getProfiles(this.input).subscribe(res=>{
      this.results = res.results;
    });
  }

  currentRow(profile:any){
     this.profile = profile;
  }
}

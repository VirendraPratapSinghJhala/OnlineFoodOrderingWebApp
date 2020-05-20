
/*  
  =======================================================================================================
    Developer: Virendra Pratap Singh Jhala
    Creation Date: 16th May,2020
    Description: This is the root component which holds all the other components defined in the application
  ==========================================================================================================
*/


//import all the required entities from their respective packages
import { Component } from '@angular/core';

//decorator used for storing Component's metadata
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//Component that handles all the tasks in correspondance to the html template
export class AppComponent {
  title = 'OnlineFoodOrderingWebApp';
}

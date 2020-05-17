
import {Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({

    selector:'app-header',
    templateUrl:'./header.component.html'

})
export class HeaderComponent{
    collapsed = true;

    constructor(private router:Router,private route:ActivatedRoute){

    }

    onMenuClick(){
      this.router.navigate(['foods',{relativeTo:this.route}]);

    }
  
}
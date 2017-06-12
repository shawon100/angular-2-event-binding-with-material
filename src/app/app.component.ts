import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  color="accent";
  
  click()
  {
     console.log("clicked");
  }
  send(value)
  {
     if(value.checked==true)
     {
        console.log(1);
       
     }
     else
     {
        console.log(0);
     }
  }
  go(value)
  {
     console.log(value.value);
  }
  openNav()
  {
      document.getElementById("mySidenav").style.width = "250px";
  }
  closeNav()
  {
     document.getElementById("mySidenav").style.width="0";
  }
 
}

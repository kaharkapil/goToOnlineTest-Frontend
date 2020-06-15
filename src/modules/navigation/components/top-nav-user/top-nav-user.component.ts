import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppService } from '@app/app.service';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Users } from '@modules/tables/models/users';

@Component({
    selector: 'sb-top-nav-user',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './top-nav-user.component.html',
    styleUrls: ['top-nav-user.component.scss'],
})
export class TopNavUserComponent implements OnInit {
    constructor(private appservice:AppService,private router:Router) {}
    ngOnInit() {}


    public logout=()=>{

        this.appservice.logout().subscribe((apiResponse)=>{
            if(apiResponse.status === 200) {
                console.log("logout called")
                alert("Logout Successfull...!!!")
                Cookie.deleteAll;
                Cookie.delete('authToken');
      
                Cookie.delete('userId');
      
                Cookie.delete('userName');

                Cookie.delete('role');
      
            
      
                this.router.navigate(['/']);
      
              } else {
                alert(apiResponse.message);
      
              } // end condition
      
            }, (err) => {
              console.log(err);
             alert('some error occured')
      
      
            });
    }
}

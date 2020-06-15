import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
    QueryList,
    ViewChildren,
} from '@angular/core';
import { SBSortableHeaderDirective, SortEvent } from '@modules/tables/directives';
import { Country } from '@modules/tables/models';
import { CountryService } from '@modules/tables/services';
import { Observable, throwError } from 'rxjs';
import { AppService } from '@app/app.service';
import { map, catchError, } from 'rxjs/operators';
import { Users } from '@modules/tables/models/users';

@Component({
    selector: 'sb-ng-bootstrap-table',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './ng-bootstrap-table.component.html',
    styleUrls: ['ng-bootstrap-table.component.scss'],
})
export class NgBootstrapTableComponent implements OnInit {

    users?:Users[] | undefined;

    @Input() pageSize = 4;

    countries$!: Observable<Country[]>;
    total$!: Observable<number>;
    sortedColumn!: string;
    sortedDirection!: string;

    @ViewChildren(SBSortableHeaderDirective) headers!: QueryList<SBSortableHeaderDirective>;

    constructor(
        public countryService: CountryService,
        private changeDetectorRef: ChangeDetectorRef,
        private appService: AppService,
    ) { }

    ngOnInit() {
        this.countryService.pageSize = this.pageSize;
        this.countries$ = this.countryService.countries$;
        this.total$ = this.countryService.total$;
        
        this.getUserList();

        // this.appService.getAllUsers().subscribe((apiResponse)=>{
        //     if(apiResponse.status===200){
        //         console.log(apiResponse.data);
        //         console.log(apiResponse.data[0].firstName);
        //     }
        //     else{
        //         console.log("Error occured while getting all users")
        //     }
        // },(err)=>{
        //     console.log(err);
        //     console.log("Error occured while getting all users(err)")
        // })

        this.appService.getAllUsers().pipe(
            map((data: Users[]) => {
                return data;
            }), catchError(error => {
                return throwError('Something went wrong!');
            })
        )
    }

    
    getUserList() {
        this.appService
        .getAllUsers()
        .subscribe((data:any) => {
          console.log(data);
          this.users = data.data;
          console.log("Kapil here is All users");
          console.log(this.users);
        });
      }

    onSort({ column, direction }: SortEvent) {
        this.sortedColumn = column;
        this.sortedDirection = direction;
        this.countryService.sortColumn = column;
        this.countryService.sortDirection = direction;
        this.changeDetectorRef.detectChanges();
    }
}

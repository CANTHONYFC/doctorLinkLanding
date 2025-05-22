import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent
{
    /**
     * Constructor
     */
     constructor(private router: Router, private titleService: Title) { }
     ngOnInit(): void {
         this.router.events
             .pipe(
                 filter((event) => event instanceof ActivationEnd),
                 filter(
                     (event: ActivationEnd) => event.snapshot.firstChild === null
                 ),
                 map((event: ActivationEnd) => event.snapshot.data)
             )
             .subscribe((event) =>
                 this.titleService.setTitle(
                     event['title'] ? event['title'] : 'DoctorLink'
                 )
             );
     }
}

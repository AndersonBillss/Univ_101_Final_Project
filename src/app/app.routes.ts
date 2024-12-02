import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DiscipleScholarComponent } from './disciple-scholar/disciple-scholar.component';

export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: 'full'},
    {path: "home", component: HomeComponent},
    {path: "disciple scholar", component: DiscipleScholarComponent}
];

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DiscipleScholarComponent } from './pages/disciple-scholar/disciple-scholar.component';
import { MentorComponent } from './pages/mentor/mentor.component';
import { CampusResourcesComponent } from './pages/campus-resources/campus-resources.component';
import { ContinuingPastGraduationComponent } from './pages/continuing-past-graduation/continuing-past-graduation.component';

export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: 'full'},
    {path: "home", component: HomeComponent},
    {path: "disciple scholar", component: DiscipleScholarComponent},
    {path: "finding a mentor", component: MentorComponent},
    {path: "use campus resources", component: CampusResourcesComponent},
    {path: "continue past graduation", component: ContinuingPastGraduationComponent},
];

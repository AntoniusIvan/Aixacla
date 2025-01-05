import { Routes, RouterModule } from '@angular/router';

import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { HomeComponent } from './pages/home/home.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { CounterComponent } from './pages/counter/counter.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'forbidden', component: ForbiddenComponent },
    { path: 'unauthorized', component: UnauthorizedComponent },
    { path: 'counter', component: CounterComponent }
];

export const routing = RouterModule.forRoot(appRoutes, {});

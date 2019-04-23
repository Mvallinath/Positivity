import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
//import {LoginComponent} from './pages/login/login.component';
import {AuthenticationComponent} from './pages/authentication/authentication.component';
import {WppagesComponent} from './pages/wppages/wppages.component';
import {PostDisplayComponent} from './shared/post-display/post-display.component';
//import { IndexComponent } from './pages/index/index.component';


const appRoutes: Routes = [
  {path : '', component : AuthenticationComponent
},
 /* {
path: 'Dashboard',
redirectTo: 'pages/wppages/Wppages',
pathMatch: 'full'

} */
 {
 path: 'Dashboard', component: WppagesComponent
// redirectTo: 'pages/wpcomp/wpcompmain/wpcomp',
//  pathMatch: 'full'

},
{
 path: 'Index',
 redirectTo: 'pages/index',
 pathMatch: 'full'
},

{
  path: 'PostDisplay', component: PostDisplayComponent,
 // redirectTo: 'pages/wpcomp/wpcompmain/wpcomp',
 //  pathMatch: 'full'

 },

 {
  path: 'PostDisplayone',
  redirectTo: 'shared/post-display',
   pathMatch: 'full'

 },

  ];

export const routing = RouterModule.forRoot(appRoutes);

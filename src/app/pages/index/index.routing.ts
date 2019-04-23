import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';
import { PostDisplayComponent } from '../../shared/post-display/post-display.component';

const childRoutes: Routes = [
    {
        path: '',
        component: IndexComponent
    },
    {
      path: 'Post',
      component: PostDisplayComponent
  },
];

export const routing = RouterModule.forChild(childRoutes);

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
 import { AppLayoutComponent } from "./layout/app.layout.component";
import { HomeComponent } from './layout/home/home.component';
import { ArticleComponent } from './layout/article/article.component';
import { CreerComponent } from './layout/creer/creer.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,

                children: [
                    { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) }
                    ,
                    {
                       path:'home',component:HomeComponent
                    },
                    {
                        path:'article',component:ArticleComponent
                     },
                     {
                        path: 'operation/creer', component: CreerComponent
                     }
                ],
                // canActivate: [AuthGuard]
            },

            // { path: 'login', loadChildren: () => import('./demo/components/login/login.module').then(m => m.LoginModule) },
         ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}

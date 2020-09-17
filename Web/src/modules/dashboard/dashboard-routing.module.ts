/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { DashboardModule } from './dashboard.module';

/* Containers */
import * as dashboardContainers from './containers';

/* Guards */
import * as dashboardGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        data: {
            title: 'Stock Trading Platform',
            breadcrumbs: [
                {
                    text: 'Buying Power',
                    active: false,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: dashboardContainers.DashboardComponent,
    },
    {
        path: '/stockdetails/',
        data: {
            title: 'Stock Trading Platform',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Static',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: dashboardContainers.StaticComponent,
    },
    {
        path: 'light',
        data: {
            title: 'Stock Trading Platform',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Light',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: dashboardContainers.LightComponent,
    },

];

@NgModule({
    imports: [DashboardModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class DashboardRoutingModule {}

/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { HistoryModule } from './history.module';

/* Containers */
import * as historyContainers from './containers';

/* Guards */
import * as historyGuards from './guards';
import { SBRouteData } from '@modules/navigation/models';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: historyContainers.HistoryComponent,
        data: {
            title: 'Trade History',
        } as SBRouteData,
    },
];

@NgModule({
    imports: [HistoryModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class HistoryRoutingModule {}

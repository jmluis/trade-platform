/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as historyComponents from './components';

/* Containers */
import * as historyContainers from './containers';

/* Directives */
import * as historyDirectives from './directives';

/* Guards */
import * as historyGuards from './guards';

/* Services */
import * as historyServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [
        DecimalPipe,
        ...historyServices.services,
        ...historyGuards.guards,
        ...historyDirectives.directives,
    ],
    declarations: [
        ...historyContainers.containers,
        ...historyComponents.components,
        ...historyDirectives.directives,
    ],
    exports: [...historyContainers.containers, ...historyComponents.components],
})
export class HistoryModule {}

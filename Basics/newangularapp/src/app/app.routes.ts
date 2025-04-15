import { Routes } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { TmpComponent } from './tmp/tmp.component';
import { Tmp1Component } from './tmp1/tmp1.component';
import { ForComponent } from './control_flow/for/for.component';
import { IfelseComponent } from './control_flow/ifelse/ifelse.component';
import { SwitchComponent } from './control_flow/switch/switch.component';
import { PipeComponent } from './pipe/pipe.component';
import { TemplatesComponent } from './forms/templates/templates.component';
import { ReactivesComponent } from './forms/reactives/reactives.component';

export const routes: Routes = [
    {
        path : 'directives',
        component : DirectivesComponent
    },
    {
        path : 'data-binding',
        component : DataBindingComponent
    },
    {
        path : 'tmp',
        component : TmpComponent
    },
    {
        path : 'tmp1',
        component : Tmp1Component
    },
    {
        path : 'for',
        component : ForComponent
    },
    {
        path : 'ifelse',
        component : IfelseComponent 
    },
    {
        path : 'switch',
        component : SwitchComponent
    },
    {
        path : 'pipe',
        component : PipeComponent
    },
    {
        path : "templates",
        component : TemplatesComponent
    },
    {
        path : "reactives",
        component : ReactivesComponent
    }
];

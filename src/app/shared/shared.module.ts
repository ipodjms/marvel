import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatMenuModule} from '@angular/material/menu';

import {MatButtonModule} from '@angular/material/button';

import {MatCardModule} from '@angular/material/card';

import {MatSelectModule} from '@angular/material/select';
import { DebounceClickDirective } from './debouce-click.directive';


@NgModule({
  declarations: [DebounceClickDirective],
  imports: [
    CommonModule, MatMenuModule, MatButtonModule, MatCardModule, MatSelectModule
  ],
  exports: [MatMenuModule, MatButtonModule, MatCardModule, MatSelectModule, DebounceClickDirective]
})
export class SharedModule { }

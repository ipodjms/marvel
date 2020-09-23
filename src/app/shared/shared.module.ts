import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatMenuModule} from '@angular/material/menu';

import {MatButtonModule} from '@angular/material/button';

import {MatCardModule} from '@angular/material/card';

import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatMenuModule, MatButtonModule, MatCardModule, MatSelectModule
  ],
  exports: [MatMenuModule, MatButtonModule, MatCardModule, MatSelectModule]
})
export class SharedModule { }

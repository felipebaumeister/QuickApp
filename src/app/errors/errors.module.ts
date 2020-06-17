import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppBuildingComponent } from './app-building/app-building.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NotFoundComponent, AppBuildingComponent]
})
export class ErrorsModule { }

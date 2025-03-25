import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RemoteEntryComponent } from './remote-entry.component';
import { appRoutes } from '../app.routes';

@NgModule({
  imports: [RouterModule.forChild(appRoutes),RemoteEntryComponent], // Import the routes
})
export class RemoteEntryModule {}
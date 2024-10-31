import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';
import { HomeComponent } from '../pages/home/home.component';

const routes: Routes = [
  { path: 'search/:query', component: SearchBarComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

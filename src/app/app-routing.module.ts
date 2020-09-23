import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'one', pathMatch: 'full'},
  {path: 'one', loadChildren: 'src/app/routes/one/one.module#OneModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

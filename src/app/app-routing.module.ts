import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'one', pathMatch: 'full'},
  {path: 'one', loadChildren: 'src/app/routes/one/one.module'}

  // 方法可用，但是路由不正确
  // {path: 'first', component: FirstComponent},
  // {path: 'second', component: SecondComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

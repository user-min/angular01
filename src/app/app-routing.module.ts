import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'one', pathMatch: 'full'},
  {path: 'one', loadChildren: 'src/app/routes/one/one.module#OneModule'},
  {path: 'two', loadChildren: 'src/app/routes/two/two.module#TwoModule'},
  {path: 'three', loadChildren: 'src/app/routes/three/three.module#ThreeModule'},
  ];

/**
 * {useHash: true}启动懒加载模式/#/
 */
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

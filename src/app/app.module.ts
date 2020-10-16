/*模块*/
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {OneModule} from './routes/one/one.module';

registerLocaleData(zh);

@NgModule({
  /*声明模块中有什么东西， 只能声明组件、指令、管道*/
  declarations: [
    AppComponent
  ],
  /*声明该模块所依赖的模块*/
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    // OneModule
  ],
  /*声明模块中听过的服务，默认为空*/
  providers: [
    {provide: NZ_I18N, useValue: zh_CN}
  ],
  /*声明模块的主组件*/
  bootstrap: [AppComponent]
})
export class AppModule {
}

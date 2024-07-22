import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule , HTTP_INTERCEPTORS, provideHttpClient, withInterceptors} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { apiInterceptor } from './interceptors/api.interceptor';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  exports:[
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    provideHttpClient(withInterceptors([apiInterceptor]))
  ]
  
})
export class CoreModule { }

// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';// name of module- inbuilt module
 
import { AppModule } from './app/app.module';// relative path; user defined module
 
 
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
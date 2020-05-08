import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppBrowserModule} from './app/app.browser.module';

import {hmrBootstrap} from './hmr';

// if (environment.production) {
//   enableProdMode();
// }

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppBrowserModule);

// if (environment.hmr) {
// @ts-ignore
if (module.hot) {
  // @ts-ignore
  hmrBootstrap(module, bootstrap);
} else {
  console.error('HMR is not enabled for webpack-dev-server!');
  console.log('Are you using the --hmr flag for ng serve?');
  // }
}

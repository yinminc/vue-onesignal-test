import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { OneSignal } from '@ionic-native/onesignal/ngx';

const app = createApp(App)
  .use(IonicVue)
  .use(router);
  
router.isReady().then(() => {
  app.mount('#app');
});

// OneSignal
const oneSignal = new OneSignal();

oneSignal.setLogLevel({logLevel: 6, visualLevel: 4});

oneSignal.startInit('b9f3abb5-b396-4e9e-bd73-c164c5f2ea7b', '')

oneSignal.inFocusDisplaying(oneSignal.OSInFocusDisplayOption.InAppAlert);

oneSignal.handleNotificationReceived().subscribe(() => {
  // do something when notification is received
});

oneSignal.handleNotificationOpened().subscribe(() => {
  // do something when a notification is opened
});

oneSignal.endInit();

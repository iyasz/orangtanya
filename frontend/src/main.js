import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-blue/theme.css'
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import Sidebar from 'primevue/sidebar';
import AnimateOnScroll from 'primevue/animateonscroll';
import Button from 'primevue/button';
import Avatar from 'primevue/avatar';
import Ripple from 'primevue/ripple';
import StyleClass from 'primevue/styleclass';

const app = createApp(App)
app.use(router)
app.use(PrimeVue, { ripple: true  })


app.directive('animateonscroll', AnimateOnScroll);
app.directive('ripple', Ripple);
app.directive('styleclass', StyleClass);
app.component('Sidebar', Sidebar);
app.component('Button', Button);
app.component('Avatar', Avatar);




app.mount('#app')

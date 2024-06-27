import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Prime Vue
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-blue/theme.css'
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
// import 'primeflex/primeflex.css';
import Sidebar from 'primevue/sidebar';
import AnimateOnScroll from 'primevue/animateonscroll';
import Button from 'primevue/button';
import Avatar from 'primevue/avatar';
import Ripple from 'primevue/ripple';
import StyleClass from 'primevue/styleclass';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';Menu
import Menu from 'primevue/menu';

// Pinia js 
import { createPinia } from 'pinia'


const app = createApp(App)
const pinia = createPinia()


app.use(router)
app.use(PrimeVue, { ripple: true  })
app.use(pinia)


// Component 
app.directive('animateonscroll', AnimateOnScroll);
app.directive('ripple', Ripple);
app.directive('styleclass', StyleClass);
app.component('Sidebar', Sidebar);
app.component('Button', Button);
app.component('Avatar', Avatar);
app.component('Dialog', Dialog);
app.component('InputText', InputText);
app.component('Menu', Menu);




app.mount('#app')

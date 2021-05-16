import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.ts'
import store from '@/store/index.ts'

import { setupAntd } from '@/plugins/antd_vue'
// import Antd from 'ant-design-vue';

import 'ant-design-vue/dist/antd.css';

const app = createApp(App)
setupAntd(app)
app.use(router)
app.use(store)
// .use(Antd)
.mount('#app')

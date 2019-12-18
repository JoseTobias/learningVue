import Get from './components/Get.vue'
import SingleGet from './components/SingleGet.vue'
import All from './components/All.vue'
import Input from './components/Input.vue'
import TechTalk from '@/components/techTalk.vue'
import DinamicCss from '@/components/DinamicCss.vue'

export default [
    { path: '/', component: TechTalk },
    { path: '/dinamiccss', component: DinamicCss },
    { path: '/all', component: All },
    { path: '/get', component: Get },
    { path: '/get/:id', component: SingleGet},
    { path: '/input', component: Input}
]
import Get from './components/Get.vue'
import SingleGet from './components/SingleGet.vue'
import All from './components/All.vue'
import Input from './components/Input.vue'
import TechTalk from '@/components/techTalk.vue'

export default [
    { path: '/', component: TechTalk },
    { path: '/all', component: All },
    { path: '/get', component: Get },
    { path: '/get/:id', component: SingleGet},
    { path: '/input', component: Input}
]
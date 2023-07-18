// Composables
import { createRouter, createWebHistory } from 'vue-router'
import FirstStep from "../components/FirstStep.vue";
import SecondStep from "../components/SecondStep";
import ThirdStep from "../components/ThirdStep.vue";
import FourthStep from "../components/FourthStep.vue";
import FifthStep from "../components/FifthStep.vue";

const routes = [
  {
    path: '/',
    redirect: '/first',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    children: [
      { path: 'first', component: FirstStep },
      { path: '/second', component: SecondStep},
      { path: 'third', component: ThirdStep, name: 'ThirdStep', props: true },
      { path: 'fourth', component: FourthStep, name: 'FourthStep', props: true },
      { path: 'fifth', component: FifthStep }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import PLNToCurrency from './views/PLNToCurrency.vue'
import CurrencyToPLN from './views/CurrencyToPLN.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
        path: '/pln-to-currency',
        component: PLNToCurrency
        },
        {
        path: '/currency-to-pln',
        component: CurrencyToPLN
        },
    ]
  })
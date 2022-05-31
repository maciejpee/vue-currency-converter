<template>
    <router-link to="/pln-to-currency">Zamień PLN na walutę</router-link><br>
    <router-link to="/currency-to-pln">Zamień walutę na PLN</router-link><br>
    <router-view :key="$route.path"></router-view>
</template>






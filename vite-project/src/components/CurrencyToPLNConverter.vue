<template>
    <label>Wybierz walutę:</label><br>
    <select v-model="mid1">
    <option v-for="r of exchangeRates[0].rates" :value="r.mid">{{ r.currency }}</option>
    </select><br>
    <label>Podaj kwotę w danej walucie:</label><br>
    <input v-model="currencyAmount"><br><br>
    <p>Kwota w PLN: {{ currencyToPLN(mid1, currencyAmount) }}</p>
</template>

<script setup>
    import { ref } from 'vue'

    let exchangeRates = ref(null)
    const currencyAmount = ref(0)
    const mid1 = ref('')

    fetch('https://api.nbp.pl/api/exchangerates/tables/a/')
    .then (response => response.json())
    .then (data => exchangeRates.value = data)

    function currencyToPLN (mid, currencyAmount) {
        const result = mid*currencyAmount
        return result.toFixed(2)
    }
</script>
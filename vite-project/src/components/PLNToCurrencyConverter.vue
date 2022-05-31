<template>
    <label>Podaj kwotę w PLN:</label><br>
    <input v-model="PLNAmount"><br>
    <label for>Wybierz walutę:</label><br>
    <select v-model="mid2">
        <option v-for="r of exchangeRates[0].rates" :value="r.mid">{{ r.currency }}</option>
    </select><br>
    <p>Kwota w danej walucie: {{ PLNToCurrency(mid2, PLNAmount) }}</p>
</template>

<script setup>
    import { ref } from 'vue'

    let exchangeRates = ref(null)
    const PLNAmount = ref(0)
    const mid2 = ref('')

    fetch('https://api.nbp.pl/api/exchangerates/tables/a/')
    .then (response => response.json())
    .then (data => exchangeRates.value = data)

    function PLNToCurrency (mid, PLNAmount) {
        if (mid != 0) {
            const result = PLNAmount/mid
            return result.toFixed(2)
        } else{
            const result = 0
            return result
        }
    }
</script>



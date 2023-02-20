<script setup></script>

<template>
  <input
    id="amount"
    v-model="money"
    @keyup="perform_formatting"
    @click="click_handler"
    @blur="clean_decimals"
    @focus="$emit('focus')"
  />
</template>

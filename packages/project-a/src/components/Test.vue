<template>
  <div>
    <h1>project a test component</h1>

    <p>{{ localMethod() }}</p>
    <p>{{ sayHi() }}</p>
    <CommonHello />
  </div>
</template>

<script setup lang="ts">
import { localMethod } from '@/utils'
import { CommonHello } from '@practise/shared-components'
import { sayHi } from '@practise/shared-utils'
</script>

<style></style>

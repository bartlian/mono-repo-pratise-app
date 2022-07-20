<template>
  <div>
    <h1>project b test component</h1>

    <p>{{ showProjectB() }}</p>
    <p>{{ sayHi() }}</p>
    <CommonHello />
  </div>
</template>

<script setup lang="ts">
import { CommonHello } from '@practise/shared-components'
import { sayHi } from '@practise/shared-utils'
import { showProjectB } from '~/utils'
</script>

<style></style>

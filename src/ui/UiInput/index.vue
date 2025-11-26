<template>
  <input class="ui-input" :placeholder="placeholder" />
</template>

<script setup lang="ts">
import type { TInputProps } from './types';

defineOptions({ name: 'UiInput' });

defineProps<TInputProps>();

</script>

<style lang="scss" scoped src="./styles.scss" />
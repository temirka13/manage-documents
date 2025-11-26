<template>
  <button
    class="ui-button"
    :class="{
      [`ui-button_${type}`]: !disabled,
      'ui-button_disabled': disabled
    }"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { EButtonType, type TButtonEmits, type TButtonProps } from './types';

defineOptions({ name: 'UiButton' });

const props = withDefaults(defineProps<TButtonProps>(), {
  type: EButtonType.default,
  disabled: false,
});

const emit = defineEmits<TButtonEmits>();

const handleClick = (event: Event) => {
  if (!props.disabled) {
    emit('click', event);
  }
};

</script>

<style lang="scss" scoped src="./styles.scss" />
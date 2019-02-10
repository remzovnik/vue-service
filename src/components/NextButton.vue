<template>
  <button class="next-btn" type="button" @click="clickHandler">{{caption}}</button>
</template>

<script>
export default {
  name: 'NextButton',
  props: {
    caption: String,
    clickHandler: Function
  }
}
</script>

<style>
  .next-btn {
    min-width: 200px;
    box-sizing: border-box;
    padding: 15px 10px;
    background-color: #000;
    border: none;
    color: #fff;
    font-size: 16px;
  }
</style>

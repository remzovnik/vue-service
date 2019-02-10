<template>
  <div class="greetings">
    <div class="greetings__title">Приветствуем!</div>
    <div class="greetings__desc">
      Здесь мы поможем вам сформировать ваш заказ
    </div>
    <NextButton caption="Понял!" :clickHandler="start"/>
  </div>
</template>

<script>
import NextButton from './NextButton';

export default {
  name: 'Greetings',
  components: { NextButton },
  methods: {
    start() {
      this.$store.dispatch('start')
    }
  }
}
</script>

<style>
  .greetings__title {
    margin-bottom: 20px;
    font-size: 36px;
  }
  .greetings__desc {
    margin-bottom: 30px;
    font-size: 18px;
  }
</style>

<template>
  <div class="nav">
    <button class="reset-btn" type="button" @click="reset">Сбросить</button>
    <button class="prev-btn" type="button" @click="movePrev">Назад</button>
    <button class="next-btn" type="button" @click="moveNext(); submit()">Далее</button>
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: {
    submit: Function
  },
  methods: {
    reset() {
      this.$store.dispatch("reset");
    },
    movePrev() {
      this.$store.dispatch("movePrev");
    },
    moveNext() {
      this.$store.dispatch("moveNext");
    }
  }
};
</script>

<style>
.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 -10px;
}
.nav > * {
  margin: 0 10px;
}
.next-btn {
  min-width: 200px;
  box-sizing: border-box;
  padding: 15px 10px;
  background-color: #000;
  border: none;
  color: #fff;
  font-size: 16px;
}
.prev-btn {
  min-width: 200px;
  box-sizing: border-box;
  padding: 15px 10px;
  background-color: #fff;
  border: 1px solid #000;
  color: #000;
  font-size: 16px;
}
.reset-btn {
  min-width: 200px;
  box-sizing: border-box;
  padding: 15px 10px;
  background-color: lightblue;
  border: none;
  color: #fff;
  font-size: 16px;
}
</style>

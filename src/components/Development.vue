<template>
  <div class="development">
    <div class="tariff" v-if="step == 0">
      <div class="section-desc">Выберите свой тариф</div>
      <div class="tariff__container">
        <div>
          <div class="tariff-item tariff-item_1">
            <input
              class="tariff-item__input"
              id="tariff-1"
              type="radio"
              name="tariff"
              value="Дёшево"
              v-model="pickedTariff"
            >
            <label class="tariff-item__label" for="tariff-1">
              <div class="tariff-item__image"></div>
              <div class="tariff-item__title">Дешёвый</div>
            </label>
          </div>
        </div>
        <div>
          <div class="tariff-item tariff-item_2">
            <input
              class="tariff-item__input"
              id="tariff-2"
              type="radio"
              name="tariff"
              value="Стандарт"
              v-model="pickedTariff"
            >
            <label class="tariff-item__label" for="tariff-2">
              <div class="tariff-item__image"></div>
              <div class="tariff-item__title">Стандарт</div>
            </label>
          </div>
        </div>
        <div>
          <div class="tariff-item tariff-item_3">
            <input
              class="tariff-item__input"
              id="tariff-3"
              type="radio"
              name="tariff"
              value="Богато"
              v-model="pickedTariff"
            >
            <label class="tariff-item__label" for="tariff-3">
              <div class="tariff-item__image"></div>
              <div class="tariff-item__title">Богато</div>
            </label>
          </div>
        </div>
      </div>
      <Nav :submit="() => pickTariff(pickedTariff)"/>
    </div>
    <div class="budget" v-if="step == 1">
      <div class="section-desc">Каков бюджет?</div>
      <div class="budget__input-container">
        <input class="budget__input" type="text" v-model="pickedBudget">
      </div>
      <Nav :submit="() => pickBudget(pickedBudget)"/>
    </div>
    <div class="comment" v-if="step == 2">
      <div class="section-desc">Что-то хочешь добавить?</div>
      <div class="comment__container">
        <textarea class="comment__textarea" v-model="comment"></textarea>
      </div>
      <Nav :submit="() => addComment(comment)"/>
    </div>
    <Contacts v-if="step == 3"/>
    <DevelopmentSubmit v-if="step == 4"/>
  </div>
</template>

<script>
import Nav from "./Nav";
import Contacts from "./Contacts";
import DevelopmentSubmit from "./DevelopmentSubmit";

export default {
  name: "Development",
  components: { Nav, Contacts, DevelopmentSubmit },
  data() {
    return {
      pickedTariff: "",
      pickedBudget: "",
      comment: ""
    };
  },
  computed: {
    step() {
      return this.$store.state.step;
    }
  },
  methods: {
    pickTariff(pickedTariff) {
      this.$store.dispatch("pickTariff", pickedTariff);
    },
    pickBudget(pickedBudget) {
      this.$store.dispatch("approveBudget", pickedBudget);
    },
    addComment(comment) {
      this.$store.dispatch("addComment", comment);
    }
  }
};
</script>

<style>
.tariff__container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 -10px 50px;
}
.tariff__container > div {
  margin: 0 10px;
}
.tariff-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}
.tariff-item__image {
  width: 300px;
  height: 300px;
  margin-bottom: 20px;
}
.tariff-item__title {
  margin-bottom: 20px;
}
.tariff-item_1 .tariff-item__image {
  background: url("../assets/tariff-1.jpg") 50% 50% no-repeat;
  background-size: cover;
}
.tariff-item_2 .tariff-item__image {
  background: url("../assets/tariff-2.gif") 50% 50% no-repeat;
  background-size: cover;
}
.tariff-item_3 .tariff-item__image {
  background: url("../assets/tariff-3.jpg") 50% 50% no-repeat;
  background-size: cover;
}
.tariff-item__input {
  display: none;
}
.tariff-item__label {
  display: block;
}
.tariff-item__input:checked + .tariff-item__label {
  outline: 2px solid #000;
}
.budget__input-container {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}
.budget__input {
  width: 260px;
  height: 30px;
  font-size: 20px;
}
.comment__container {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
.comment__textarea {
  width: 320px;
  height: 150px;
  resize: vertical;
  font-size: 20px;
}
</style>
<template>
  <div class="submit">
    <div class="submit__container">
      <div class="section-desc">
        Последний шанс всё исправить...
      </div>
      <form>
        <div class="submit__row">
          Тип работ: {{ projectType }}
          <!-- <label class="submit__label" for="submit-tariff">
            Тип работ
          </label>
          <select name="submit-type">
            <option v-bind:selected="projectType == 'Разработка' ? true : false">Разработка</option>
            <option v-bind:selected="projectType == 'Редизайн' ? true : false">Редизайн</option>
            <option v-bind:selected="projectType == 'Продвижение' ? true : false">Продвижение</option>
          </select> -->
        </div>

        <div class="submit__row">
          <label class="submit__label" for="submit-tariff">
            Тариф
          </label>
          <select name="submit-tariff">
            <option v-bind:selected="tariff == 'Дёшево' ? true : false">Дёшево</option>
            <option v-bind:selected="tariff == 'Стандарт' ? true : false">Стандарт</option>
            <option v-bind:selected="tariff == 'Богато' ? true : false">Богато</option>
          </select>
        </div>
        <div class="submit__row">
          <label class="submit__label" for="submit-tariff">
            Бюджет
          </label>
          <input class="submit__input" type="text" name="submit-budget" :value="budget">
        </div>
        <div class="submit__row">
          <label class="submit__label" for="submit-tariff">
            Коммент
          </label>
          <textarea v-model="comment" name="submit-comment"></textarea>
        </div>
        <div class="submit__row">
          <label class="submit__label" for="submit-contacts-name">
            Контактное имя
          </label>
          <input id="submit-contacts-name" v-model="contactsName" name="submit-tariff">
        </div>
        <div class="submit__row">
          <label class="submit__label" for="submit-contacts-tel">
            Контактный телефон
          </label>
          <input id="submit-contacts-tel" v-model="contactsTel" name="submit-comment">
        </div>
        <button class="submit-btn" type="submit">Отправить заяву</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DevelopmentSubmit',
  computed: {
    projectType() {
      return this.$store.state.projectType;
    },
    tariff() {
      return this.$store.state.tariff;
    },
    budget() {
      return this.$store.state.budget;
    },
    comment() {
      return this.$store.state.comment;
    },
    contactsName() {
      return this.$store.state.contactsData.name;
    },
    contactsTel() {
      return this.$store.state.contactsData.tel;
    }
  }

} 
</script>

<style>
  .submit__row {
    margin-bottom: 20px;
  }
  .submit__label {
    display: block;
    margin-bottom: 5px;
    font-size: 16px;
  }
</style>
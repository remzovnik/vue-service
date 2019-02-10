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
          <label class="submit__label" for="submit-link">
            Ссылка
          </label>
          <input type="text" id="submit-link" name="submit-link" v-model="link">
        </div>
        <div class="submit__row">
          <div class="submit__label" for="submit-services">
            Услуги
          </div>
          <div>
            <label>
              <input type="checkbox" id="submit-services" name="submit-services" value="SEO" v-model="services">
              SEO
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" id="submit-services" value="DIRECT" v-model="services">
              DIRECT
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" id="submit-services" value="SMM" v-model="services">
              SMM
            </label>
          </div>
        </div>
        <div class="submit__row">
          <label class="submit__label" for="submit-tariff">
            Коммент
          </label>
          <textarea v-model="comment" name="submit-comment"></textarea>
        </div>
        <div class="submit__row">
          <label class="submit__label" for="contacts-name">
            Контактное имя
          </label>
          <input id="submit-contacts-name" v-model="contactsName" name="submit-name">
        </div>
        <div class="submit__row">
          <label class="submit__label" for="submit-contacts-tel">
            Контактный телефон
          </label>
          <input id="submit-contacts-tel" v-model="contactsTel" name="submit-tel">
        </div>
        <button class="submit-btn" type="submit">Отправить заяву</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RedesignSubmit',
  computed: {
    projectType() {
      return this.$store.state.projectType;
    },
    link() {
      return this.$store.state.link;
    },
    services() {
      return this.$store.state.services;
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
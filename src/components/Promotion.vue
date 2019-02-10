<template>
  <div class="promotion">
    <div class="link" v-if="step == 0">
      <div class="section-desc">Оставьте ссылку на ваш сайт</div>
      <div class="link__input-container">
        <input class="link__input" type="text" v-model="link">
      </div>
      <Nav :submit="() => addLink(link)"/>
    </div>
    <div class="services" v-if="step == 1">
      <div class="section-desc">Что не устраивает?</div>
        <div class="services__container">
        <div class="services__row">
          <input type="checkbox" id="services-1" name="services" value="SEO" v-model="services">
          <label class="services__label" for="services-1">
            SEO
          </label>
        </div>
        <div class="services__row">
          <input type="checkbox" id="services-2" name="services" value="DIRECT" v-model="services">
          <label class="services__label" for="services-2">
            DIRECT
          </label>
        </div>
        <div class="services__row">
          <input type="checkbox" id="services-3" name="services" value="SMM" v-model="services">
          <label class="services__label" for="services-3">
            SMM
          </label>
        </div>
      </div>
      <Nav :submit="() => addServices(services)"/>
    </div>
    <div class="comment" v-if="step == 2">
      <div class="section-desc">Что-то хочешь добавить?</div>
        <div class="comment__container">
          <textarea class="comment__textarea" v-model="comment"></textarea>
        </div>
      <Nav :submit="() => addComment(comment)"/>
    </div>
    <Contacts v-if="step == 3"/>
    <PromotionSubmit v-if="step == 4"/>
  </div>
</template>

<script>
import Nav from './Nav';
import Contacts from './Contacts';
import PromotionSubmit from './PromotionSubmit';

export default {
  name: 'Redesign',
  components: { Nav, Contacts, PromotionSubmit },
  data() {
    return {
      link: '',
      services: [],
      comment: ''
    }
  },
  computed: {
    step() {
      return this.$store.state.step;
    },
  },
  methods: {
    addLink(link) {
      this.$store.dispatch('addLink', link);
    },
    addServices(services) {
      this.$store.dispatch('addServices', services);
    },
    addComment(comment) {
      this.$store.dispatch('addComment', comment)
    }
  }
} 
</script>

<style>
  .link__input-container {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }
  .link__input {
    width: 260px;
    height: 30px;
    font-size: 20px;
  }
  .services__container {
    margin-bottom: 30px;
  }
</style>
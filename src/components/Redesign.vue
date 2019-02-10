<template>
  <div class="redesign">
    <div class="link" v-if="step == 0">
      <div class="section-desc">Оставьте ссылку на ваш сайт</div>
      <div class="link__input-container">
        <input class="link__input" type="text" v-model="link">
      </div>
      <Nav :submit="() => addLink(link)"/>
    </div>
    <div class="reasons" v-if="step == 1">
      <div class="section-desc">Что не устраивает?</div>
        <div class="reasons__container">
        <div class="reasons__row">
          <input type="checkbox" id="reasons-1" name="reasons" value="Плохой дизайн" v-model="reasons">
          <label class="reasons__label" for="reasons-1">
            Плохой дизайн
          </label>
        </div>
        <div class="reasons__row">
          <input type="checkbox" id="reasons-2" name="reasons" value="Сложно управлять" v-model="reasons">
          <label class="reasons__label" for="reasons-2">
            Сложно управлять
          </label>
        </div>
        <div class="reasons__row">
          <input type="checkbox" id="reasons-3" name="reasons" value="Не продаёт" v-model="reasons">
          <label class="reasons__label" for="reasons-3">
            Не продаёт
          </label>
        </div>
      </div>
      <Nav :submit="() => addReasons(reasons)"/>
    </div>
    <div class="comment" v-if="step == 2">
      <div class="section-desc">Что-то хочешь добавить?</div>
        <div class="comment__container">
          <textarea class="comment__textarea" v-model="comment"></textarea>
        </div>
      <Nav :submit="() => addComment(comment)"/>
    </div>
    <Contacts v-if="step == 3"/>
    <RedesignSubmit v-if="step == 4"/>
  </div>
</template>

<script>
import Nav from './Nav';
import Contacts from './Contacts';
import RedesignSubmit from './RedesignSubmit';

export default {
  name: 'Redesign',
  components: { Nav, Contacts, RedesignSubmit },
  data() {
    return {
      link: '',
      reasons: [],
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
    addReasons(reasons) {
      this.$store.dispatch('addReasons', reasons);
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
  .reasons__container {
    margin-bottom: 30px;
  }
</style>
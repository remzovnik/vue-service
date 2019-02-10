<template>
  <div class="contacts">
    <div class="section-desc">
      Как тебя найти?
    </div>
    <div class="contacts__container">
      <div class="contacts__row">
        <label class="contacts__label" htmlFor="contacts-name">Имя</label>
        <input class="contacts__input" id="contacts-name" type="text" v-model="contactsName">
      </div>
      <div class="contacts__row">
        <label class="contacts__label" htmlFor="contacts-tel">Телефон</label>
        <input class="contacts__input" id="contacts-tel" type="tel" v-model="contactsTel">
      </div>
    </div>
    <Nav :submit="() => addContacts(contactsName, contactsTel)"/>
  </div>
</template>

<script>
import Nav from './Nav';

export default {
  name: 'Contacts',
  components: { Nav },
  data() {
    return {
      contactsName: '',
      contactsTel: '',
    }
  },
  methods: {
    addContacts(contactsName, contactsTel) {
      this.$store.dispatch('addContacts', { 
        name: contactsName,
        tel: contactsTel
      })
    }
  }
} 
</script>

<style>
  .contacts__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
  }
  .contacts__row {
    margin-bottom: 20px;
  }
  .contacts__label {
    display: block;
    margin-bottom: 5px;
    font-size: 18px;
  }
  .contacts__input {
    width: 260px;
    height: 30px;
    font-size: 18px;
  }
</style>
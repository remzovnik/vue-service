<template>
  <div class="project-type">
    <div class="project-type__desc">
      Выберите тип работ!
    </div>
    <div class="project-type__container">
      <div>
        <div class="project-type-item project-type-item_promotion">
          <input class="project-type-item__input" id="project-type-promotion" type="radio" name="project-type" value="Продвижение" v-model="pickedType">
          <label class="project-type-item__label" for="project-type-promotion">
            <div class="project-type-item__image">
            </div>
            <div class="project-type-item__title">
              Продвижение
            </div>
          </label> 
        </div>
      </div>
      <div>
        <div class="project-type-item project-type-item_development">
          <input class="project-type-item__input" id="project-type-development" type="radio" name="project-type" value="Разработка" v-model="pickedType">
          <label class="project-type-item__label" for="project-type-development">
            <div class="project-type-item__image">
            </div>
            <div class="project-type-item__title">
              Разработка
            </div>
          </label> 
        </div>
      </div>
      <div>
        <div class="project-type-item project-type-item_redesign">
          <input class="project-type-item__input" id="project-type-redesign" type="radio" name="project-type" value="Редизайн" v-model="pickedType">
          <label class="project-type-item__label" for="project-type-redesign">
            <div class="project-type-item__image">
            </div>
            <div class="project-type-item__title">
              Редизайн
            </div>
          </label> 
        </div>
      </div>
    </div>
    <div class="project-type__btn-container">
      <button class="next-btn" type="button" @click="pickType">Далее</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectType",
  data() {
    return {
      pickedType: ''
    }
  },
  methods: {
    pickType() {
      this.$store.dispatch('pickType', this.pickedType);
    }
  }
};
</script>

<style>
  .project-type__desc {
    font-size: 20px;
    margin-bottom: 30px;
  }
  .project-type__container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 0 -10px 50px;
  }
  .project-type__container > div {
    margin: 0 10px;
  }
  .project-type-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }
  .project-type-item__image {
    width: 300px;
    height: 300px;
    margin-bottom: 20px;
  }
  .project-type-item__title {
    margin-bottom: 20px;
  }
  .project-type-item_development .project-type-item__image {
    background: url('../assets/harold-1.jpg') 50% 50% no-repeat;
    background-size: cover;
  }
  .project-type-item_promotion .project-type-item__image {
    background: url('../assets/harold-3.jpg') 50% 50% no-repeat;
    background-size: cover;
  }
  .project-type-item_redesign .project-type-item__image {
    background: url('../assets/harold-4.gif') 50% 50% no-repeat;
    background-size: cover;
  }
  .project-type-item__input {
    display: none;
  }
  .project-type-item__label {
    display: block;
  }
  .project-type-item__input:checked + .project-type-item__label {
    outline: 2px solid #000;
  }
</style>

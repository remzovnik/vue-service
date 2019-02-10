<template>
  <div class="app">
    <Greetings v-if="isStarted == false"/>
    <template v-if="isStarted == true">
      <ProjectType v-if="projectType == ''"/>
      <template v-if="projectType != ''">
        <Development v-if="projectType == 'Разработка'"/>
        <Redesign v-if="projectType == 'Редизайн'"/>
        <Promotion v-if="projectType == 'Продвижение'"/>
      </template>
    </template>
  </div>
</template>

<script>
import Greetings from './components/Greetings';
import ProjectType from './components/ProjectType';
import Development from './components/Development';
import Redesign from './components/Redesign';
import Promotion from './components/Promotion';
import './app.css';

export default {
  name: 'app',
  components: {
    Greetings,
    ProjectType,
    Development,
    Redesign,
    Promotion
  },
  computed: {
    isStarted() {
      return this.$store.state.isStarted;
    },
    projectType() {
      return this.$store.state.projectType;
    }
  }
}
</script>

<style>
.app {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 960px;
  min-height: 100vh;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 30px 0;
  text-align: center;
  font-family: 'Verduna', sans-serif;
}
</style>

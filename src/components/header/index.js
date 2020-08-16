import Vue from 'vue';
import style from './style.scss';
import duckImage from '@/static/img/DUCK.png';

export default Vue.component('HeaderBar', {
  functional: true,
  render(h, context) {
    return (
      <div class='header-bar'>
        <img class='logo' src={duckImage}></img>
      </div>
    );
  },
});

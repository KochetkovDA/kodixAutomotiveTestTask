import Vue from 'vue';
import style from './style.scss';

export default Vue.component('FooterBar', {
  functional: true,
  render(h, context) {
    return (
      <div class='footer-bar'>
        <div class='copyright'>
          <small>© 2020 CAPTAIN QUACK</small>
          <br></br>
          <small>Десница тысячелетия и моллюск!</small>
        </div>
      </div>
    );
  },
});

<script>
/**
 * Компонент формы, для добавления автомобилей.
 */
export default {
  name: 'AddCarsForm',
  props: {
    sendCar: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      title: '',
      color: 'gray',
      status: '',
      year: '',
      price: '',
      description: '',
      statusVariants: [
        { key: 'in_stock', value: 'В наличии' },
        { key: 'pednding', value: 'Ожидается' },
        { key: 'out_of_stock', value: 'Нет в наличии' },
      ],
      collorsVariants: [
        { value: 'white', active: false },
        { value: 'black', active: false },
        { value: 'gray', active: true },
        { value: 'red', active: false },
        { value: 'green', active: false },
      ],
    };
  },
  computed: {
    unicId() {
      return (
        Math.random()
          .toString(32)
          .substr(2) + new Date().getTime().toString(32)
      );
    },

    newCarInfo() {
      return {
        id: this.unicId,
        title: this.title,
        color: this.color,
        status: this.status,
        year: this.year,
        price: this.price,
        description: this.description,
      };
    },
  },

  methods: {
    clearNewCarParams() {
      this.title = '';
      this.status = '';
      this.year = '';
      this.price = '';
      this.description = '';
    },

    onSendCar() {
      this.sendCar(this.newCarInfo);
      this.clearNewCarParams();
    },

    changeSelectedColor(item) {
      const currentSelect = this.collorsVariants.findIndex(variant => variant.active === true);
      const selectedIndex = this.collorsVariants.indexOf(item);

      this.collorsVariants[currentSelect].active = false;
      this.collorsVariants[selectedIndex].active = true;
      this.color = this.collorsVariants[selectedIndex].value;
    },
  },
};
</script>

<template>
  <div class="form-wrapper">
    <h1 class="form-title">¡Ay caramba!</h1>

    <div class="row input-group">
      <div class="input-wrapper">
        <br />
        <input v-model="title" class="form-input" placeholder="Название" />
        <span class="floating-label">Название</span>
      </div>

      <div class="input-wrapper">
        <br />
        <input v-model="year" class="form-input" placeholder="Год" />
        <span class="floating-label">Год</span>
      </div>

      <div class="input-wrapper">
        <br />
        <input v-model="price" class="form-input" placeholder="Цена" />
        <span class="floating-label">Цена</span>
      </div>
    </div>

    <div class="row input-group">
      <div class="input-wrapper">
        <br />
        <input v-model="description" class="form-input" placeholder="Описание" />
        <span class="floating-label">Описание</span>
      </div>
    </div>

    <div class="row input-group">
      <div class="input-wrapper">
        <span class="label">Цвет</span>
        <div class="radio-button-group">
          <div
            v-for="(variant, index) in collorsVariants"
            :key="variant.value + index"
            :class="['collorCheck', `${variant.value}`, variant.active ? 'activeCheck' : '']"
            @click="changeSelectedColor(variant)"
          ></div>
        </div>
      </div>

      <div class="input-wrapper">
        <br />
        <select v-model="status" name="select" class="form-input">
          <option class="default-select" value="" hidden disabled selected>Статус</option>
          <option
            v-for="(variant, index) in statusVariants"
            :key="variant.key + index"
            :value="variant.key"
          >
            {{ variant.value }}
          </option>
        </select>
        <span class="floating-label">Цена</span>
      </div>

      <div class="input-wrapper">
        <button class="send-btn" @click="onSendCar()">
          <span class="btn-inner">
            <p>ОТПРАВИТЬ</p>
            <svg
              width="8"
              height="15"
              viewBox="0 0 8 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.46249 1.33332C-0.0221646 1.85337 -0.0221646 2.69327 0.46249 3.21332L4.88749 7.99999L0.46249 12.72C-0.0221646 13.24 -0.0221646 14.0799 0.46249 14.6C0.697198 14.8524 1.01669 14.9944 1.34999 14.9944C1.68329 14.9944 2.00278 14.8524 2.23749 14.6L7.53749 8.94665C7.77413 8.6963 7.90724 8.3555 7.90724 7.99999C7.90724 7.64447 7.77413 7.30368 7.53749 7.05332L2.23749 1.33332C2.00278 1.0809 1.68329 0.938922 1.34999 0.938922C1.01669 0.938922 0.697198 1.0809 0.46249 1.33332Z"
                fill="white"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;

  .form-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 42px;
    line-height: 49px;
    text-align: center;
    color: #282d30;
  }

  .row {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin: 15px;

    &.input-group {
      margin: 5px -10px;
    }
  }

  .send-btn {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 36px;
    color: #ffffff;
    background: #c3002f;
    border: none;
    border-radius: 4px;
    height: 44px;
    width: 100%;
    &:hover {
      cursor: pointer;
    }
    &:active {
      outline: none;
      cursor: pointer;
      background: #ac0129;
    }
    &:focus {
      outline: none;
    }

    .btn-inner {
      display: inline;

      p {
        display: inline;
        padding-right: 20px;
      }
    }
  }

  .label {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: #8b8b8b;
  }

  .radio-button-group {
    padding-top: 12px;
    display: flex;
    .collorCheck {
      border-radius: 50%;
      margin-right: 24px;
      width: 19px;
      height: 19px;
      border: 1px solid #8b8b8b;
      &.activeCheck {
        border: 3px solid #c3002f;
      }
      &:hover {
        cursor: pointer;
      }
      &.white {
        background-color: #ffffff;
      }
      &.black {
        background-color: #000000;
      }
      &.gray {
        background-color: #c4c4c4;
      }
      &.red {
        background-color: #dd1c10;
      }
      &.green {
        background-color: #77cf61;
      }
    }
  }

  .floating-label {
    position: absolute;
    pointer-events: none;
    left: 20px;
    top: 18px;
    transition: 0.2s ease all;
  }

  .input-wrapper {
    margin: 0 10px;
    width: 100%;
  }

  .form-input {
    padding: 10px;
    height: 40px;
    width: 100%;
    box-sizing: border-box;
    background: #ffffff;
    border: 1px solid #dadada;
    border-bottom: 2px solid #dadada;
    box-sizing: border-box;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;

    .default-select {
      color: #8b8b8b;
    }

    &:focus,
    &:focus:hover {
      color: #282d30;
      border-bottom: 2px solid #282d30;
      outline: none;
    }

    &:hover {
      cursor: pointer;
      border-bottom: 2px solid #c3002f;
    }
  }
}
</style>

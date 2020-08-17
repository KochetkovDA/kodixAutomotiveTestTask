<script>
import { mapMutations } from 'vuex';
/**
 * Компонент таблицы, для отображения списка автомобилей.
 */

export default {
  name: 'CarsTable',
  props: {
    tableCaption: {
      type: String,
      default: 'АВТОМОБИЛИ В НАЛИЧИИ',
    },
    columnLabels: {
      type: Array,
      default() {
        return ['Название', 'Год', 'Цвет', 'Статус', 'Цена', ''];
      },
    },
    rowsData: {
      type: Array,
      required: true,
    },
  },
  methods: {
    ...mapMutations('cars', ['removeCarFromList']),
  },
};
</script>

<template>
  <div class="table-wrapper">
    <div class="caption-wrapper">
      <div class="caption-rectangle"></div>
      <h3>{{ tableCaption }}</h3>
    </div>
    <table class="table">
      <thead class="head">
        <th v-for="label in columnLabels" :key="label">{{ label }}</th>
      </thead>
      <tbody>
        <tr v-for="(car, index) in rowsData" :key="`${car.id}_${index}`">
          <td>
            {{ car.title }}
            <p class="description">{{ car.description }}</p>
          </td>
          <td>{{ car.year }}</td>
          <td>
            <div class="colorExample" :style="{ background: car.color }"></div>
          </td>
          <td>{{ car.status }}</td>
          <td>
            <p class="price">{{ `${car.price} руб` }}</p>
          </td>
          <td><button class="remove-btn" @click="removeCarFromList(car)">Удалить</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.table-wrapper {
  width: 100%;

  .caption-wrapper {
    display: inline-block;
    white-space: nowrap;

    .caption-rectangle {
      width: 3px;
      height: 18px;
      vertical-align: middle;
      margin-right: 12px;
      display: inline-block;
      background: #8b8b8b;
      content: '|\00a0'; // &nbsp;
    }
    h3 {
      vertical-align: middle;
      font-size: 20px;
      line-height: 23px;
      display: inline-block;
    }
  }

  .table {
    width: 100%;
    border-collapse: collapse;
    .head {
      text-align: left;
      line-height: 24px;
      font-weight: bold;
      font-size: 14px;
      color: #ffffff;
      background: #c3002f;
      border-radius: 4px 4px 0px 0px;
      th {
        padding: 12px 15px;
      }
      th:first-child {
        border-radius: 4px 0px 0px 0px;
      }
      th:last-child {
        border-radius: 0px 4px 0px 0px;
      }
    }
    tr {
      background: #f5f6f6;
      border-bottom: 1px solid #dadada;
      td {
        font-weight: 300;
        font-size: 15px;
        line-height: 20px;
        color: #323232;
        padding: 16px 15px;
        .description {
          font-size: 13px;
          line-height: 16px;
          font-weight: 300;
          color: #8b8b8b;
        }

        .colorExample {
          width: 19px;
          height: 19px;
          border-radius: 50%;
          border: 1px solid #8b8b8b;
        }

        .price {
          display: inline;
          font-family: Roboto;
          font-style: normal;
          font-weight: 300;
          font-size: 15px;
          line-height: 20px;
          white-space: nowrap;
        }

        .remove-btn {
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          padding: 5px 15px;
          font-size: 14px;
          line-height: 20px;
          color: #8b8b8b;
          border: none;
          background: transparent;

          &:hover {
            color: #ffffff;
            cursor: pointer;
            background: #282d30;
            border-radius: 20px;
          }
        }
      }
    }
  }
}
</style>

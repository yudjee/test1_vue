<template>
  <div class="order_wrapper" >
    	<div v-if="isHidden" class="order_title" @click="onOrder(id)">Длинное предлиное длиннючее название прихода - <b>{{title}}</b></div>
    	<div class="order_products">
    		<div class="order_circle" @click="onOrder(id)"><i class="fas fa-list-ul"></i></div>
    		<div class="order_prodcut_count">
    			<p class="order_prodcut_num"> {{inOrderProducts.length}}</p><p class="order_prodcut_text">Продукта</p>
    		</div>
      </div>
    	<div class="order_date">{{ date.slice(0, 10) }}</div>
    	<div v-if="isHidden" class="order_price">{{currentPrice}} UAH</div>
    	<div v-if="isHidden" class="product_delete" @click="onDelete(id)">
        <i class="fas fa-trash-alt pointer"></i>
      </div>
  </div>

</template>

<script>
  
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'OrderItem',

    data() {
      return {
        id: this.order.id,
        title: this.order.title,
        date: this.order.date,
      }
    },

    props: ['order', 'setActiveOrder', 'activeOrder', 'onOpenPopup'],

    computed: {
      ...mapGetters({
          isHidden: 'getIsHidden',
          products: 'getProductList'
      }),
      inOrderProducts() {
        const filtered = this.products.filter((product) => {
          if(this.id === product.order) {
            return product
          } 
        })
        return filtered
      },
      currentPrice() {
        let products = this.inOrderProducts
        let sum = 0
        for (let i=0;i<products.length;i++) {
          sum+=products[i].price[1].value
        }
        return sum
      }
    },

    methods: {
      ...mapActions({
        changeToUnhidden: 'changeToUnhidden'
      }),
      onOrder(id) {
        this.setActiveOrder(id)
        this.changeToUnhidden()
      },
      onDelete(id) {
        this.onOpenPopup(id)
      }

    },
  }
</script>

<style>
  .order_wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #d6dee1;
    border-radius: 5px;
    min-width: 100%;
    background-color: #fff;
  }

  .order_wrapper:hover {
    transform: scale(1.01);
    box-shadow: 0px 0px 16px -5px rgba(0,0,0,0.75);
  }

  .order_products {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .order_circle {
    border: 3px solid #d0d9dd;
    border-radius: 50%;
    padding: 7px;
    margin-right: 10px;
    cursor: pointer;
  }

  .order_circle:hover {
    background-color: #8bc34a;
    color: #fff;
    border: 3px solid #81b44a;

  }
</style>
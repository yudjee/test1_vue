<template>

  <div class="product_wrapper">
    <span class="circle" :class="{newitemcircle: isNew}"></span>
    <img src="https://purepng.com/public/uploads/large/purepng.com-monitormonitorscomputer-displayvisual-displayelectronicdisplay-devicecrystal-displaylcdledamoled-17015283625451gofn.png" alt="photo" class="product_img">
    <div class="product_title"> {{ title }} </div>
    <div class="product_ready" :class="{newitem: isNew}"> {{ isNew ? 'Свободен' : 'В ремонте' }} </div>
    <div class="porduct_guarantee"> 
      <div class="porduct_guarantee_start"> с {{ guaranteeStart.slice(0, 10) }} </div>
      <div class="porduct_guarantee_end"> по {{ guaranteeEnd.slice(0, 10) }} </div>
    </div>
    <div class="product_new" :class="{newitem: isNew}"> {{ isNew ? 'Новый' : 'Б/У' }} </div>
    <div class="product_price">
      <div class="product_price_usd"> {{ priceUSD }} $ </div>
      <div class="product_price_uah"> {{ priceUAH }} UAH </div>
    </div>
    <div class="product_description">Длинное предлиное длиннючее название группы</div>
    <div class="product_description">Длинное предлиное длиннючее название группы</div>
    <div class="product_order"> {{ date.slice(0, 10) }} </div>
    <div class="product_delete pointer" @click="onDelete(id)"><i class="fas fa-trash-alt fa-2x"></i></div>

  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      id: this.product.id,
      title: this.product.title,
      isNew: this.product.isNew,
      type: this.product.type,
      specification: this.product.specification,
      guaranteeStart: this.product.guarantee.start,
      guaranteeEnd: this.product.guarantee.end,
      priceUSD: this.product.price[0].value,
      priceUAH: this.product.price[1].value,
      order: this.product.order,
      date: this.product.date
    }
  },
  name: 'ProductItem',

  props: ['product'],

  methods: {
      ...mapActions({
            deleteProduct: 'deleteProduct'
        }),

        onDelete(id) {
          this.deleteProduct(id)  
        }
    }

}
</script>

<style>
  .product_wrapper {
    width: 100%;
    max-height: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #d6dee1;
    border-radius: 5px;
    font-size: 10px;
  }

  .product_wrapper:hover {
    transform: scale(1.01);
    box-shadow: 0px 0px 16px -5px rgba(0,0,0,0.75);
  }

  .product_img {
    height: 50px;
    width: auto;
  }

  .product_description {
    max-width: 100px;
  }

  .newitem {
    color: #cddc39
  }

  .circle {
    width: 10px;
    height: 10px;
    border-radius: 25px;
    background: #36454d;
  }

  .newitemcircle {
    background: #cddc39;
  }

  .product_price_uah {
    font-size: 15px;
  }

</style>
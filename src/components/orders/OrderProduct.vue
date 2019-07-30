<template>
  <div class="ord_product_wrapper">
    <span class="circle" :class="{newitemcircle: isNew}"></span>
    <img src="https://purepng.com/public/uploads/large/purepng.com-monitormonitorscomputer-displayvisual-displayelectronicdisplay-devicecrystal-displaylcdledamoled-17015283625451gofn.png" alt="photo" class="product_img">
    <div class="product_title"> {{ title }} </div>
    <div class="product_ready" :class="{newitem: isNew}"> {{ isNew ? 'Свободен' : 'В ремонте' }} </div>
    <div class="product_delete" @click="onDelete(id)"><i class="fas fa-trash-alt pointer"></i></div>
  </div>
</template>

<script>

  import { mapActions } from 'vuex';

  export default {
    name: 'OrderProduct',

    data() {
      return {
        id: this.product.id,
        title: this.product.title,
        isNew: this.product.isNew
      }
    },

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

.ord_product_wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
}
.ord_product_wrapper:hover {
  box-shadow: 0px 0px 16px -5px rgba(0,0,0,0.75);
}

</style>
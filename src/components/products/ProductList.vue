<template>
	<div class="products_wrapper">
		<div class="product_input">
			<span class="product_count">Продукты / {{filterProducts.length}}</span>
			<div class="select">
				<span>Тип</span>
				<select v-model="selected">
					<option value="all">all</option>
					<option value="new">new</option>
					<option value="used">used</option>
				</select>
			</div>
			<div class="select">
				<span>Спецификация</span>
				<select>
					<option>Type 1</option>
					<option>Type 2</option>
					<option>Type 3</option>
					<option>Type 4</option>
				</select>
			</div>
		</div>
		<ProductItem v-for="product in filterProducts" :product="product" :key="product.id"/>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ProductItem from './ProductItem.vue'

export default {
  name: 'ProductList',

  data() {
  	return {
  		selected: 'all'
  	}
  },

  components: {
  	ProductItem,
  },

  computed: {
  	...mapGetters({
        products: 'getProductList'
    }),
  	filterProducts() {
  		const filtered = this.products.filter((product) => {
  			if(this.selected === 'all') {
  				return product
  			} else if(this.selected === 'new' && product.isNew === 1) {
  				console.log(product)
  				return product
  			} else if(this.selected === 'used' && product.isNew === 0) {
  				return product
  			} 
  		})

  		return filtered
  	}
	},


}
</script>

<style>
	.products_wrapper {
		width: 85%;
		display: flex;
		flex-direction: column;
		padding: 30px;
		z-index: 1;
	}
	.product_input {
		height: 10%;
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-bottom: 40px;
	}

	.select {
		margin: 0 20px;
	}

	.select select {
		width: 150px;
		margin-left: 10px;
	}

	.product_count {
		font-size: 30px;
	}

</style>
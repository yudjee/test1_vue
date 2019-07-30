<template>
	<div class="orders_container">
		<div class="orders_count">
			<div class="orders_circle">+</div>
			<span class="orders_count_num">Приходы / {{orders.length}}   </span>
		</div>

		<div class="orders_wrapper">
			<div class="orders_list"><OrderItem v-for="order in orders" 
				:order="order" 
				:key="order.id" 
				:setActiveOrder="setActiveOrder"
				:activeOrder="activeOrder"
				:onOpenPopup="onOpenPopup"
				/></div>

				<div v-if="!isHidden" class="products_list">
					<div class="product_close"><i class="far fa-times-circle fa-2x pointer" @click="onHidden()"></i></div>
					<h3>{{ activeTitle }}</h3>
					<div class="add_product">
						<div class="orders_circle">+</div>
						<div style="color: #8bc34a">Добавить продукт</div>
					</div>
					<OrderProduct 
						v-for="product in inOrderProducts" 
						:key="product.id" 
						:product="product" 
					/>
				</div>
			</div>
			<Popup 
				v-if="isPopup"
				:activeTitle="activeTitle"
				:activeOrder="activeOrder"/>
		</div>
</template>

<script>

	import OrderItem from './OrderItem.vue'
	import OrderProduct from './OrderProduct.vue'
	import Popup from '../popup/Popup.vue'
	import { mapGetters, mapActions } from 'vuex';

	export default {
		name: 'OrderList',

		data() {
			return {
				activeOrder: null,
				deletOrder: null,			
			}
		},

	  components: {
	  	OrderItem,
	  	OrderProduct,
	  	Popup
		},

		methods: {
			 ...mapActions({
        changeToHidden: 'changeToHidden',
        changeToHidden: 'changeToHidden',
        openPopup: 'openPopup'
      }),
			setActiveOrder(id) {
				this.activeOrder = id
			},
			onHidden() {
				this.changeToHidden()
			},
			onOpenPopup(id){
				this.openPopup()
				this.deletOrder = id
				this.activeOrder = id
			}
		},

		computed: {
  		...mapGetters({
        	orders: 'getOrderList',
        	isHidden: 'getIsHidden',
        	products: 'getProductList',
        	isPopup: 'getIsPopup'
    	}),

      inOrderProducts() {
	      const filtered = this.products.filter((product) => {
	        if(this.activeOrder === product.order) {
	          return product
	        } 
	      })
	      return filtered
	    },
	    activeTitle() {
	    	let title = ''
	    	for(let i=0; i<this.orders.length; i++) {
	    		if(this.orders[i].id === this.activeOrder) {
	    			title = this.orders[i].title
	    		}
	    	}
	    	return title
	    }
  	},

	}
</script>

<style>
	.orders_container {
		width: 100%;
		height: 100%;
		padding: 50px;
		display: flex;
		flex-direction: column;
	}

	.orders_count {
		align-self: flex-start;
		margin: 10px 0;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.orders_circle {
		width: 30px;
		height: 30px;	
		font-size: 20px;
		border: 5px solid #81b44a;
		background-color: #8bc34a;
		border-radius: 50%;
		padding: 5px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		margin-right: 10px;
	}

	.orders_count_num {
		font-weight: bold;
		font-size: 20px;
	}

	.orders_wrapper {
		display: flex;
		flex-direction: row;
	}
	.orders_list {
		flex: 2;
	}
	.products_list {
		flex: 3;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		border: 1px solid #d6dee1;
    border-radius: 5px;
    margin-left: 20px;
    background-color: #fff;
    margin-bottom: 20px;
	}
	.add_product {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin: 0 0 20px 30px;
	}
	.pointer {
		cursor: pointer;
	}
	.product_close {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		position: relative;
		top: -15px;
		right: -15px;
	}
	.fa-times-circle:hover {
		transform: scale(1.02);
	}
</style>
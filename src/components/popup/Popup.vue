<template>
  <div class="popup_container">
  	<div class="popup_wrapper">
  		<div class="popup_header">
	  		<div class="close_button" @click="onCancel()"><i class="far fa-times-circle fa-2x pointer green"></i></div>
	  		<h3 class="popup_title">Вы уверенны, что хотите удалить этот приход - <b>{{activeTitle}}</b>?</h3>
  		</div>
  		<div class="popup_footer">
  			<div class="popup_cancel upperc pointer" @click="onCancel()">отменить</div>
  			<div class="popup_delete upperc green pointer" @click="onDeleteOrder(activeOrder)">
  				<i class="fas fa-trash-alt pointer"></i> удалить
  			</div>
  		</div>
  	</div>
  </div>
</template>

<script>

	import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'Popup',

    data() {
      return {
        
      }
    },

    props: ['activeTitle', 'activeOrder'],

    computed: {
      
    },

    methods: {
      ...mapActions({
        closePopup: 'closePopup',
        deleteOrder: 'deleteOrder'
      }),
      onCancel(id) {
        this.closePopup()
      },
      onDeleteOrder(id) {
      	this.deleteOrder(id)
      	this.closePopup()
      }

    },
  }
</script>

<style>
	.popup_container {
	  position: fixed;
	  width: 100%;
	  height: 100%;
	  top: 0;
	  left: 0;
	  right: 0;
	  bottom: 0;
	  margin: auto;
	  background-color: rgba(0,0,0, 0.5);
	  display: flex;
	  align-items: center;
	  justify-content: center;
	}
	.popup_wrapper {
		width: 50%;
		height: 30%;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.close_button {
		float: right;
		margin: 5px;
	}
	.green {
		color: #7cb342
	}
	.popup_title {
		padding: 20px;
	}
	.popup_footer {
		height: 50%;
		background-color: #7cb342;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		padding-right: 40px;
	}
	.upperc {
		text-transform: uppercase;
		font-size: 15px;
	}
	.popup_cancel {
		color: #fff;
		font-weight: bold;
		margin-right: 20px;
	}
	.popup_delete {
		background-color: #fff;
		padding: 10px 20px;
		border-radius: 20px;
	}

</style>
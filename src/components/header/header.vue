<template>
	<div class="container">
		<div class="header_wrapper">
			<div class="header_left">
				<div class="header_logo">
					<span class="fa-stack fa-2x" style="color: #7cb342">
					  <i class="fas fa-shield-alt fa-stack-2x "></i>
					  <i class="fas fa-user-circle fa-stack-1x"></i>
					</span>
					<h2 class="header_title">inventory</h2>
				</div>
				<input type="text" placeholder="Поиск" class="header_input">
			</div>

			<div class="header_date">
				<div class="header_today">{{getDay()}}</div>
				<div class="header_time">
					{{getDate()}} <i class="far fa-clock" style="color: #7cb342"></i> {{getTime()}}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import moment from 'moment'

export default {

	name: 'Header',

	methods: {
		getDay() {
			return moment().format('dddd')
		},
		getDate() {
			return moment().format('MMMM Do YYYY')
		},
		getTime() {
			return moment().format('h:mm a');
		}
	},
}
</script>

<style>
	.header_wrapper {
		width: 100%;
		height: 15vh;
		padding: 10px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		z-index: 100;
		position: relative;
		box-shadow: 0px 2px 16px -1px rgba(0,0,0,0.75);
		background-color: #fff;
	}
	.header_left {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		width: 50%;
	}

	.header_logo {
		display: flex;
		flex-direction: row;
		align-items: center;
		color: #7cb342;
	}

	.header_title {
		text-transform: uppercase;
	}

	.header_input {
		border-radius: 5px;
		padding: 5px;
		width: 50%;
	}

	.header_date {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}


</style>
<template>
	<div class="navbar_wrapper">
		<div class="navbar_photo">
			<img src="http://foto-all.ru/images/photo1.jpg" alt="photo" class="img">
		</div>
		<div class="navbar_links">
			<router-link to="/orders" class="navbar_link">Приход</router-link>
			<a href="#" class="navbar_link">Группы</a>
			<router-link to="/products" class="navbar_link">Продукты</router-link>
			<a href="#" class="navbar_link">Пользователи</a>
			<a href="#" class="navbar_link">Настройки</a>
		</div>		
		
		
	</div>
</template>

<script>
export default {
  
}
</script>

<style>
	.navbar_wrapper {
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		width: 15%;
		height: 100%;
		box-shadow: 12px 8px 18px -9px rgba(0,0,0,0.75);
		z-index: 5;
		padding-top: 20px;
		background-color: #fff;
	}

	.navbar_photo {
		width: 70px;
		height: 70px;
		margin: 0 auto;
		overflow: hidden;
	}

	.navbar_photo img {
		margin-top: 20px;
		border-radius: 50%;
		width: 100%;
		max-width: 100%;
		height: 100%;
		margin: 0 auto;
	}

	.navbar_links {
		display: flex;
		flex-direction: column;
		height: 80%;
	}

	.navbar_link {
		margin: 10px;
		text-decoration: none;
		text-transform: uppercase;
		font-weight: bold;
		color: #36454d;
	}
	
	.navbar_link:after {
		display: block;
		position: relative;
		left: 0; 
		width: 0;
		height: 2px; 
		background-color: #00a650;
		content: "";
		transition: width 0.2s ease-out;
	}

	.navbar_link:hover:after {
		width: 100%;
	}

</style>
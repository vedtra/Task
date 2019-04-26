<template>
	<div>

		<b-navbar toggleable="lg" type="dark" class="head">
			<b-container class="bv-example-row">
			  <b-navbar-brand class="logos" >
			  	<nuxt-link to="/">Snaptig</nuxt-link>
			  </b-navbar-brand>
			  <div v-if="$store.state.authUser">
			  <b-navbar-nav class="ml-auto">
		        <b-nav-item class="x"><nuxt-link to="/">Home</nuxt-link></b-nav-item>
		        <b-nav-item class="x"><nuxt-link to="/about">about</nuxt-link></b-nav-item>
		        <b-nav-item class="x"><nuxt-link to="/service">service</nuxt-link></b-nav-item>
		        <b-nav-item class="x"><nuxt-link to="/">Contact</nuxt-link></b-nav-item>
      		  </b-navbar-nav>
      		</div>
      		</b-container>
		</b-navbar>
	</div>
	<!-- <header>
		<nuxt-link to="/" class="logo"><span>Snaptig</span></nuxt-link>
		<nav>
			<ul>
				<li><nuxt-link to="/">Home</nuxt-link></li>
				<li><nuxt-link to="/about">About</nuxt-link></li>
				<li><nuxt-link to="/service">Service</nuxt-link></li>
				<li><nuxt-link to="/">Contact</nuxt-link></li>
			</ul>  
		</nav>
	</header> -->
</template>

<script>
	
</script>
<style>
	.logos a{
	  text-decoration: none;
	  color:white;
	  font-size:25px;
	}

	.head{
		background:#FAC114;
	}
	.x a{
		padding: 0.5em 1em;
		display: block;
		text-transform: uppercase;
		text-decoration:none;
		font-weight:bold;
		color:white;
		font-size:20px;

		
	}
	
	.ml-auto{
		padding-top: 0.5em;
		
	}
	.x{
		display: inline;
		text-decoration:none;
	}

</style>
<template>
<div>
	
	<b-card v-for="company	in	companies"
		    no-body
		    style="max-width: 20rem;"
		    
		    img-alt="Image"
		    img-top
		  >
		  <img v-bind:src="company.image">
    <h4 slot="header">{{company.name}}</h4>

	    <b-card-body>
	      <b-card-title>{{company.addres}}</b-card-title>
	    </b-card-body>
     </b-card>
</div>
  
</template>
<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
  float:left;
}
.post-thumbnail{
	width: 60px;
	height:60px;
	background-position: center;
	background-size: cover;
}
.post-content{
	padding: 10px;
	text-align: center;
}
a:hover .post-content,
a:active .post-content{
	background-color:#ccc;
}
</style>

<script>
	export	default	{
	data ()	{
		return	{
			companies:[
				{
					id:	'1',
					name:	'Horas Motor',
					addres:	'Balige',
					image: require('../assets/images/logo.jpg'),
				},
				{
					id:	'2',
					name:	'Cv Persada',
					addres:	'Laguboti',
					image: require('../assets/images/logo.jpg'),
					
				},
				{
					id:	'3',
					name:	'PT Dua Motor',
					addres:	'Medan',
					image: require('../assets/images/logo.jpg'),
				}
					]
				}
			}
	}
</script>
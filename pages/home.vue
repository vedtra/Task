<template>
    <div>
  <b-container class="bv-example-row">
    <h1>Rental For every Needs</h1>
    <p class="subheading">We've got the best service.</p>

    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates sed tenetur quas! Laudantium odio consectetur, quia dolore veritatis quae quam nobis aperiam saepe, modi quibusdam facere tenetur omnis earum molestiae.</p>
   
  <Listcompany/>
  </b-container>

 

</div>

</template>

<script>
    import Listcompany from '../components/listcompany'
    export default {
        components:{
            Listcompany
        },
         middleware: 'auth'
    }
</script>

<style>

</style>
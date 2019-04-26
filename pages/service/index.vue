<template>
<div>
  <section class="container">
    <h1>Service Page</h1>
    <p class="subheading">This is service page</p>

    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates sed tenetur quas! Laudantium odio consectetur, quia dolore veritatis quae quam nobis aperiam saepe, modi quibusdam facere tenetur omnis earum molestiae.</p>
    <input type ="text" placeholder="Input Number" v-model="Bid">
    <button @click="onClickPost">Show Number</button>
  </section>
  
  
</div>
</template>

<script>
export default {
    head() {
        return {
            title: 'service Nuxt',
            meta: [
                { name: 'description', content: 'This is my about description here.'},
                { name: 'keywords', content: 'about nuxt, nuxt info'},

            ]
        }
        
    },
    data(){
        return{
            Bid:''
        }
    },
    methods:{
        onClickPost(){
            this.$router.push('/service/'+this.Bid)
        }
    },
    middleware: 'auth'
}
</script>

<style>
</style>
<template>
  <section class="container">
    <h1>About Pages</h1>
    <p class="subheading">This is about page</p>

    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates sed tenetur quas! Laudantium odio consectetur, quia dolore veritatis quae quam nobis aperiam saepe, modi quibusdam facere tenetur omnis earum molestiae.</p>
  </section>
</template>

<script>
export default {
    head() {
        return {
            title: 'About Nuxt',
            meta: [
                { name: 'description', content: 'This is my about description here.'},
                { name: 'keywords', content: 'about nuxt, nuxt info'},
            ]
        }
    },
    middleware: 'auth'
}
</script>

<style>
</style>
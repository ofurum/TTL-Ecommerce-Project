<template>
    
    <b-col sm="4">
      <div class="mb-3">
    <b-card
    :title="name"
    :img-src="img"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      N {{price}}
    </b-card-text>

    <b-button  @click="gotoSingleProductPage(productIndex)" variant="primary">Buy Now</b-button>
  </b-card>
      </div>
    </b-col>
  
</template>
<script>

export default {
    props: [
        'name',
        'img',
        'price',
        'productIndex'

    ],
    methods: {
      gotoSingleProductPage(id) {
      this.$router.push('/Product/' +id)
      }
    }
}
</script>
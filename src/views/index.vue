<template>
  <div>
    <!-- banner -->
    <div class="img">
      <h1 class="text-center text-white">Welcome to TTL Online Store</h1>
    </div>
    <!-- Products -->
   <b-container class="mt-5 mb-5">
     <h3>Products</h3>
     <b-row>
        <ProductItem  v-for="(product,index) in products" :key="index" 
             :name="product.name"
             :img="product.img"
             :price="product.price"
             :productIndex="index"

         />
     </b-row>
     </b-container>
  </div>
</template>

<style  scoped>
/* https://images.unsplash.com/photo-1556740772-1a741367b93e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80
https://picsum.photos/1024/400/?image=41 */
   .img{
     padding-top: 30vh;
     padding-bottom: 30vh;
     background-image: url("https://images.unsplash.com/photo-1556740772-1a741367b93e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80");
     background-size: cover;
     background-repeat: no-repeat;
     overflow: hidden;
   }

</style>
<script>
import ProductItem from '../components/ProductItem.vue'


export default {
    data() {
        return {
          products: [
        {
          name: 'Product one',
          price: 10000,
          img:'https://images.unsplash.com/photo-1499939667766-4afceb292d05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' 
        },
        {
          name: 'Product two',
          price: 10000,
          img:'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' 
        },
        {
          name: 'Product three',
          price: 10000,
          img:'https://images.unsplash.com/photo-1492633397843-92adffad3d1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' 
        },
        {
          name: 'Product four',
          price: 10000,
          img:'https://images.unsplash.com/photo-1465868990320-a6d35abd7e12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=600' 
        },
        {
          name: 'Product five',
          price: 10000,
          img:'https://images.unsplash.com/photo-1519482816300-1490fdf2c2bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' 
        },
         {
          name: 'Product six',
          price: 10000,
          img:'https://images.unsplash.com/photo-1481238613160-f39d2bd78dea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' 
        },
                {
          name: 'Product five',
          price: 10000,
          img:'https://images.unsplash.com/photo-1530006498959-b7884e829a04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' 
        },
        {
          name: 'Product five',
          price: 10000,
          img:'https://images.unsplash.com/photo-1414956182841-f9f6c6f0d7c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' 
        },
        {
          name: 'SmartWatch',
          price: 30000,
          img:'https://images.unsplash.com/photo-1527685216219-c7bee79b0089?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' 
        },
        {
          name: 'SmartWatch Apple',
          price: 10000,
          img:'https://images.unsplash.com/photo-1532435109783-fdb8a2be0baa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' 
        },
        {
          name: 'SmartWatch Apple series ',
          price: 10000,
          img:'https://images.unsplash.com/photo-1532435109783-fdb8a2be0baa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' 
        },
                {
          name: 'Monitor 49"screen',
          price: 10000,
          img:'https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' 
        },
        
          ]
      }
    },
    components: {
         ProductItem,
        
    }
}
</script>



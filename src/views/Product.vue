<template>
    <div>
        <b-container>
            <h1 class="mt-5">Products</h1>
            <b-row>
            <productItem v-for='(product,index) in products' :key='index'
            :name='product.name'
            :price='product.price'
            :img='product.img'
            :productIndex="index"
            />
            </b-row>
            <div class="overflow-auto">
            <b-pagination
             v-model="currentPage"
            :total-rows="productTotal"
             :per-page="productPerPage"
             aria-controls="my-table"
             ></b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>

    <!-- <b-table
      id="my-table"
      :products="products"
      :per-page="productPerPage"
      :current-page="currentPage"
      small
    ></b-table> -->
  </div>
        </b-container>
    </div>
</template>

<script>
import ProductItem from '../components/ProductItem.vue'
export default {
    data() {
        return{
            currentPage: 1,
            productPerPage: 1,
            products: [
            {
            name:'shoe',
            price: '20,000',
            img:'https://images.unsplash.com/photo-1492633397843-92adffad3d1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            },
            {
            name:'shoe',
            price: '20,000',
            img:'https://images.unsplash.com/photo-1492633397843-92adffad3d1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            },
            {
            name:'shoe',
            price: '20,000',
            img:'https://images.unsplash.com/photo-1492633397843-92adffad3d1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            },
            {
            name:'shoe',
            price: '20000',
            img:'https://images.unsplash.com/photo-1492633397843-92adffad3d1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            },
            {
            name:'shoe',
            price: '20000',
            img:'https://images.unsplash.com/photo-1492633397843-92adffad3d1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            },
            {
            name:'shoe',
            price: '20000',
            img:'https://images.unsplash.com/photo-1492633397843-92adffad3d1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            },
            {
            name:'shoe',
            price: '20000',
            img:'https://images.unsplash.com/photo-1492633397843-92adffad3d1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            },
            {
            name:'shoe',
            price: '20000',
            img:'https://images.unsplash.com/photo-1492633397843-92adffad3d1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            },
            {
            name:'shoe',
            price: '20000',
            img:'https://images.unsplash.com/photo-1492633397843-92adffad3d1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            },

            ]
       
       }

    },
    // computed: {
    //         productTotal() {
    //             return this.products.length
    //         }
    // },
    components: {
        ProductItem
    }
}
</script>
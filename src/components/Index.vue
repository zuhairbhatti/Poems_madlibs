<template>
    <div>
        <h1>Poems</h1>

        <table class="table table-hover">
            <thead>
            <tr>
                <td>Poems</td>
                <td>Time Created</td>
                <td>Actions</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="item in items" :key="item._id">
                    
                    <td><h2>{{item.title}} </h2>
                        <br>
                        The {{ item.Adj1 }} {{ item.Adj2 }} {{ item.Noun1 }} was {{ item.Verb1 }} {{ item.Adv1 }} {{ item.Prep1 }} a {{ item.Noun3 }}
                        <br>
                        How {{ item.Adv2 }} things {{ item.Verb2 }} {{ item.Prep2 }} the {{ item.Adj3 }} {{ item.Noun2 }}
                        <br>
                        All we can do is {{ item.Verb3 }} {{ item.Prep3 }} {{ item.Adv3 }} 
                        <br>
                        Dreaming of days of the past
                    </td>                    
                    <td>{{ item.timestamp }}</td>
                    <td><router-link :to="{name: 'Edit', params: { id: item._id }}" class="btn btn-primary">Edit</router-link></td>
                    <td><button class="btn btn-danger"  v-on:click="deleteItem(item._id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                items: []
            }
        },

        created: function()
        {
            this.fetchItems();
        },

        methods: {
            fetchItems()
            {
              let uri = 'http://localhost:4000/items';
              this.axios.get(uri).then((response) => {
                  this.items = response.data;
              });
            },
            deleteItem(id)
            {
              let uri = 'http://localhost:4000/items/delete/'+id;
              this.items.splice(id, 1);
              this.axios.get(uri);
            }
            
        }
    }
</script>

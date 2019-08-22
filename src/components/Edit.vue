<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Edit Item</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="updateItem">
                    <div class="form-group">
                        <label>Noun 1</label>
                        <input type="text" class="form-control" v-model = "item.Noun1"/>
                    </div>
                    <div class="form-group">
                        <label>Noun 2</label>
                        <input type="text" class="form-control" v-model = "item.Noun2"/>
                    </div>
                    <div class="form-group">
                        <label>Noun 3</label>
                        <input type="text" class="form-control" v-model = "item.Noun3"/>
                    </div>
                    <div class="form-group">
                        <label>Adj 1</label>
                        <input type="text" class="form-control" v-model = "item.Adj1"/>
                    </div>
                    <div class="form-group">
                        <label>Adj 2</label>
                        <input type="text" class="form-control" v-model = "item.Adj2"/>
                    </div>
                    <div class="form-group">
                        <label>Adj 3</label>
                        <input type="text" class="form-control" v-model = "item.Adj3"/>
                    </div>
                    <div class="form-group">
                        <label>Adv 1</label>
                        <input type="text" class="form-control" v-model = "item.Adv1"/>
                    </div>
                    <div class="form-group">
                        <label>Adv 2</label>
                        <input type="text" class="form-control" v-model = "item.Adv2"/>
                    </div>
                    <div class="form-group">
                        <label>Adv 3</label>
                        <input type="text" class="form-control" v-model = "item.Adv3"/>
                    </div>
                    <div class="form-group">
                        <label>Prep 1</label>
                        <input type="text" class="form-control" v-model = "item.Prep1"/>
                    </div>
                    <div class="form-group">
                        <label>Prep 2</label>
                        <input type="text" class="form-control" v-model = "item.Prep2"/>
                    </div>
                    <div class="form-group">
                        <label>Prep 3</label>
                        <input type="text" class="form-control" v-model = "item.Prep3"/>
                    </div>
                    <div class="form-group">
                        <label>Verb 1</label>
                        <input type="text" class="form-control" v-model = "item.Verb1"/>
                    </div>
                    <div class="form-group">
                        <label>Verb 2</label>
                        <input type="text" class="form-control" v-model = "item.Verb2"/>
                    </div>
                    <div class="form-group">
                        <label>Verb 3</label>
                        <input type="text" class="form-control" v-model = "item.Verb3"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Update Item"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default{
        data(){
            return{
                item:{}
            }
        },

        created: function(){
            this.getItem();
        },

        methods: {
            getItem()
            {
              let uri = 'http://localhost:4000/items/edit/' + this.$route.params.id;
                this.axios.get(uri).then((response) => {
                    this.item = response.data;
                });
            },

            updateItem()
            {
              let uri = 'http://localhost:4000/items/update/' + this.$route.params.id;
                this.axios.post(uri, this.item).then((response) => {
                  this.$router.push({name: 'Index'});
                });
            }
        }
    }
</script>

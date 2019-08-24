<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Edit Poem</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="updateItem">
                    <label>Noun 1</label>
                    <div class="form-group">
                        <input type="text" class="form-control" pattern="[a-zA-Z]{1,}" v-model = "item.Noun1"/>
                    </div>
                    <label>Noun 2</label>
                    <div class="form-group">
                        <input type="text" class="form-control" pattern="[a-zA-Z]{1,}" v-model = "item.Noun2"/>
                    </div>
                    <label>Noun 3</label>
                    <div class="form-group">
                        <input type="text" class="form-control" pattern="[a-zA-Z]{1,}" v-model = "item.Noun3"/>
                    </div>
                    <label>Adjective 1</label>
                    <div class="form-group">
                        <input type="text" class="form-control" pattern="[a-zA-Z]{1,}" v-model = "item.Adj1"/>
                    </div>
                    <label>Adjective 2</label>
                    <div class="form-group">
                        <input type="text" class="form-control" pattern="[a-zA-Z]{1,}" v-model = "item.Adj2"/>
                    </div>
                    <label>Adjective 3</label>
                    <div class="form-group">
                        <input type="text" class="form-control" pattern="[a-zA-Z]{1,}" v-model = "item.Adj3"/>
                    </div>
                    <label>Adverb 1</label>
                    <div class="form-group">
                        <input type="text" class="form-control" pattern="[a-zA-Z]{1,}" v-model = "item.Adv1"/>
                    </div>
                    <label>Adverb 2</label>
                    <div class="form-group">
                        <input type="text" class="form-control" pattern="[a-zA-Z]{1,}" v-model = "item.Adv2"/>
                    </div>
                    <label>Adverb 3</label>
                    <div class="form-group">
                        <input type="text" class="form-control" pattern="[a-zA-Z]{1,}" v-model = "item.Adv3"/>
                    </div>
                    <label>Preposition 1</label>
                    <div class="form-group">
                        <input type="text" class="form-control" pattern="[a-zA-Z]{1,}" v-model = "item.Prep1"/>
                    </div>
                    <label>Preposition 2</label>
                    <div class="form-group">
                        <input type="text" class="form-control" pattern="[a-zA-Z]{1,}" v-model = "item.Prep2"/>
                    </div>
                    <label>Preposition 3</label>
                    <div class="form-group">
                        <input type="text" class="form-control" pattern="[a-zA-Z]{1,}" v-model = "item.Prep3"/>
                    </div>
                    <label>Verb 1</label>
                    <div class="form-group">
                        <input type="text" class="form-control" pattern="[a-zA-Z]{1,}" v-model = "item.Verb1"/>
                    </div>
                    <label>Verb 2</label>
                    <div class="form-group">
                        <input type="text" class="form-control" pattern="[a-zA-Z]{1,}" v-model = "item.Verb2"/>
                    </div>
                    <label>Verb 3</label>
                    <div class="form-group">
   
                        <input type="text" class="form-control" pattern="[a-zA-Z]{1,}" v-model = "item.Verb3"/>
                    </div>
                    <div>
                        <input type="submit" class="btn btn-primary" value="Add Poem"/>
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
<style scoped>
    h2{
        font-size: 30px;
        font-weight: bold;

    }
    .form-group{
        background-color: rgb(255, 255, 196);
        box-shadow: 10px 10px 10px 5px grey;
        width:100%;
  
    }
    .card-body{
        background-color: rgb(255, 255, 196);
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        opacity: 10%;
        align-self: center;
      padding-left: 0%;
      padding-right: 0%;

    }
    h3{
        font-weight: bold;
        font-size: 40px;
        text-shadow: 2px 5px 4px grey;
    }
    .card{
        background-color: rgb(255, 255, 196);
    }
    body{
        width: 100vh;
    }
    #button{
        align-items: center;
    }
    label{
        font-weight: bold;
        font-size: 20px;
    }
</style>
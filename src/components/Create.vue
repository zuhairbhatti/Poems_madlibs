<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Add Poem</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addItem">
                    <div class="form-group">
                        <label>Name Your MadLibs Poem</label>
                        <input type="text" class="form-control" pattern="[a-zA-Z]{1,}" v-model = "item.title"/>
                    </div>
                    <div class="form-group">
                        <label>Noun 1</label>
                        <input type="text" class="form-control" pattern="[a-zA-Z]{1,}" v-model = "item.Noun1"/>
                    </div>
                    <div class="form-group">
                        <label>Noun 2</label>
                        <input type="text" class="form-control" pattern="[a-zA-Z]{1,}" v-model = "item.Noun2"/>
                    </div>
                    <div class="form-group">
                        <label>Noun 3</label>
                        <input type="text" class="form-control" pattern="[a-zA-Z]{1,}" v-model = "item.Noun3"/>
                    </div>
                    <div class="form-group">
                        <label>Adjective 1</label>
                        <input type="text" class="form-control" pattern="[a-zA-Z]{1,}" v-model = "item.Adj1"/>
                    </div>
                    <div class="form-group">
                        <label>Adjective 2</label>
                        <input type="text" class="form-control" pattern="[a-zA-Z]{1,}" v-model = "item.Adj2"/>
                    </div>
                    <div class="form-group">
                        <label>Adjective 3</label>
                        <input type="text" class="form-control" pattern="[a-zA-Z]{1,}" v-model = "item.Adj3"/>
                    </div>
                    <div class="form-group">
                        <label>Adverb 1</label>
                        <input type="text" class="form-control" pattern="[a-zA-Z]{1,}" v-model = "item.Adv1"/>
                    </div>
                    <div class="form-group">
                        <label>Adverb 2</label>
                        <input type="text" class="form-control" pattern="[a-zA-Z]{1,}" v-model = "item.Adv2"/>
                    </div>
                    <div class="form-group">
                        <label>Adverb 3</label>
                        <input type="text" class="form-control" pattern="[a-zA-Z]{1,}" v-model = "item.Adv3"/>
                    </div>
                    <div class="form-group">
                        <label>Preposition 1</label>
                        <input type="text" class="form-control" pattern="[a-zA-Z]{1,}" v-model = "item.Prep1"/>
                    </div>
                    <div class="form-group">
                        <label>Preposition 2</label>
                        <input type="text" class="form-control" pattern="[a-zA-Z]{1,}" v-model = "item.Prep2"/>
                    </div>
                    <div class="form-group">
                        <label>Preposition 3</label>
                        <input type="text" class="form-control" pattern="[a-zA-Z]{1,}" v-model = "item.Prep3"/>
                    </div>
                    <div class="form-group">
                        <label>Verb 1</label>
                        <input type="text" class="form-control" pattern="[a-zA-Z]{1,}" v-model = "item.Verb1"/>
                    </div>
                    <div class="form-group">
                        <label>Verb 2</label>
                        <input type="text" class="form-control" pattern="[a-zA-Z]{1,}" v-model = "item.Verb2"/>
                    </div>
                    <div class="form-group">
                        <label>Verb 3</label>
                        <input type="text" class="form-control" pattern="[a-zA-Z]{1,}" v-model = "item.Verb3"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Add Poem"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
var moment = require('moment');
export default {
  components: {
      name: 'AddItem'
  },
  data() {
      return {
          item: {}
      }
  },
  methods: {
      addItem() {
           let uri = 'http://localhost:4000/items/add';
            this.axios.post(uri, this.item).then(response => console.log(response.data));
        }
    }
}
</script>

<style scoped>
    .form-group{
        background-color: white;
        /* width: 40%; */
  
    }
    .card-body{
        background-color: white;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        opacity: 10%;
        align-self: center;
    }
    h3{
        font-weight: bold;
    }

</style>
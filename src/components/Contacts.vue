<template>
  <div class="tab">
    <v-container>
      <v-text-field label=" Search" v-model="toBeSearched"></v-text-field>
     <v-menu>
        <template  v-slot:activator="{ on, attrs }" >
          <v-btn depressed elevation="10" outlined rounded x-large  v-bind="attrs"
            v-on="on">
        {{ searchIn }}
      </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in searchType" :key="index">
           <v-btn
            depressed
            elevation="10"
            outlined
            rounded
            x-large
            v-bind="attrs"
            v-on="on"
            v-model="sortType"
            @click="changeSearchType(item,searchIn)"
          >
            {{ item.title }}
          </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
      
       <v-btn depressed elevation="10" outlined rounded x-large @click="searchFn(searchIn,toBeSearched)">
        Search
      </v-btn>
    </v-container>
    <v-container>
      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            depressed
            elevation="10"
            outlined
            rounded
            x-large
            v-bind="attrs"
            v-on="on"
            v-model="sortType"
          >
            {{ sortBy }}
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in sortType" :key="index">
           <v-btn
            depressed
            elevation="10"
            outlined
            rounded
            x-large
            v-bind="attrs"
            v-on="on"
            v-model="sortType"
            @click="changeSortType(item)"
          >
            {{ item.title }}
          </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-container>
    <v-container>
      <v-text-field label="E-Mail" v-model="contactEmail"></v-text-field>
      <v-btn depressed elevation="10" outlined rounded x-large @click="addContact(contactEmail)">
        Add Email
      </v-btn>
    </v-container>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="Contacts"
      :single-select="singleSelect"
      item-key="name"
      show-select
      class="elevation-1"
    >
      <template v-slot:top>
        <v-switch
          v-model="singleSelect"
          label="Single select"
          class="pa-3"
        ></v-switch>
      </template>
    </v-data-table>
    <v-btn depressed elevation="10" outlined rounded x-large>
      Delete Selected
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "Contacts",
 
  components: {},

  data ()  {
    return{
 searchIn:"search In",  
 toBeSearched:"",  
    singleSelect: false,
      selected: [],
    contactEmail:"",
    AddEmail: false,
    sortBy:" Sort By",
    headers: [
      { text: "FirstName",
      align: "start",
        sortable: false,
      value: "FirstName" },
      { text: "MainEmailAddress", value: "MainEmailAddress" },
    ],
    sortType:[
      {title:"firstName" ,value:0},
       {title:"Email" ,value:1},
    ],
    searchType:[
      {title:"firstName" ,value:"firstName"},
       {title:"Email" ,value:"Email"},
    ],
    Contacts: [
      {
        FirstName: "Frozen Yogurt",
        MainEmailAddress: "youssef10@zbi.com",
      },

      {
        FirstName: "Frozen Yogurt",
        MainEmailAddress: "youssef10@zbi.com",
      }, {
        FirstName: "Frozen Yogurt",
        MainEmailAddress: "youssef10@zbi.com",
      }, {
        FirstName: "Frozen Yogurt",
        MainEmailAddress: "youssef10@zbi.com",
      },
    ],
    }
  },
  methods: {
  changeSortType(item){
      this.sortBy=item.title;
      console.log(this.sortBy);
      var sortValue=item.value;
      console.log(sortValue);
    },
    changeSearchType(item){
      this.searchIn=item.title;
      console.log(this.searchIn);
      var searchValue=item.value;
      console.log(searchValue);
    },
    addContact(contactEmail){
      var enteredEmail=contactEmail;
      console.log(enteredEmail);
      //call add contact fetch
    },
    searchFn(searchIn,toBeSearched){
      var searchType=searchIn;
      var searchString =toBeSearched;
      console.log(searchType);
       console.log(searchString);
    }
}
 
  }
 




</script>
<style scoped>
.table {
  margin-left: 400px;
  padding-left: 40px;
}
.tab {
  margin-left: 200px;
}
</style>

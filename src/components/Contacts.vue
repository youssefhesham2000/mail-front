<template>
  <div class="tab">
    <v-container>
      <v-text-field label=" Search" v-model="toBeSearched"></v-text-field>
      <v-btn depressed elevation="10" outlined rounded x-large @click="search()">
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
          v-model="sortBy"
          >
            {{sortBy}}
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in sortType" :key="index">
            <v-list-item-title><v-btn
            depressed
            elevation="10"
            outlined
            rounded
            x-large
            v-bind="attrs"
            v-on="on"
          v-model="sortBy"
          @click="Sort()"
          >
            {{ item.title }}
          </v-btn></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-container>
    <v-container>
      <v-text-field label="E-Mail"></v-text-field>
      <v-btn depressed elevation="10" outlined rounded x-large>
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

  data: () => ({
    AddEmail: false,
    singleSelect: false,
    selected: [],
    toBeSearched : "",
    sortBy: "sort by",
    headers: [
      { text: "Name", value: "Name" },
      { text: "MainEmailAddress", value: "MainEmailAddress" },
    ],
    sortType:[
      {title:"Name",value:0},
      {title:"Email",value:1},
    ],
    Contacts: [
      {
        Name: "Frozen Yogurt",
        MainEmailAddress: "youssef@zbi.com",
      },
      {
        Name: "Frozen a7a",
        MainEmailAddress: "youssef@zbi.com",
      },
    ],
  }),
  methods:{
    search(){
      //call search fetch and sent toBeSearched
      console.log(this.toBeSearched);
    },
    sort(){
      this.sortBy=title;
      //call search fetch and sent toBeSearched
      console.log(this.sortBy);
    }

  }
};
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

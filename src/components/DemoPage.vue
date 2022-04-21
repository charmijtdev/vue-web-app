<template>
  <div class="container">
    <div class="buttons">
      <b id="languages">
        <br />
        <button id="C" @click="filter('C')"><b>C</b></button>
        <button id="C++" @click="filter('C++')"><b>C++</b></button>
        <button id="Java" @click="filter('Java')"><b>Java</b></button>
        <button id="Python" @click="filter('Python')"><b>Python</b></button>
        <button id="HTML" @click="filter('HTML')"><b>HTML</b></button>
        <button id="CSS" @click="filter('CSS')"><b>CSS</b></button>
        <button id="Javascript" @click="filter('Javascript')">
          <b>Javascript</b>
        </button>
        <button id="PHP" @click="filter('PHP')"><b>PHP</b></button>
        <button id="Vue JS" @click="filter('Vue JS')"><b>Vue JS</b></button>
        <button id="React JS" @click="filter('React JS')">
          <b>React JS</b>
        </button>
        <button id="Angular" @click="filter('Angular')"><b>Angular</b></button>
      </b>
    </div>
    <div class="Records">
      <section
        v-for="record in FilteredData"
        id="data1"
        :key="record.fields.id"
        class="data1"
      >
        <article class="data11">
          <a :href="record.fields.Link" target="_blank">
            <div class="img">
              <img :alt="record.n" :src="record.fields.Attachments[0].url" />
            </div>
            <div class="channelName">
              <p>
                <b> {{ record.fields.Name }} </b>
              </p>
            </div>
          </a>
          <hr />
          <p>{{ record.fields.Discription }}</p>
        </article>
      </section>
    </div>
  </div>
</template>

<script>
  import Axios from '../static/Axios';

  export default {
    name: 'DemoPage',
    props: ['src', 'n'],
    data() {
      fetch()
      return {
        allRecords: [],
        FilteredData: [],
        hilightButton: '',
        track: 0,
      }
    },
    mounted() {
      this.fetch()
    },
    methods: {
      async fetch() {
        const data = await Axios.getProjects();
        this.allRecords = data.data.records
        this.FilteredData = this.allRecords
      },
      filter(value) {
        if (this.hilightButton === value) {
          value = '';
          this.hilightButton = value
        } else if (this.hilightButton === '') {
          this.track = this.track + 1
          document.getElementById(value).style.backgroundColor = 'skyblue'
          this.hilightButton = value
        } else {
          document.getElementById(value).style.backgroundColor = 'skyblue'
          this.hilightButton = value
        }
        if (value !== '') {
          const data = []
          for (let i = 0; i < this.allRecords.length; i++) {
            let c = false
            const languages = this.allRecords[i].fields.Language
            for (let j = 0; j < languages.length; j++) {
              if (value === languages[j]) {
                c = true
                break
              }
            }
            if (c) {
              data.push(this.allRecords[i])
            }
          }
          this.FilteredData = data
        } else {
          this.FilteredData = this.allRecords
        }
      },
    },
  }
</script>

<style scoped>
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    color: gray;
  }
  .container {
    width: 100%;
  }
  .channelName {
    font-size: 21px;
    height: 30px;
    text-align: center;
    color: black;
  }
  .titleForLanguages {
    color: yellow;
    font-size: 30px;
    text-decoration: underline;
  }
  #link:active {
    color: black;
    text-decoration: none;
  }
  .img {
    padding: 10px;
    transition: transform 1s;
  }
  .img:hover {
    transform: scale(1.05);
  }
  h1 {
    color: yellow;
  }
  .Records {
    display: flex;
    flex-flow: row wrap;
    size: 300px;
    justify-content: center;
    padding-bottom: 1rem;
  }
  .data1 {
    padding: 10px;
    text-align: center;
  }
  .data11 {
    box-sizing: border-box;
    padding: 8px;
    border: 1px solid #aaa;
    border-radius: 15px;
    box-shadow: 2px 2px #aaa;
    text-align: center;
    color: black;
  }
</style>

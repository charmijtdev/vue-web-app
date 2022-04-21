<template>
  <div class="records-of-channel">
    <section v-for="a in C" id="data1" :key="a.src" class="data1">
      <article class="data11">
        <div class="img">
          <img :alt="a.n" :src="a.src" />
        </div>
        <hr />
      </article>
    </section>
  </div>
</template>

<script>
    export default {
    name: 'records-of-channel',
    props: {
        allRecords: {},
        records: {},
        filtered: {
        type: String,
        default: null,
        },
    },
    }
</script>

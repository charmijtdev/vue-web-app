<template>
  <div class="AddData">
    <div class="topnav">
    </div>
    <br />
    <br />
    <div class="info">
      <h2>About This Project</h2>
      <br />
      <p>
        Our mission is to create a place where every individual person can find
        <br />
        the Proper channel for self learning.
      </p>
      <br />
      <h2>Request for Adding Your Channel or Update Data for Channel</h2>
      <br />
      <p>
        If you want to add your Channel in directory or update any information
        <br />
        of already added channel Please send us a Message to linkedin
        <br />
     
      </p>
      <br />
      <h2>Attribution for Open Source Illustrations</h2>
      <br />
      <p>All the data are fetched from Airtable API.</p>
      <p>Complete Project is build based on Nuxt JS Framework.</p>
      <br />
      <h2>Team Behind This</h2>
      <br />
      <section class="data1">
        <article class="data11">
        
          <p>Student @ SCET,SURAT</p>
        </article>
      </section>
    </div>
    <TheFooter />
  </div>
</template>

<script>
    export default {}
</script>

<style scoped>
    .AddData {
    background-color: black;
    color: white;
    }
    .info {
    padding-left: 400px;
    }
    .data1 {
    display: flex;
    flex-flow: row wrap;
    padding: 10px;
    text-align: center;
    }
    .data11 {
    box-sizing: border-box;
    background-color: black;
    padding: 8px;
    border: 1px solid #aaa;
    border-radius: 15px;
    box-shadow: 2px 2px #aaa;
    text-align: center;
    color: white;
    height: 250px;
    width: 200px;
    }
    #link {
    color: white;
    text-decoration: none;
    font-size: 21px;
    }
    .img {
    padding: 10px;
    transition: transform 1s;
    }
    .img:hover {
    transform: scale(1.05);
    }
</style>

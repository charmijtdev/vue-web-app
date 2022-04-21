<template>
  <footer class="footer">
    <b>
      <div class="tracking-wide">
        <div class="follow">Follow us on</div>
        <div>
          <a href="https://www.instagram.com/aagam_shah_1410/" target="_blank">
            <img
              src="../assets/instagramLogo.jpg"
              style="width: 22px; height: 22px; border: none; border-radius: none"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/aagam-shah-177968170/"
            target="_blank"
          >
            <img
              src="../assets/linkedInLogo.jpg"
              style="width: 22px; height: 22px; border: none; border-radius: none"
            />
          </a>
        </div>
      </div>
    </b>
  </footer>
</template>

<style scoped>
  .footer {
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #333;
    color: white;
    height: 50px;
    font-size: 21px;
  }
  .tracking-wide {
    display: flex;
    justify-content: center;
    padding-top: 12px;
  }
  .follow {
    margin-right: 8px;
  }
  a {
    margin-right: 5px;
  }
</style>

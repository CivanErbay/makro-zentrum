<template>
  <div class="wrapper">
    <div class="background-image"></div>
    <div class="content">
      <h1 class="headline">Makrobiotik Zentrum Sonnenblume</h1>
      <h2 class="subheadline">Herzlich Willkommen</h2>
    </div>
    <!--     <div class="news"><p>Aktuelles</p></div> -->
    <div class="contact">
      <p>Telefonnummern: 015734680075 / 015750716348</p>
      <p>
        Öffnungszeiten: <br />
        Freitag 12:00 - 19:00 <br />
        Samstag 11:00 - 14:00 <br />
        und nach Absprache
      </p>
      <p>Email: makrobiotik-zentrum@gmx.de</p>
    </div>
    <NuxtLink class="impressum_link" to="/impressum"
      >Impressum</NuxtLink
    >
  </div>
</template>

<script>
export default {
  name: 'MakrobiotikZentrum',
};
</script>

<style scoped>
/* Style the container */
.wrapper {
  position: relative;
  height: 100vh;
  overflow: hidden;
  color: white;
  width: 100%;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/sunflower.jpg');
  /* Replace with your image URL */
  background-size: cover;
  background-position: center;
  filter: brightness(30%);
  /* Adjust the brightness as needed */
}

.content {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 95%;
}

.headline {
  font-size: 6em;
  margin-bottom: 10px;
  font-family: 'Roboto', sans-serif;

}

.contact {
  position: absolute;
  bottom: 30px;
  left: 20px;
  color: #ffffff;
  text-decoration: none;
  font-size: 1em;
}

/* Media query for screens 768px and smaller */
@media only screen and (max-width: 768px) {
  .headline {
    font-size: 3em;
  }

  .contact {
    bottom: 45px;
  }
}

/* Media query for screens 1024px and smaller */

.subheadline {
  font-size: 1.8em;
  font-weight: normal;
}

.impressum_link {
  position: absolute;
  bottom: 30px;
  right: 20px;
  color: #ffffff;
  text-decoration: none;
  font-size: 1em;
}
</style>

<template>
  <div class="impressum-container">
    <h1>Impressum</h1>

    <section>
      <h2>bleibholz</h2>
      <p>Nevzat Erbay</p>
      <p>Bergisch Gladbacher Str. 968</p>
      <p>Telefon: 0221 680 2522</p>
      <p>E-Mail: makrobiotik-zentrum@gmx.de</p>
    </section>

    <section>
      <h2>Haftungsausschluss</h2>
      <p>
        Die Informationen auf dieser Website dienen nur allgemeinen
        Informationszwecken. Wir bemühen uns, die Informationen
        aktuell und korrekt zu halten, übernehmen jedoch keine Gewähr
        für die Vollständigkeit, Richtigkeit, Zuverlässigkeit, Eignung
        oder Verfügbarkeit in Bezug auf die Website oder die
        Informationen, Produkte, Dienstleistungen oder damit
        verbundenen Grafiken, die auf der Website für jeden Zweck
        enthalten sind.
      </p>
    </section>

    <section>
      <h2>Kontakt</h2>
      <p>
        Bei Fragen oder Bedenken bezüglich dieses Impressums
        kontaktieren Sie uns bitte unter:
      </p>
      <p>E-Mail: makrobiotik-zentrum@gmx.de</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Impressum',
};
</script>

<style scoped>
/* Responsive layout */
.impressum-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  color: black;
}

section {
  margin-bottom: 20px;
}

@media (min-width: 768px) {
  /* Two-column layout for larger screens */
  section {
    width: 48%;
    display: inline-block;
    vertical-align: top;
  }
}
</style>

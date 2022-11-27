<template>
  <main>
    <NavBar />

    <section class="page">
      <DesignAnimation />
    </section>

    <section class="page">
      <FileDisplay
        title="Christmas Card 2020"
        :zipfile="zipfile"
        :files="files"
      />
    </section>

    <section class="page">more!!!</section>

    <section class="page">end!!!</section>
  </main>
</template>

<style src="~/assets/css/design.css" lang="css" scoped></style>


<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "DesignPage",
  head() {
    return {
      title: "makena's designs <3",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "i'm makena kong - a full stack engineer based in san francisco",
        },
      ],
    };
  },
  data: () => ({
    zipfile: {
      name: "christmas_card_2020.zip",
      url: "https://firebasestorage.googleapis.com/v0/b/portfolios-350309.appspot.com/o/design%2Fchristmas_card_2020%2Fchristmas_card_2020.zip?alt=media&token=fad4e854-70b8-46db-a7cd-71e4bf51e40b",
    },
    files: [
      {
        id: 1,
        name: "card_front.jpg",
        alt: "test alt",
        url: "https://firebasestorage.googleapis.com/v0/b/portfolios-350309.appspot.com/o/design%2Fchristmas_card_2020%2Fcard_front.jpg?alt=media&token=f1389dea-3871-40d4-ba36-3c309c6dc952",
      },
      {
        id: 2,
        name: "card_back.jpg",
        alt: "test alt",
        url: "https://firebasestorage.googleapis.com/v0/b/portfolios-350309.appspot.com/o/design%2Fchristmas_card_2020%2Fcard_back.jpg?alt=media&token=918e62ec-3991-4d63-a5b0-2acf081ca8fe",
      },
    ],
  }),
});
</script>
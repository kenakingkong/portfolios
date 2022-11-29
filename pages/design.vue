<template>
  <main>
    <NavBar />

    <section class="page">
      <DesignAnimation />
    </section>

    <section
      class="page"
      v-for="(fileset, index) in filesets"
      :key="'file-' + index"
    >
      <FileDisplay v-bind="fileset" />
    </section>

    <section class="page">
      <p class="end">
        everything is done in figma <br />and gimp <br />
        one day i'll pay for photoshop & illustrator! <br /><br />
        mak
      </p>
    </section>
  </main>
</template>

<style src="~/assets/css/design.css" lang="css" scoped></style>


<script lang="ts">
import Vue from "vue";
import IDesignFileset from "~/models/designFileset";

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
    filesets: Array as PropType<Array<IDesignFileset>>,
  }),
  created() {
    const getFilesets = () => {
      const dbFilesets = this.$fire.database.ref("designFiles");
      dbFilesets.get().then((snapshot) => {
        this.filesets = snapshot.val();
      });
    };

    getFilesets();
  },
});
</script>
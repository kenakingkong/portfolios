<template>
  <div class="container">
    <div class="left-container">
      <img :src="activeFile.url" :alt="activeFile.alt" class="image" />
    </div>
    <div class="right-container">
      <h2 class="title">{{ title }}</h2>
      <a :href="zipfile.url" :download="zipfile.name">Download Files</a>
      <ul class="file_list">
        <li
          v-for="(file, index) in files"
          :key="'file-' + file.id"
          class="file_item"
        >
          <font-awesome-icon
            :icon="['fas', 'chevron-left']"
            :class="activeFile.id === file.id ? '' : 'hidden'"
          />
          <button @click="setActiveFile(index)" class="file_item">
            <font-awesome-icon :icon="['fas', 'file']" class="fa-1x" />{{
              file.name
            }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  gap: var(--space-4);
  border: 1px solid red;
}

.left-container,
.right-container {
  width: 100%;
}

@media only screen and (min-width: 768px) {
  .left-container,
  .right-container {
    width: 50%;
  }
}

.left-container {
  display: flex;
  align-items: center;
  justify-content: end;
}

.hidden {
  visibility: hidden;
}

.image {
  max-height: 90vh;
  object-fit: contain;
}
.title {
}

.file_list {
  list-style: none;
  padding: 0;

  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.file_item {
  display: flex;
  align-items: center;
}

.file_item,
button {
  gap: var(--space-1);

  border: none;
  background-color: transparent;
  font-size: var(--space-xl);
  cursor: pointer;
}
</style>

<script lang="ts">
import Vue, { PropType } from "vue";

export default Vue.extend({
  name: "FileDisplay",
  props: {
    id: Number,
    title: String,
    zipfile: Object as PropType<{ name: String; url: String }>,
    files: Array as PropType<Array<{ id: Number; name: String; url: String }>>,
  },
  data: () => ({
    activeFile: {},
  }),
  mounted() {
    this.activeFile = this.files[0];
  },
  methods: {
    setActiveFile(index: number) {
      this.activeFile = this.files[index];
    },
  },
});
</script>
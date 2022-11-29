<template>
  <div class="container">
    <div class="container_left">
      <img :src="activeFile.url" :alt="activeFile.alt" class="image" />
    </div>
    <div class="container_right">
      <h2 class="title">{{ title }}</h2>
      <button @click="onDownload(e)" class="download">Download Files</button>
      <ul class="file_list">
        <li
          v-for="(file, index) in files"
          :key="'file-' + file.id"
          class="file_item"
        >
          <font-awesome-icon
            :icon="['fas', 'chevron-left']"
            :class="activeFile.id === file.id ? '' : 'hidden'"
            size="xs"
          />
          <button @click="setActiveFile(index)" class="file_item">
            {{ file.name }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>


<script lang="ts">
import Vue, { PropType } from "vue";
import IDesignFile from "~/models/designFile";

export default Vue.extend({
  name: "FileDisplay",
  props: {
    id: Number,
    title: String,
    zipfile: Object as PropType<{ name: String; url: String }>,
    files: Array as PropType<Array<IDesignFile>>,
    access_code: String,
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
    onDownload() {
      let code = window.prompt(
        "Enter the code to download " + this.zipfile.name
      );
      console.log(this.access_code);
      if (code === null) {
        // do nothing
      } else if (code !== this.access_code) {
        alert("Wrong code!!!!");
      } else {
        const anchor = document.createElement("a");
        anchor.href = this.zipfile.url as string;
        anchor.download = this.zipfile.name as string;
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
      }
    },
  },
});
</script>


<style scoped>
.container {
  width: 100%;
  overflow: hidden;

  display: flex;
  flex-direction: column-reverse;
  align-items: center;
}

.container_left,
.container_right {
  width: 100%;
  padding: 0.25rem;
}

.container_right {
  font-family: "Epilogue";
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.container_left {
  display: flex;
  align-items: center;
  justify-content: end;
}

.image {
  width: 100%;
  max-height: 80vh;
  object-fit: contain;
}

.title {
  font-size: var(--lg);
  font-family: "Epilogue";
}

.file_list {
  list-style: none;
  padding: 0;

  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
}

.file_item {
  font-family: "Epilogue";
  display: flex;
  align-items: center;
}

svg {
  transform: rotate(-90deg);
}

.hidden {
  display: none;
}

.file_item,
button {
  gap: 0.25rem;

  border: none;
  background-color: transparent;
  font-size: var(--space-xl);
  cursor: pointer;
}

button:hover {
  color: magenta;
}

.download {
  width: fit-content;
  color: var(--purple);
  text-decoration: underline;
  padding: 0;
}

/* on larger screens */
@media only screen and (min-width: 992px) {
  .container {
    flex-direction: row;
    flex-wrap: wrap-reverse;
  }

  .container_left,
  .container_right {
    width: 50%;
    padding: var(--space-1) var(--space-2);
  }

  .image {
    max-height: 90vh;
  }

  .file_list {
    flex-direction: column;
  }

  .file_item {
    flex-direction: row;
  }

  svg {
    transform: rotate(0deg);
  }

  .hidden {
    display: block;
    visibility: hidden;
  }
}
</style>
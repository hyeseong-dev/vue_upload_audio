<template>
  <div id="app">
    <div class="container" style="width:1200px">
      <div style="margin: 20px">
        <h3>broadcns.com</h3>
        <h4>Upload File</h4>
      </div>

      <upload-files></upload-files>
    </div>
  </div>
</template>

<script>
import UploadFiles from "./components/UploadFiles"

export default {
  name: "App",
  components: {
    UploadFiles
  }
};
</script>


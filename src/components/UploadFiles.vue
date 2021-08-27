import axios from 'axios';

<template>
  <div>
    <div v-if="currentFile" class="progress">
      <div
        class="progress-bar progress-bar-info progress-bar-striped"
        role="progressbar"
        :aria-valuenow="progress"
        aria-valuemin="0"
        aria-valuemax="100"
        :style="{ width: progress + '%' }"
      >
        {{ progress }}%
      </div>
    </div>

    <label class="btn btn-default">
      <input type="file" ref="file" @change="selectFile" />
    </label>

    <button class="btn btn-success" :disabled="!selectedFiles" @click="upload">
      Upload
    </button>

    <div class="alert alert-light" role="alert">{{ message }}</div>

    <div class="card">
      <div class="card-header">음성 인식 텍스트</div>
      <ul class="list-group list-group-flush"  v-for="(value, index) in texts" :key="index">
        <li class="list-group-item"> {{value[index].startSecond}} -- {{value[index].endSecond}} : {{value[index].text}} </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import UploadService from '../services/UploadFilesService'

export default {
    name: 'upload-files',
    data() {
        return{
            selectedFiles: undefined,
            currentFile: undefined,
            progress: 0,
            message: '',
            url:'',
            fileInfos: [],
            texts:[],

        };
    },
    methods: {
        selectFile() {
            this.selectedFiles = this.$refs.file.files;
        },
        upload() {
            this.progress = 0;
            this.currentFile = this.selectedFiles.item(0);
            UploadService.upload(this.currentFile, event => {
                this.progress = Math.round((100 * event.loaded) / event.total);
            })
            .then(response => {
                this.message = response.data.message;
                this.url = response.data.url;
                this.texts = [];
                console.log(response.data.text)
                this.texts.push(response.data.text)
                console.log(this.texts)

            

            })
            .catch(() => {
                this.progress = 0;
                this.message = "";
                this.currentFile = undefined;
            });
        this.selectedFiles = undefined;
        },
        getText() {
            UploadService.getText()
            .then(response => {
                const { data } = response.data.text
                console.log(data)
                this.texts = data
            })
            .catch((error) => {
                alert(error)

            })
        }
        }
};

</script>

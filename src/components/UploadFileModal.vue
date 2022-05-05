<template>
  <cv-modal :visible="visible" @modal-hidden="modalHidden">
    <template slot="title">Upload new file</template>
    <template slot="content">
        <cv-file-uploader
        helperText="drag and drop the file to upload ..."
        drop-target-label="dropTargetLabel"
        :clear-on-reselect="true"
        :initial-state-uploading="false"
        :removable="false"
        :multiple="false"
        remove-aria-label="removeAriaLabel"
        ref="fileUploader"
        @change="onChange" v-model="storyFiles" :files="storyFiles"
        >
        </cv-file-uploader>
    </template>
    <template slot="primary-button">Upload</template>
  </cv-modal>    
</template>

<script>
import store from '../store';

export default {
  name: 'UploadFileModal',
  components: {},
  data() {
    return {
      visible: false,
      storyFiles: []
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    modalHidden() {
      this.visible = false;
    },
    onChange(changedFiles) {
    //   this.actionChange(changedFiles);
      this.storyFiles = changedFiles;
    },
    onHandler(val) {
    //   console.log(val);
    },
  }
};
</script>
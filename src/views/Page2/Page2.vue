<template>
  <div>
    SEC PAGE
    <cv-file-uploader
      :kind="kind"
      :label="label"
      :helperText="helperText"
      :drop-target-label="dropTargetLabel"
      :accept="accept"
      :clear-on-reselect="clearOnReselect"
      :initial-state-uploading="initialStateUploading"
      :multiple="multiple"
      :removable="removable"
      :remove-aria-label="removeAriaLabel"
      ref="fileUploader"
    >
    </cv-file-uploader>
  </div>
</template>

<script>
export default {
  name: 'Page2',
  components: {},
  data() {
    return {
      kind: '',
      label: 'Choose files to upload',
      helperText: 'Select the files you want to upload',
      dropTargetLabel: '',
      accept: '.jpg,.png',
      clearOnReselect: false,
      initialStateUploading: false,
      multiple: false,
      removable: false,
      removeAriaLabel: 'Custom remove aria label'
    };
  },
  methods: {
    onInput: function(data) {
      console.log(data);
    },
    onOverflowMenuClick: function(data) {
      console.log(data);
    }
  }
};
</script>

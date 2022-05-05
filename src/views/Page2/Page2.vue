<template>
  <div>
    SEC PAGE
    
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

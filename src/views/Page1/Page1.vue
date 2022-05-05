<template>
  <div>
    <cv-data-table
      :columns="columns"
      :data="filteredData"
      title="Files"
      ref="table"
      :pagination="pagination"
      @pagination="actionOnPagination"
      @search="onFilter"
    >
      <template slot="headings">
        <cv-data-table-heading>File name</cv-data-table-heading>
      </template>

      <template slot="actions">
        <cv-button small @click="actionUploadNew">Upload new</cv-button>
      </template>
      <template slot="batch-actions">
        <cv-button @click="onDeleteAction">
          <TrashCan16 />
        </cv-button>
        <cv-button @click="onDownloadAction">
          <Download20 />
        </cv-button>
      </template>

      <template slot="data">
        <cv-data-table-row v-for="(row, rowIndex) in filteredData" :key="`${rowIndex}`" :value="`${rowIndex}`">
          <cv-data-table-cell v-for="(cell, cellIndex) in row" :key="`${cellIndex}`" :value="`${cellIndex}`" v-html="cell"></cv-data-table-cell>
        </cv-data-table-row>
      </template>
    </cv-data-table>
    <upload-file-modal ref="uploadFileModalDialog"></upload-file-modal>
  </div>
</template>

<script>
import { Download20, TrashCan16 } from '@carbon/icons-vue';
import store from '../../store';
import UploadFileModal from '../../components/UploadFileModal.vue';

export default {
  name: 'Page1',
  components: {
    Download20, TrashCan16, UploadFileModal
  },
  mounted() {
  },
  data() {
    return {  
      pagination: { numberOfItems: 103, itemsPerPage: this.pageSize },
      pageSize: 10,
      columns: [
        'File name'
      ],
      data: [
        ['Some_important_document.pdf'],
        ['Some_other top secret.pdf'],
        ['an image.ipg']
      ],
      filterValue: '',
      rowSelects: [],
      sortBy: null,
      sampleOverflowMenu: ['Start', 'Stop', 'Delete 3'],
      start: 1
    };
  },
  computed: {
    page() {
      return Math.floor((this.start - 1) / this.pageSize);
    },
    numberOfItems() {
      return this.filteredData.length;
    },
    filteredData() {
      let result;
      if (this.filterValue) {
        const regex = new RegExp(this.filterValue, 'i');
        result = this.data.filter(item => {
          return item.join('|').search(regex) >= 0;
        });
      } else {
        result = this.data;
      }

      return result.slice(this.start-1, this.start + this.pageSize);
    }
  },
  methods: {
    onFilter(val) {
      this.filterValue = val;
    },
    batchAction1: () => console.log('batch action 1'),
    onDeleteAction() {
      this.batchAction1(`selected items: [${this.$refs.table.selectedRows}]`);
      this.rowSelects = [];
    },
    batchAction2: () => console.log('batch action 2'),
    onDownloadAction() {
      this.batchAction2(`selected items: [${this.$refs.table.selectedRows}]`);
      this.rowSelects = [];
    },
    batchAction3: () => console.log('batch action 3'),
    onBatchAction3() {
      this.batchAction3(`selected items: [${this.$refs.table.selectedRows}]`);
      this.$refs.table.deselect();
    },
    action1: () => console.log('action 1'),
    action2: () => console.log('action 2'),
    action3: () => console.log('action 3'),
    actionUploadNew() {
      this.$refs.uploadFileModalDialog.showModal();
    },
    actionOnPagination(val) {
      console.log(val);
      this.pageSize = val.length;
      this.start = val.start;
    },
    onOverflowMenuClick: () => console.log('overflow menu click'),
    actionRowSelectChange: () => console.log('row selected')
  }
};
</script>

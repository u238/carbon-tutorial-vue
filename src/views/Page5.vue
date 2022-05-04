<template>
  <div>
    <cv-data-table
  ref="table"
  :columns="columns"
  :data="data"
  >
<template slot="headings">
  <cv-data-table-heading>a</cv-data-table-heading>
  <cv-data-table-heading>b</cv-data-table-heading>
  <cv-data-table-heading>c​</cv-data-table-heading>
  <cv-data-table-heading>d</cv-data-table-heading>
  <cv-data-table-heading>e</cv-data-table-heading>
  <cv-data-table-heading>f</cv-data-table-heading>
</template>




<template slot="data">
     <cv-data-table-row v-for="(row, rowIndex) in data" :key="`${rowIndex}`" :value="`${rowIndex}`">
        <cv-data-table-cell v-for="(cell, cellIndex) in row" :key="`${cellIndex}`" :value="`${cellIndex}`" v-html="cell"></cv-data-table-cell>
        <template v-if="rowIndex % 2 === 0" slot="expandedContent">A variety of content types can live here. Be sure to follow Carbon design guidelines for spacing and alignment.</template>
     </cv-data-table-row>
     </template> 

</cv-data-table>
  </div>
</template>

<script>

export default {
  name: 'Page5',
  components: {
  },
  data() {
    return {
      pagination: { numberOfItems: 103 },
      pageSize: 10,
      columns: [
        "Name",
        "Protocol",
        "Port",
        "Rule",
        "Attached Groups",
        "Status"
      ],
      data: [
        [
          "Load Balancer 11",
          "HTTP",
          "80",
          "Round Robin",
          "Maureen’s VM Groups",
          "Active"
        ],
        [
          "Load Balancer 4",
          "HTTP",
          "81",
          "Round Robin",
          "Maureen’s VM Groups",
          "Active"
        ],
        [
          "Load Balancer 2",
          "HTTP",
          "82",
          "Round Robin",
          "Maureen’s VM Groups",
          "Active"
        ],
        [
          "Load Balancer 3",
          "HTTP",
          "8080",
          "Round Robin",
          "Maureen’s VM Groups",
          "Active"
        ],
        [
          "Load Balancer 5",
          "HTTP",
          "8001",
          "Round Robin",
          "Maureen’s VM Groups",
          "Active"
        ]
      ],
      filterValue: '',
      rowSelects: [],
      sortBy: null,
      sampleOverflowMenu: ['Start', 'Stop', 'Delete 3'],
      start: 1, 
      sortable: true,
      title: 'This is a table',
    };
  },
  mounted() {
    //
  },
  computed: {
    page() {
      return Math.floor((this.start - 1) / this.pageSize);
    }
  }, 
  methods: {
    rowClick(ev) {
      console.log('row-click');
      console.dir(ev);
    },
    onFilter(val) {
      this.filterValue = val;
    },
    onSort(sortBy) {
      if (sortBy) {
        this.data.sort((a, b) => {
          const itemA = a[sortBy.index];
          const itemB = b[sortBy.index];

          if (sortBy.order === 'descending') {
            if (sortBy.index === 2) {
              // sort as number
              return parseFloat(itemA) - parseFloat(itemB);
            } else {
              return itemB.localeCompare(itemA);
            }
          }
          if (sortBy.order === 'ascending') {
            if (sortBy.index === 2) {
              // sort as number
              return parseFloat(itemB) - parseFloat(itemA);
            } else {
              return itemA.localeCompare(itemB);
            }
          }
          return 0;
        });
      }
    },
    batchAction1: () => console.log('batch action 1'),
    onBatchAction1() {
      this.batchAction1(`selected items: [${this.$refs.table.selectedRows}]`);
      this.rowSelects = [];
    },
    batchAction2: () => console.log('batch action 2'),
    onBatchAction2() {
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
    actionNew: () => console.log('add new'),
    actionOnPagination(val) {
      console.log(val);
      this.pageSize = val.length; 
      this.start = val.start;
    },
    onOverflowMenuClick: () => console.log('overflow menu click'),
    actionRowSelectChange: function(ev) {
      // forces single select
      this.rowSelects.shift();
      this.rowSelects.push(ev.value);
      this.title = `This is a table: ev.value: ${ev.value} ---  $refs.table: ${this.$refs.table.selectedRows}`;
    }
  }
};
</script>

<template>
<div>
<cv-data-table
  :columns="columns" ref="table" :pagination="pagination"
  @pagination="actionOnPagination" zebra
               sortable   @sort="onSort"
   >
    <template slot="data">
    <cv-data-table-row v-for="(row, rowIndex) in filteredData" :key="`${rowIndex}`" :value="`${rowIndex}`">
       <cv-data-table-cell v-for="(cell, cellIndex) in row" :key="`${cellIndex}`" :value="`${cellIndex}`" v-html="cell"></cv-data-table-cell>
       <template v-if="rowIndex % 2 === 0" slot="expandedContent">A variety of content types can live here. Be sure to follow Carbon design guidelines for spacing and alignment.</template>
    </cv-data-table-row>
    </template>
  </cv-data-table>
</div>
</template>

<script>
export default {
  name: 'Page4',
  components: {},
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
    };
  },
  mounted() {
    let more = [];
    for (let i = 0; i < 100; i++) {
      more.push([
        this.ipsum(30),
        this.ipsum(5),
        this.numIpsum(false),
        this.ipsum(20),
        this.ipsum(20),
        this.numIpsum()
      ]);
    }
    this.data.push(...more);
  },
  computed: {
    page() {
      return Math.floor((this.start - 1) / this.pageSize);
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

      return result.slice(this.start, this.start + this.pageSize);
    },
  }, 
  methods: {
    ipsum(max) {
      const valyrian = 
            'Nuhor lir gurenna. Valar morghulis. Avy jorraelan. Zyhys perzys stepagon Aeksio Ono jorepi, se morghultas lys qelitsos sikagon. Skoriot nuhyz zaldrizesse ilzi? Daoruni gimi, Ionos Sonaro. Nuhor lir gurenna. Bantis zobrie issa se ossyngnoti ledys. Zyhys perzys stepagon Aeksio Ono jorepi, se morghultas lys qelitsos sikagon. Tubi daor.';
      const start = Math.ceil(Math.random() * (valyrian.length));
      const length = Math.min(Math.ceil(Math.random() * (valyrian.length)), max);
      return valyrian.substr(start, length);
    },
    numIpsum(min = 0, max = 100, float = false) {
      let val = (Math.random() * (max - min)) + min;
      if (float) {
        return val;
      } else {
        return Math.ceil(val);
      }
    },
    onFilter(val) {
      this.filterValue = val;
    },
    onSort(sortBy) {
      if (sortBy) {
        this.data.sort((a, b) => {
          let itemA = a[sortBy.index];
          let itemB = b[sortBy.index];

          if (sortBy.order === 'descending') {
            if (sortBy.index === 2) {
              // sort as number
              return parseFloat(itemA) - parseFloat(itemB);
            } else {
              const _a = itemA.toString();
              const _b = itemB.toString();
              return _b.localeCompare(_a);
            }
          }
          if (sortBy.order === 'ascending') {
            if (sortBy.index === 2) {
              // sort as number
              return parseFloat(itemB) - parseFloat(itemA);
            } else {
              const _a = itemA.toString();
              const _b = itemB.toString();
              return _a.localeCompare(_b);
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
    actionRowSelectChange: () => console.log('row selected'),
  },
};
</script>

<template>
  <div class="div">
    <p @click="click">表格演示demo，后续删除</p>
    <el-button @click="summary=!summary"></el-button>
    <hkm-table
      :records="records"
      :head-contextmenu="['freeze_line_left', 'freeze_line_right', 'unfreeze_line']"
      :body-contextmenu="['copy', 'remove_row', 'insert_row_up', 'insert_row_down', 'copy_row_up', 'copy_row_down', 'unfreeze_row', 'freeze_row']"
      :model="{
        name: '',
        date: '',
        province: '',
        city: '',
        address: '',
        postCode: '',
        remark: ''
      }"
      ref="table"
      high-light-current
      @remove-row="handleRemoveRow"
      @insert-row="handleInsertRow"
      @row-click="handleRowClick"
      @cell-click="handleCellClick"
      @select="handleSelect"
      @select-all="handleSelectAll"
      @scroll="scroll"
      :show-summary="summary"
      summary-text="算个整"
      :summary-method="sum"
      :span-method="spanMethod">
      <hkm-table-column
        v-for="(c, i) in columns"
        :key="i"
        :label="c.label"
        :type="c.type"
        :width="c.width"
        :fixed="c.fixed"
        :prop="c.prop"
        :sortable="c.sortable"
        :resizable="c.resizable"
        :editable="c.editable">

        <hkm-table-column
          v-for="(cc, ii) in c.children"
          :key="ii"
          :label="cc.label"
          :type="cc.type"
          :width="cc.width"
          :fixed="cc.fixed"
          :prop="cc.prop"
          :sortable="cc.sortable"
          :resizable="cc.resizable"
          :editable="cc.editable">

          <hkm-table-column
            v-for="(ccc, iii) in cc.children"
            :key="iii"
            :label="ccc.label"
            :type="ccc.type"
            :width="ccc.width"
            :fixed="ccc.fixed"
            :prop="ccc.prop"
            :sortable="ccc.sortable"
            :resizable="ccc.resizable"
            :editable="ccc.editable">
          </hkm-table-column>

        </hkm-table-column>

      </hkm-table-column>
    </hkm-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      summary:false,
      columns: [
        {
          type: 'index',
          label: '序号',
          prop: '',
          width: 80,
          fixed: ''
        },

        {
          type: 'selection',
          width: 80
        },

        {
          label: "日期",
          prop: "date",
          width: "200",
          sortable: true,
          editable: true,
          fixed: "left"
        },

        {
          label: "配送信息",
          children: [
            {
              label: "姓名",
              prop: "name",
              width: "100",
            },

            {
              label: '地址',
              children: [
                {
                  label: "省份",
                  prop: "province",
                  width: "100"
                },

                {
                  label: "市区",
                  prop: "city",
                  width: "100",
                  editable: true
                },

                {
                  label: "地址",
                  prop: "address"
                },

                {
                  label: "邮编",
                  prop: "postCode",
                  width: "100",
                  editable: true
                }
              ]
            }
          ]
        },

        {
          label: "备注",
          prop: "remark",
          width: "200",
          fixed: "right",
          editable: true
        }
      ],

      records: [
        {name: '刘伟健', date: '2018-02-01', province: '广东省', city: '骨干周', address: '南海区桂城镇环园小区', postCode: '342323', remark: '请收到'},
        {name: '周杰伦', date: '2018-02-02', province: '广东省', city: '佛山市', address: '南海区桂城镇环园小区', postCode: '342323', remark: '请收到'},
        {name: '吴克群', date: '2018-02-03', province: '广东省', city: '佛山市', address: '南海区桂城镇环园小区', postCode: '342323', remark: '请收到'},
        {name: '刘伟健', date: '2018-02-04', province: '广东省', city: '佛山市', address: '南海区桂城镇环园小区', postCode: '342323', remark: '请收到'},
        {name: '周杰伦', date: '2018-02-05', province: '广东省', city: '佛山市', address: '南海区桂城镇环园小区', postCode: '342323', remark: '请收到'},
        {name: '吴克群', date: '2018-02-06', province: '广东省', city: '佛山市', address: '南海区桂城镇环园小区', postCode: '342323', remark: '请收到'},
        {name: '刘伟健', date: '2018-02-07', province: '广东省', city: '佛山市', address: '南海区桂城镇环园小区', postCode: '342323', remark: '请收到'},
        {name: '周杰伦', date: '2018-02-08', province: '广东省', city: '佛山市', address: '南海区桂城镇环园小区', postCode: '342323', remark: '请收到'},
        {name: '吴克群', date: '2018-02-09', province: '广东省', city: '佛山市', address: '南海区桂城镇环园小区', postCode: '342323', remark: '请收到'},
        {name: '刘伟健', date: '2018-02-10', province: '广东省', city: '佛山市', address: '南海区桂城镇环园小区', postCode: '342323', remark: '请收到'},
        {name: '周杰伦', date: '2018-02-05', province: '广东省', city: '佛山市', address: '南海区桂城镇环园小区', postCode: '342323', remark: '请收到'},
        {name: '吴克群', date: '2018-02-05', province: '广东省', city: '佛山市', address: '南海区桂城镇环园小区', postCode: '342323', remark: '请收到'},
        {name: '刘伟健', date: '2018-02-05', province: '广东省', city: '佛山市', address: '南海区桂城镇环园小区', postCode: '342323', remark: '请收到'},
        {name: '周杰伦', date: '2018-02-05', province: '广东省', city: '佛山市', address: '南海区桂城镇环园小区', postCode: '342323', remark: '请收到'},
        {name: '吴克群', date: '2018-02-05', province: '广东省', city: '佛山市', address: '南海区桂城镇环园小区', postCode: '342323', remark: '请收到'},
        {name: '刘伟健', date: '2018-02-05', province: '广东省', city: '佛山市', address: '南海区桂城镇环园小区', postCode: '342323', remark: '请收到'},
        {name: '周杰伦', date: '2018-02-05', province: '广东省', city: '佛山市', address: '南海区桂城镇环园小区', postCode: '342323', remark: '请收到'},
      ]
    }
  },

  methods: {
    click () {
      this.$refs.table.setScrollTop(10000);
    },

    scroll () {
      console.log('scroll: ', arguments)
    },

    handleRemoveRow () {
      console.log('remove-row: ', arguments)
    },

    handleInsertRow () {
      console.log('insert-row: ', arguments)
    },

    handleRowClick () {
      console.log('row-click: ', arguments)
    },

    handleCellClick () {
      console.log('cell-click: ', arguments)
    },

    sum (column, records) {
      if (column.type !== 'normal') {
        return '';
      }

      let sum = 0;
      let prop = column.prop;

      records.some(record => {
        sum += parseInt(record[prop]);

        return isNaN(sum);
      })

      return isNaN(sum) ? 'N/A' : sum;
    },

    handleSelect () {
      console.log('selecet: ', arguments)
    },

    handleSelectAll () {
      console.log('selecet-all: ', arguments)
    },

    spanMethod ({record, column, rowIndex, columnIndex}) {
      if (column.type !== 'selection') {
        return {rowspan: 1, colspan: 1};
      }

      if (rowIndex % 2 === 0) {
        return {colspan: 1, rowspan: 2};
      }

      return {colspan: 0, rowspan: 0};
    }
  }
}
</script>

<style lang="scss">
  .div {
    margin-left: 100px;
    width: 980px;
    height: 500px;
  }

  * {
    margin: 0;
    padding: 0;
  }
</style>

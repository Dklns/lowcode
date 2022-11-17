<template>
    <div id="select">
        <div class="container">
            <wzc-select class="wzcs" :placeholder="reqObj.database || '请选择数据库'" :width="240" :height="40">
                <template v-slot:wzc_option>
                    <wzc-option v-for="item in databaseList" :key="item.item_id" :label="item.item_name"
                        :optionid="item.item_id" @slot-content="confirmDataBase"></wzc-option>
                </template>
            </wzc-select>
            <wzc-select class="wzcs" :placeholder="reqObj.table || '请选择表'" :width="240" :height="40">
                <template v-slot:wzc_option>
                    <wzc-option v-for="item in tableList" :key="item.item_id" :label="item.item_name"
                        :optionid="item.item_id" @slot-content="confirmTable"></wzc-option>
                </template>
            </wzc-select>
            <div class="generate code">
                <input type="text" id="genCode" placeholder="请输入代码包名">
                <button>生成代码</button>
            </div>
            <div class="generate zip">
                <input type="text" id="genZip" placeholder="请输入压缩包名">
                <button>生成压缩包</button>
            </div>
        </div>
    </div>
</template>

<script>
import WzcSelect from '../components/wzc-select.vue';
import WzcOption from '../components/wzc-option.vue';
import { getAllDatabase, getAllTable } from '../service/connect/connect';
export default {
    data() {
        return {
            databaseList: [
                {
                    item_name: "选项00000000000000000000000000000",
                    item_id: "0",
                },
                {
                    item_name: "选项11111111111111111111111111111",
                    item_id: "1",
                },
                {
                    item_name: "选项222222222222222222222222222222",
                    item_id: "2",
                },
                {
                    item_name: "选项33333333333333333333333333333333",
                    item_id: "3",
                },
            ],
            tableList: [],
            reqObj: {
                database: '',
                table: ''
            }
        }
    },
    components: {
        WzcSelect,
        WzcOption
    },
    mounted() {
        // getAllDatabase().then(res => Promise.resolve(res.data))
        //     .then(res => {
        //         const data = res.data;
        //     });
        // getAllTable()
    },
    methods: {
        confirmDataBase(data) {
            console.log(data);
            this.reqObj.database = data.label;
        },
        confirmTable(data) {
            this.reqObj.table = data.label;
        }
    }
}
</script>

<style lang="scss" scoped>
* {
    box-sizing: border-box;
    margin: 0;
}

#select {
    color: orange;
    background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    width: 100vw;
    height: 100vh;

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 50vw;
        height: 50vh;

        .wzcs {
            margin: 50px;
        }

        .generate {
            position: relative;
            display: flex;
            justify-content: space-between;
            align-content: center;
            width: 300px;
            height: 50px;
            margin: 10px;

            input {
                outline: none;
                border: 1px solid #dcdcdc;
                border-radius: 3px;
                width: 200px;
                height: 30px;
                margin: auto 0;
            }

            input:hover {
                box-shadow: 0 0 3px 3px #1976d2;
            }

            button {
                display: inline-block;
                border: 1px solid transparent;
                border-radius: 5px;
                width: 80px;
                background-color: #1976d2;
                color: #fff;
                height: auto;


            }

            button:hover {
                background-color: #0e5ca9;
                box-shadow: 0 0 2px 2px #afafaf;
            }
        }
    }
}
</style>
<template>
    <div id="select">
        <div class="container">
            <wzc-select class="wzcs" :placeholder="reqObj.database || '请选择数据库'" :width="240" :height="40">
                <template v-slot:wzc_option>
                    <wzc-option v-for="(item, index) in databaseList" :key="index" :label="item" :optionid="index + ''"
                        @slot-content="confirmDataBase"></wzc-option>
                </template>
            </wzc-select>
            <wzc-select class="wzcs" :placeholder="reqObj.table || '请选择表'" :width="240" :height="40">
                <template v-slot:wzc_option>
                    <wzc-option v-for="(item, index) in tableList" :key="index" :label="item" :optionid="String(index)"
                        @slot-content="confirmTable"></wzc-option>
                </template>
            </wzc-select>
            <div class="generate code">
                <input type="text" id="genCode" placeholder="请输入代码包名" v-model="reqObj.packageName">
                <button @click="confirmPackageName">生成代码</button>
            </div>
            <div class="generate zip">
                <input type="text" id="genZip" placeholder="请输入压缩包名" v-model="reqObj.zipName">
                <button @click="confirmZipName">生成压缩包</button>
            </div>
            <div class="tip">
                <p>{{ tip }}</p>
                <a :href="zipHref" v-if="zipHref">{{ reqObj.zipName }}</a>
            </div>
        </div>
    </div>
</template>

<script>
import WzcSelect from '../components/wzc-select.vue';
import WzcOption from '../components/wzc-option.vue';
import { getAllDatabase, getAllTable, generateCode } from '../service/connect/connect';
import store from '@/store';
import { allPort } from '@/service/api';
export default {
    data() {
        return {
            databaseList: [],
            tableList: [],
            reqObj: {
                database: '',
                table: '',
                packageName: '',
                zipName: '',
            },
            isGenCode: false,
            isGenZip: false,
            tip: "",
            zipHref: ''
        }
    },
    components: {
        WzcSelect,
        WzcOption
    },
    mounted() {
        // this.$store.state.JSESSIONID
        getAllDatabase(this.$store.state.JSESSIONID).then(res => {
            const { code, data } = res.data;
            console.log(res);
            if (code === 200) {
                this.databaseList = data;
            }
        }
        );

    },
    methods: {
        confirmDataBase(data) {
            this.reqObj.database = data.label;
            console.log(this.reqObj.database);
            getAllTable({ database: this.reqObj.database }, this.$store.state.JSESSIONID)
                .then(res => {
                    this.tableList = res.data.data;
                    console.log(res);
                })
            this.isGenCode = false;
            this.isGenZip = false;
        },
        confirmTable(data) {
            this.reqObj.table = data.label;
            console.log(data);
            this.isGenCode = true;
        },
        confirmPackageName() {
            if (this.reqObj.packageName !== '' && this.isGenCode) {
                generateCode({
                    package_name: this.reqObj.packageName,
                    table_name: this.reqObj.table
                }, this.$store.state.JSESSIONID)
                    .then(res => {
                        const { code } = res.data;
                        if (code === 200) {
                            this.isGenZip = true;
                            this.tip = "代码生成成功"
                        }
                    })
            } else {
                this.tip = "还不能填写 code 文件夹名哦";
            }
        },
        confirmZipName() {
            if (this.reqObj.zipName !== '' && this.isGenZip) {
                this.zipHref = `${allPort.GENERATE_ZIP}/${this.reqObj.zipName}`
                this.tip = "请点击超链接";
            } else {
                this.tip = "还不能填写压缩包名哦";
            }
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
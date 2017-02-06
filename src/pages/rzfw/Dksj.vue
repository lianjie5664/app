<template>
  <div class="page">
    <!--<div class="container-fluid">-->
        <!--<div class="container-fluid-content page-center">-->
          <!--<el-steps :space="200" :active="1" :style="{ paddingLeft: '150px',paddingTop:'80px'}">-->
            <!--<el-step title="用户发布信息" description=""></el-step>-->
            <!--<el-step title="银行提交竞价" description=""></el-step>-->
            <!--<el-step title="后台选择优势银行" description=""></el-step>-->
            <!--<el-step title="银行客户经理对接" description=""></el-step>-->
            <!--<el-step title="达成合作" description=""></el-step>-->
          <!--</el-steps>-->
        <!--</div>-->
    <!--</div>-->
    <!-- 表单 -->
    <div class="container-fluid">
        <div class="container-fluid-content">
          <div class="form-steps">
            <el-steps :space="200" :active="1" :style="{ paddingLeft: '150px',paddingTop:'40px'}">
              <el-step title="用户发布信息" description=""></el-step>
              <el-step title="银行提交竞价" description=""></el-step>
              <el-step title="后台选择优势银行" description=""></el-step>
              <el-step title="银行客户经理对接" description=""></el-step>
              <el-step title="达成合作" description=""></el-step>
            </el-steps>
          </div>
          <div class="el-forms">
            <el-form ref="ruleForm" :rules="rules" :model="ruleForm" label-width="200px">
              <el-form-item label="借款人姓名" prop="jkr_name">
                <el-col :span="9"><el-input v-model="ruleForm.jkr_name" placeholder="借款人姓名"></el-input></el-col>
              </el-form-item>
              <el-form-item label="担任职位" prop="jkr_zw">
                <el-col :span="9"><el-input v-model="ruleForm.jkr_zw" placeholder="担任职位"></el-input></el-col>
              </el-form-item>
              <el-form-item label="企业名称" prop="com_name">
                <el-col :span="9"><el-input v-model="ruleForm.com_name" placeholder="企业名称"></el-input></el-col>
              </el-form-item>
              <el-form-item label="企业所在地" prop="com_location">
                <el-col :span="9"><el-input v-model="ruleForm.com_location" placeholder="企业所在地"></el-input></el-col>
              </el-form-item>
              <el-form-item label="企业简介" prop="com_summary">
                <el-col :span="9"><el-input v-model="ruleForm.com_summary" placeholder="企业简介"></el-input></el-col>
              </el-form-item>
              <el-form-item label="注册资本" prop="com_zczb">
                <el-col :span="9"><el-input type="com_zczb" v-model.number="ruleForm.com_zczb" placeholder="注册资本（单位：万元）"></el-input></el-col>
              </el-form-item>
              <el-form-item label="实缴资本" prop="com_sjzb">
                <el-col :span="9"><el-input type="com_sjzb" v-model.number="ruleForm.com_sjzb" placeholder="实缴资本(单位:万元)"></el-input></el-col>
              </el-form-item>
              <el-form-item label="经营年限" prop="com_jynx">
                <el-col :span="9"><el-input v-model="ruleForm.com_jynx" placeholder="经营年限(单位:年)"></el-input></el-col>
              </el-form-item>
              <el-form-item label="年营收入" prop="com_nyysr">
                <el-col :span="9"><el-input v-model="ruleForm.com_nyysr" placeholder="年营收入(单位:万元)"></el-input></el-col>
              </el-form-item>
              <el-form-item label="是否有抵押物" prop="has_dyw">
                <el-radio-group v-model="ruleForm.has_dyw">
                  <el-radio label="有"></el-radio>
                  <el-radio label="无"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="目前贷款银行" prop="com_dk_bank_code">
                <el-select v-model="ruleForm.com_dk_bank_code" placeholder="请选择银行">
                  <el-option label="邮储银行" value="100"></el-option>
                  <el-option label="工商银行" value="101"></el-option>
                  <el-option label="农业银行" value="102"></el-option>
                  <el-option label="中国银行" value="103"></el-option>
                  <el-option label="建设银行" value="104"></el-option>
                  <el-option label="国家开发银行" value="105"></el-option>
                  <el-option label="中信银行" value="106"></el-option>
                  <el-option label="光大银行" value="107"></el-option>
                  <el-option label="华夏银行" value="108"></el-option>
                  <el-option label="民生银行" value="109"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="贷款总额" prop="com_dk_ze">
                <el-col :span="9"><el-input v-model="ruleForm.com_dk_ze"  placeholder="贷款总额(单位:万元)"></el-input></el-col>
              </el-form-item>
              <el-form-item label="贷款利率" prop="com_dk_ll">
                <el-col :span="9"><el-input v-model="ruleForm.com_dk_ll" placeholder="贷款利率(单位:%)"></el-input></el-col>
              </el-form-item>
              <el-form-item label="到期时间" prop="com_dk_dqsj">
                <el-col :span="9">
                  <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.com_dk_dqsj" style="width: 100%;"></el-date-picker>
                </el-col>
              </el-form-item>
              <el-form-item label="有无逾期" prop="has_yq">
                <el-radio-group v-model="ruleForm.has_yq">
                  <el-radio label="有"></el-radio>
                  <el-radio label="无"></el-radio>
                </el-radio-group>
              </el-form-item>
              <!-- 上传图片 -->
              <el-form-item label="营业执照" prop="fileList">
                <el-upload
                  action="http://m.tkjfw.net/internet_money/media.do?action=uploadfile&encode=utf-8"
                  type="drag" v-model="ruleForm.yzzz" name="yzzz"
                  :thumbnail-mode="true"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :on-success="handleSuccess"
                  :default-file-list="ruleForm.yzzz">
                  <i class="el-icon-upload"></i>
                  <div class="el-dragger__text">上传营业执照<em>点击上传</em></div>
                  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
              </el-form-item>
              <!--身份证-->
              <el-form-item label="身份证正反面" prop="fileList">
                <el-upload
                  action="http://m.tkjfw.net/internet_money/media.do?action=uploadfile&encode=utf-8"
                  type="drag" v-model="ruleForm.car_0"
                  :thumbnail-mode="true"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :on-success="handleSuccess"
                  :default-file-list="ruleForm.car_0">
                  <i class="el-icon-upload"></i>
                  <div class="el-dragger__text">上传身份证正面<em>点击上传</em></div>
                  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
                <el-upload
                  action="http://m.tkjfw.net/internet_money/media.do?action=uploadfile&encode=utf-8"
                  type="drag" v-model="ruleForm.car_1" name="car_1"
                  :thumbnail-mode="true"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :on-success="handleSuccess"
                  :default-file-list="ruleForm.car_1">
                  <i class="el-icon-upload"></i>
                  <div class="el-dragger__text">上传身份证反面，或<em>点击上传</em></div>
                  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
  import UploadImg from'../../components/UploadImg.vue'
  export default {
    name : 'RZFW-DKSJ',
    data() {
      return {
        ruleForm: {
          jkr_name: '',
          jkr_zw: '',
          com_name: '',
          com_location: '',
          com_summary: '',
          com_zczb:'',
          com_sjzb: '',
          com_jynx: '',
          com_nyysr: '',
          has_dyw: '',
          com_dk_bank_code: '',
          com_dk_ze: '',
          com_dk_ll: '',
          com_dk_dqsj: '',
          has_yq: '',
          yzzz : [],
          car_0 : [],
          car_1 : []
        },
        rules: {
          jkr_name: [
            { required: true, message: '请输入借款人姓名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          jkr_zw: [
            { required: true, message: '请输入职位', trigger: 'blur' }
          ],
          com_name: [
            { required: true, message: '请输入企业名称', trigger: 'blur' }
          ],
          com_location: [
            { required: true, message: '请输入企业所在地', trigger: 'blur' }
          ],
          com_summary: [
            { required: true, message: '请输入企业简介', trigger: 'blur' }
          ],
          com_zczb: [
            { required: true, message: '请输入注册资本'},
            { type: 'number', message: '注册资本必须为数字值' }
          ],
          com_sjzb: [
            { required: true, message: '请输入实缴资本'},
            { type: 'number', message: '实缴资本必须为数字值'}
          ],
          com_jynx: [
            { required: true, message: '请输入经营年限', trigger: 'blur' },
          ],
          com_nyysr: [
            { required: true, message: '请输入年营收入', trigger: 'blur' },
          ],
          has_dyw: [
            { required: true, message: '请选择是否有抵押物', trigger: 'change' }
          ],
          com_dk_bank_code: [
            { required: true, message: '请选择目前贷款银行', trigger: 'change' }
          ],
          com_dk_ze: [
            { required: true, message: '请输入贷款总额', trigger: 'blur' }
          ],
          com_dk_ll: [
            { required: true, message: '请输入贷款利率', trigger: 'blur' }
          ],
          com_dk_dqsj: [
            { type: 'date', required: true, message: '请输入到期时间', trigger: 'change' }
          ],
          has_yq: [
            { required: true, message: '请选择有无逾期', trigger: 'change' }
          ],
          path_yyzz: [
            { required: true, message: '请上传营业执照', trigger: 'change' }
          ],

        }
      }
    },
    components:{
      UploadImg
    },
    methods: {
      handleSuccess(response,file,fileList){
//          alert(this.getName());
//        this.ruleForm.fileList.push(file);
      },
      handleRemove(file, fileList) {
//        for(var i = 0; i < this.ruleForm.fileList.length; i++){
//          if(file.uid == this.ruleForm.fileList[i].uid){
//            this.ruleForm.fileList.splice(i,1);
//          }
//        }
      },
      handlePreview(file) {
        console.log(file);
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //验证成功后提交
            console.log(JSON.stringify(this.ruleForm))
          } else {
            return false;
          }
        });
      },
    }
  }
</script>
<style scoped>
  .form-steps{
    background: #fff;
  }
  .el-forms{
    width: 1170px;
    margin:0 auto;
    background: #fff;
    padding:20px 20px 20px 10px;
  }
</style>

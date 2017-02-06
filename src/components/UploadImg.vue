<template>
  <div class="upload-img">
    <el-upload
      action="http://m.tkjfw.net/internet_money/media.do?action=uploadfile&encode=utf-8"
      :on-success="handleSuccess"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :thumbnail-mode="true"
      :default-file-list="fileList">
      <el-button size="small" type="primary">点击上传</el-button>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>
<script>
  export default {
      data() {
      return {
        fileList: [],
      };
    },
    methods: {
      handleSuccess(response,file,fileList){
        this.fileList.push(file);
        this.$emit('ee',11111)
      },
      handleRemove(file, fileList) {
        for(var i = 0; i < this.fileList.length; i++){
          if(file.uid == this.fileList[i].uid){
            this.fileList.splice(i,1);
          }
        }
      },
      handlePreview(file) {
        console.log(file);
      }
    }
  }
</script>

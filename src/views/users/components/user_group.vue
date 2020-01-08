<template>
  <div>
    <el-form-item prop="style4" class="search">
            <el-select v-model="form.param1" placeholder="请选择单位">
              <el-option v-for="item in options" :key="item.tagId" :label="item.tagName" :value="item.tagId"></el-option>
            </el-select>
          </el-form-item>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>

</style>

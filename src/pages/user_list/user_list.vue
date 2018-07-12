<template>
  <div>
    <!-- 用户列表 -->
    <base-content>
      <router-view></router-view>
    </base-content>
  </div>
</template>

<script>

export default {
  name: 'user-list',
  mounted () {
    // console.log(this.layout)
  }
}
</script>

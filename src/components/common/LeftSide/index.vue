<template>
  <Menu theme="light" active-name="/UserList/in" style="text-align: left;" @on-select="linkTo">
    <template v-for="item in list">
      <MenuGroup :title="item.title" :key="item.title">
        <!-- {{item.subs}} -->
        <MenuItem v-if="item.subs && item.subs.length>0" v-for="sub in item.subs" :key="sub.name" :name="sub.name">
            <Icon type="document-text"></Icon>
            {{sub.title || '暂无描述'}}
        </MenuItem>
      </MenuGroup>
    </template>
  </Menu>
</template>

<script>
export default {
  name: 'com-left-side',
  data () {
    return {
      list: [
        {
          title: 'item1',
          subs: [
            {
              name: '/UserList/in',
              title: '用户列表',
              sub: []
            },
            {
              name: '/UserList/out',
              title: '列表2',
              sub: []
            }
          ]
        },
        {
          title: 'item2',
          subs: [
            {
              name: '2-1',
              title: '',
              sub: []
            }
          ]
        }
      ]
    }
  },
  methods: {
    linkTo (name) {
      this.$router.push(name)
    }
  }
}
</script>

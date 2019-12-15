<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: hsl(210, 25%, 97%);
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
<template>
  <div class="layout">
    <Layout style="height:100%;">
      <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu
          active-name="1-1"
          theme="dark"
          width="auto"
          :class="menuitemClasses"
          :open-names="['1']"
        >
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-analytics" />my world
            </template>
            <MenuGroup title="Item 1">
              <MenuItem name="1-1">Option 1</MenuItem>
              <MenuItem name="1-2">Option 2</MenuItem>
            </MenuGroup>
            <MenuGroup title="Item 2">
              <MenuItem name="1-3">Option 3</MenuItem>
              <MenuItem name="1-4">Option 4</MenuItem>
            </MenuGroup>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-filing" />Navigation Two
            </template>
            <MenuItem name="2-1">Option 5</MenuItem>
            <MenuItem name="2-2">Option 6</MenuItem>
            <Submenu name="3">
              <template slot="title">Submenu</template>
              <MenuItem name="3-1">Option 7</MenuItem>
              <MenuItem name="3-2">Option 8</MenuItem>
            </Submenu>
          </Submenu>
          <Submenu name="4">
            <template slot="title">
              <Icon type="ios-cog" />Navigation Three
            </template>
            <MenuItem name="4-1">Option 9</MenuItem>
            <MenuItem name="4-2">Option 10</MenuItem>
            <MenuItem name="4-3">Option 11</MenuItem>
            <MenuItem name="4-4">Option 12</MenuItem>
          </Submenu>
        </Menu>
      </Sider>
      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar">
          <Icon
            @click.native="collapsedSider"
            :class="rotateIcon"
            :style="{margin: '0 20px'}"
            type="md-menu"
            size="24"
          ></Icon>
        </Header>
        <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">Content</Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapsed: false,
      visible: false
    };
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  methods: {
    handleOpen() {
      this.visible = true;
    },
    handleClose() {
      this.visible = false;
    },
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    }
  }
};
</script>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
}
.layout-breadcrumb {
  padding: 10px 15px 0;
}
.layout-content {
  min-height: 200px;
  margin: 15px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
}
.layout-content-main {
  padding: 10px;
}
.layout-copy {
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}
.layout-menu-left {
  background: #464c5b;
}
.layout-header {
  height: 60px;
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
</style>
<template>
  <div class="layout" style="height:100%;">
    <Row type="flex" style="height:100%;">
      <i-col span="5" class="layout-menu-left">
        <Menu active-key="1-2" theme="dark" width="auto" :open-keys="['1']" style="height:100%;">
          <div class="layout-logo-left"></div>
          <Submenu key="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>导航一
            </template>
            <Menu-item key="1-1">选项 1</Menu-item>
            <Menu-item key="1-2">选项 2</Menu-item>
            <Menu-item key="1-3">选项 3</Menu-item>
          </Submenu>
          <Submenu key="2">
            <template slot="title">
              <Icon type="ios-keypad"></Icon>导航二
            </template>
            <Menu-item key="2-1">选项 1</Menu-item>
            <Menu-item key="2-2">选项 2</Menu-item>
          </Submenu>
          <Submenu key="3">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>程序我猿
            </template>
            <Menu-item key="3-1">选项 1</Menu-item>
            <Menu-item key="3-2">选项 2</Menu-item>
          </Submenu>
        </Menu>
      </i-col>
      <i-col span="19">
        <div class="layout-header">
          <Menu mode="horizontal" :theme="theme1" active-key="1">
            <Menu-item key="1">
              <Icon type="ios-paper"></Icon>内容管理
            </Menu-item>
            <Menu-item key="2">
              <Icon type="ios-people"></Icon>用户管理
            </Menu-item>
            <Submenu key="3">
              <template slot="title">
                <Icon type="stats-bars"></Icon>统计分析
              </template>
              <Menu-group title="使用">
                <Menu-item key="3-1">新增和启动</Menu-item>
                <Menu-item key="3-2">活跃分析</Menu-item>
                <Menu-item key="3-3">时段分析</Menu-item>
              </Menu-group>
              <Menu-group title="留存">
                <Menu-item key="3-4">用户留存</Menu-item>
                <Menu-item key="3-5">流失用户</Menu-item>
              </Menu-group>
            </Submenu>
            <Menu-item key="4">
              <Icon type="settings"></Icon>综合设置
            </Menu-item>
          </Menu>
        </div>
        <div class="layout-breadcrumb">
          <Breadcrumb>
            <Breadcrumb-item href="/">首页</Breadcrumb-item>
            <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
            <Breadcrumb-item>某应用</Breadcrumb-item>
          </Breadcrumb>
        </div>
        <div class="layout-content">
          <div class="layout-content-main">内容区域</div>
        </div>
        <div class="layout-copy">made in China</div>
      </i-col>
    </Row>
  </div>
</template>
<script>
export default {};
</script>

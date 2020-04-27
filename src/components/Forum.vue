<template>
  <div>
    <div class="top">
      <div class="top-top">
        <div><span>关注</span></div>
        <div><span>推荐</span></div>
        <div><span>版块</span></div>
        <div><span>攻略</span></div>
      </div>
      <div class="top-bottom"></div>
    </div>
    <div class="top-fixed">
      <div class="top-fixed-middle"><i class="iconfont icon-sousuo" /><span>搜索论坛、帖子</span></div>
      <div class="top-fixed-right"><i class="iconfont icon-tongzhi" /></div>
    </div>
    <van-swipe class="my-swipe"  indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>

</script>
<style lang="less" scoped>
.top {
  background-color: #14b9c8;
  width: 100vw;
  height: 16vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  box-sizing: border-box;
  padding: 11.5vh 0 0;
  .top-top {
    color: #fff;
    display: flex;
    justify-content: space-around;
    font-weight: bold;
  }
  .top-bottom {
    background-color: #fff;
    border-radius: 5vw;
    border: solid 0.4vw #fff;
    width: 5vw;
    margin-top: 0.5vh;
    margin-left: 9.3vw;
  }
}
.top-fixed {
  position: fixed;
  width: 100vw;
  top: 3.8vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .top-fixed-middle {
    box-shadow: 0 0 1vw #999;
    height: 7vw;
    width: 50vw;
    background-color: #7dd1e8;
    border-radius: 2vw;
    color: #fff;
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 3.5vw;
    i {
      font-size: 5vw;
      margin: 0 3vw;
    }
  }
  .top-fixed-right {
    position: fixed;
    right: 10vw;
    i {
      font-size: 6vw;
      color: #fff;
    }
  }
}
</style>
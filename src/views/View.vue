<template>
    <div class="background">
        <router-view />
        <div class="main">
            <div class="avatar" @click="avatarEvent">
                <img :src="userInformation.avatarImgUrl" alt="头像" border="0" />
            </div>
            <div class="bottom">
                <a :style="bottomElement.style" :href="bottomElement.href" v-for="bottomElement in bottomElements" :key="bottomElement.id">
                    <div><i :class="bottomElement.icon" /></div>
                    <div>
                        <span>{{bottomElement.description}}</span>
                    </div>
                </a>
            </div>
            <div class="personal-information-drawer">
                <div class="shadow" :style="avatarEventData.personalInformationDrawerShadowStyle" @click="personalInformationDrawerEvent" @touchmove="personalInformationDrawerMousemoveEventFlag && personalInformationDrawerMousemoveEvent($event)" @touchend="personalInformationDrawerTouchendEvent"></div>
                <div class="content" :style="avatarEventData.personalInformationDrawerContentStyle" @touchstart="personalInformationDrawerMousedownEvent" @touchmove="personalInformationDrawerMousemoveEventFlag && personalInformationDrawerMousemoveEvent($event)" @scroll="personalInformationDrawerScrollEvent" @touchend="personalInformationDrawerTouchendEvent">
                    <div class="content-top">
                        <div class="content-top-top">
                            <div class="content-top-top-avatarnickname">
                                <a href="#">
                                    <div class="content-top-top-avatar">
                                        <img :src="userInformation.avatarImgUrl" alt="头像" border="0" />
                                    </div>
                                    <div class="content-top-top-nickname">
                                        <span>{{userInformation.nickname}}</span>
                                    </div>
                                </a>
                            </div>
                            <!--扫码功能，暂未完成-->
                            <div class="content-top-top-saoma">
                                <a href="#"><i class="iconfont icon-saoma" /></a>
                            </div>
                        </div>
                        <div class="content-top-bottom">
                            <div class="content-top-bottom-follow">
                                <a href="#"><span>关注 {{userInformation.followNumber}}</span></a>
                            </div>
                            <div class="content-top-bottom-fans">
                                <a href="#"><span>粉丝 {{userInformation.fansNumber}}</span></a>
                            </div>
                        </div>
                    </div>
                    <div class="content-information">
                        <div>
                            <a href="#"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-guanzhuxuanzhong"></use></svg>关注</a>
                        </div>
                        <div>
                            <a href="#"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-yaoqinghaoyou"></use></svg>好友</a>
                        </div>
                        <div>
                            <a href="#"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-biaoqian"></use></svg>收藏</a>
                        </div>
                        <div>
                            <a href="#"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-xingzhuanggongnengtubiao-"></use></svg>订单</a>
                        </div>
                        <div>
                            <a href="#"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-shizhong"></use></svg>浏览历史</a>
                        </div>
                    </div>
                    <div class="content-setting">
                        <div>
                            <a href="#"><i class="iconfont icon-shop" />JapJap周边</a>
                        </div>
                        <div>
                            <a href="#"><i class="iconfont icon-shangpinchuangjian" />兑换中心</a>
                        </div>
                        <div>
                            <a @click="feedbackEvent"><i class="iconfont icon-yijianfankui" />意见反馈</a>
                        </div>
                        <div>
                            <a href="#"><i class="iconfont icon-setting" />设置</a>
                        </div>
                        <div>
                            <a href="#"><i class="iconfont icon-yueliang" />夜间模式</a>
                        </div>
                        <div>
                            <a href="#"><i class="iconfont icon-gantanhao" />当前版本</a>
                        </div>
                    </div>
                    <div class="content-bottom">
                        <div>
                            <a href="#"><i class="iconfont icon-tuichu-x" />退出登录</a>
                        </div>
                    </div>
                </div   >
            </div>
            <div class="feedback-drawer">
                <div class="feedback-drawer-shadow" :style="feedbackEventData.feedbackDrawerShadowStyle" @click="feedbackDrawerCancelEvent"></div>
                <div class="feedback-drawer-content" :style="feedbackEventData.feedbackDrawerContentStyle">
                    <div class="feedback-drawer-content-top"><span>意见反馈</span></div>
                    <div class="feedback-drawer-content-middle">
                        <div>
                            <a href="#">
                                <div><svg class="icon" aria-hidden="true"><use xlink:href="#icon-ziyuan"></use></svg></div>
                                <div><span>产品意见</span></div>
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <div><svg class="icon" aria-hidden="true"><use xlink:href="#icon-QQ1"></use></svg></div>
                                <div><span>安装问题</span></div>
                            </a>
                        </div>
                    </div>
                    <div class="feedback-drawer-content-bottom" @click="feedbackDrawerCancelEvent"><i class="iconfont icon-fork" /></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bottomElements: [
                {id:1, icon: 'iconfont icon-home-fill', description: '首页', href: '/#/homepage', style: {color: 'dimgray'}},
                {id:2, icon: 'iconfont icon-compass-fill', description: '发现', href: '/#/discover', style: {color: 'dimgray'}},
                {id:3, icon: 'iconfont icon-message-fill', description: '论坛', href: '/#/forum', style: {color: 'dimgray'}},
                {id:4, icon: 'iconfont icon-trophy-fill', description: '排行', href: '/#/rank', style: {color: 'dimgray'}},
                {id:5, icon: 'iconfont icon-star-fill', description: '我的游戏', href: '/#/mygame', style: {color: 'dimgray'}}
            ],
            avatarEventData: {
                personalInformationDrawerShadowStyle: {opacity: '0', width: '0'},
                personalInformationDrawerContentStyle: {width: '0', transition: 'width 0.4s'}
            },
            feedbackEventData: {
                feedbackDrawerShadowStyle: {opacity: "0", height: "0"},
                feedbackDrawerContentStyle: {height: "0"}
            },
            userInformation: {
                avatarImgUrl: 'https://s1.ax1x.com/2020/04/23/JdGkOU.png',
                nickname: '未登录',
                followNumber: 0,
                fansNumber: 0
            },
            personalInformationDrawerMoveEventData: {
                data: 0,
                width: 0
            },
            personalInformationDrawerMousemoveEventFlag: false,
            personalInformationDrawerScrollTop: 0,
        }
    },
    methods: {
        avatarEvent() {
            this.avatarEventData.personalInformationDrawerContentStyle.transition = 'width 0.4s'
            this.avatarEventData.personalInformationDrawerShadowStyle.opacity = '0.7'
            this.avatarEventData.personalInformationDrawerShadowStyle.width = '100vw'
            this.avatarEventData.personalInformationDrawerContentStyle.width = '87vw'
        },
        personalInformationDrawerEvent() {
            this.avatarEventData.personalInformationDrawerContentStyle.transition = 'width 0.4s'
            this.avatarEventData.personalInformationDrawerShadowStyle.opacity = '0'
            this.avatarEventData.personalInformationDrawerContentStyle.width = '0'
            setTimeout(() => {
                this.avatarEventData.personalInformationDrawerShadowStyle.width= '0'
            }, 300)
        },
        personalInformationDrawerMousedownEvent($event) {
            this.personalInformationDrawerMoveEventData.data = $event.changedTouches[0].clientX
            this.personalInformationDrawerMoveEventData.width = parseFloat(this.avatarEventData.personalInformationDrawerContentStyle.width)
            this.avatarEventData.personalInformationDrawerContentStyle.transition = 'none'
            this.personalInformationDrawerMousemoveEventFlag = true
        },
        personalInformationDrawerMousemoveEvent($event) {
            // this.avatarEventData.personalInformationDrawerContentStyle.width = '80vw'
            // console.log($event.clientX)
            this.avatarEventData.personalInformationDrawerContentStyle.width =  (this.personalInformationDrawerMoveEventData.width - (this.personalInformationDrawerMoveEventData.data - $event.changedTouches[0].clientX) / innerWidth * 100).toString() + 'vw'
            if(parseFloat(this.avatarEventData.personalInformationDrawerContentStyle.width) > 87) {
                this.personalInformationDrawerMoveEventData.data = $event.changedTouches[0].clientX
                this.personalInformationDrawerMoveEventData.width = 87
                this.avatarEventData.personalInformationDrawerContentStyle.width = '87vw'
            }
            document.getElementsByClassName('content')[0].scrollTop = this.personalInformationDrawerScrollTop
        },
        personalInformationDrawerTouchendEvent() {
            if(parseFloat(this.avatarEventData.personalInformationDrawerContentStyle.width) < 80) {
                this.personalInformationDrawerEvent()
            }else {
                this.avatarEvent()
            }
        },
        personalInformationDrawerScrollEvent($event) {
            this.personalInformationDrawerMousemoveEventFlag = false
            this.personalInformationDrawerScrollTop = document.getElementsByClassName('content')[0].scrollTop
        },
        feedbackEvent() {
            this.personalInformationDrawerEvent()
            setTimeout(() => {
                this.feedbackEventData.feedbackDrawerShadowStyle.opacity = "0.5"
                this.feedbackEventData.feedbackDrawerShadowStyle.height = "100vh"
                this.feedbackEventData.feedbackDrawerContentStyle.height = "25vh"
            }, 300)
        },
        feedbackDrawerCancelEvent() {
            this.feedbackEventData.feedbackDrawerShadowStyle.opacity = "0"
            this.feedbackEventData.feedbackDrawerContentStyle.height = "0"
            setTimeout(() => {
                this.feedbackEventData.feedbackDrawerShadowStyle.height = "0"
            }, 200)
        },
        async initData() {
            const res = (await this.$http.get('user/userInformation')).data
            if(res.code === 200) {
                this.userInformation = res.data
            }else {
                console.log("初始化用户数据1失败")
            }
            this.bottomElements.forEach((item) => {
                if(item.href.split('/')[2] === this.$route.path.split('/')[1]) {
                    item.style.color = '#14b9c8'
                }
            })
        }
    },
    mounted() {
        this.initData()
    },
    watch: {
        $route(val) {
            this.bottomElements.forEach((item) => {
                if(item.href.split('/')[2] === val.path.split('/')[1]) {
                    item.style.color = '#14b9c8'
                }else {
                    item.style.color = 'dimgray'
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
.background {
    height: 100%;
}
.avatar {
    position: fixed;
    z-index: 2;
    top: 5vw;
    left: 5vw;
    img {
        border-radius: 50%;
        border: #fff solid 0.5vw;
        box-shadow: 0 0 0.1vw 0.1vw #555;
        width: 10vw;
    }
}
.bottom {
    position: fixed;
    width: 100vw;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    box-shadow: 0 0.5vw 0.5vw 0.5vw dimgray;
    background-color: white;
    height: 8vh;
    a {
        div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            transition: all 0.5s;
            text-align: center;
            padding: 0.5vh 0;
            i {
                font-size: 4vh;
            }
            span {
                font-size: 2vh;
            }
        }
    }
}
.personal-information-drawer {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    .shadow {
        background-color: #555; //已绑定内联样式
        opacity: 0.7;
        width: 100vw;
        height: 100vh;
        transition: opacity 0.2s;
    }
    .content {
        background-color: #fff;
        position: absolute;
        top: 0;
        left: 0;
        width: 87vw; //已绑定内联样式
        height: 100vh;
        overflow-x: hidden;
        .content-top {
            color: #fff;
            background-color: #14b9c8;
            padding-bottom: 4vw;
            .content-top-top {
                padding: 5vw 5vw 0;
                display: flex;
                justify-content: space-between;
                .content-top-top-avatarnickname {
                    a {
                        color: #fff;
                        display: flex;
                        flex-flow: column;
                        align-items: center;
                        .content-top-top-avatar {
                            img {
                                border-radius: 50%;
                                width: 15vw;
                                border: 0.5vw solid #fff;
                                box-shadow: 0 0 0.2vw 0.2vw #555555;
                            }
                        }
                        .content-top-top-nickname {
                            margin-top: 1vw;
                            font-size: 5vw;
                            white-space: nowrap

                        }
                    }
                }
                .content-top-top-saoma {
                    margin-top: 1vw;
                    a {
                        color: #fff;
                        i {
                            font-size: 6vw;
                        }
                    }
                }
            }
            .content-top-bottom {
                display: flex;
                justify-content: left;
                margin-top: 3vw;
                padding-left: 5vw;
                font-size: 5vw;
                overflow: hidden;
                .content-top-bottom-follow {
                    a {
                        color: #fff;
                        span {
                            white-space: nowrap;
                        }
                    }
                }
                .content-top-bottom-fans {
                    margin-left: 3vw;
                    a {
                        color: #fff;
                        span {
                            white-space: nowrap;
                        }
                    }
                }
            }
        }
        .content-information {
            margin-left: 5vw;
            border-bottom: #ddd solid 0.1vw;
            div {
                margin: 7vw 0;
                a {
                    color: dimgray;
                    font-size: 5vw;
                    white-space: nowrap;
                    svg {
                        font-size: 6vw;
                        margin-right: 5vw;
                    }
                }
            }
        }
        .content-setting {
            margin-left: 5vw;
            border-bottom: #ddd solid 0.1vw;
            div {
                margin: 7vw 0;
                a {
                    color: dimgray;
                    font-size: 5vw;
                    white-space: nowrap;
                    i {
                        font-size: 6vw;
                        margin-right: 5vw;
                    }
                }
            }
        }
        .content-bottom {
            margin-left: 5vw;
            div {
                margin: 7vw 0;
                a {
                    color: dimgray;
                    font-size: 5vw;
                    white-space: nowrap;
                    i {
                        font-size: 6vw;
                        margin-right: 5vw;
                    }
                }
            }
        }
    }
}
.feedback-drawer {
    .feedback-drawer-shadow {
        position: fixed;
        bottom: 0;
        background-color: #555555;
        opacity: 0.5;
        width: 100vw;
        height: 100vh; //已绑定内联样式
        transition: opacity 0.3s;
    }
    .feedback-drawer-content {
        position: fixed;
        bottom: 0;
        background-color: #14b9c8;
        width: 100vw;
        height: 25vh; //已绑定内联样式
        display: flex;
        flex-flow: column;
        justify-content: space-evenly;
        color: #fff;
        font-size: 4vw;
        overflow: hidden;
        transition: height 0.3s;
        .feedback-drawer-content-top {
            text-align: center;
            margin: 3vw 0;
        }
        .feedback-drawer-content-middle {
            display: flex;
            justify-content: space-between;
            padding: 0 20vw;
            margin: 3vw 0;
            div {
                a {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: center;
                    color: #fff;
                    div {
                        svg {
                            font-size: 10vw;
                            margin-bottom: 3vw;
                        }
                    }
                }
            }
        }
        .feedback-drawer-content-bottom {
            text-align: center;
            margin: 3vw 0;
        }
    }
}
</style>

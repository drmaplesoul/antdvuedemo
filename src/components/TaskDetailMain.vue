<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <a-layout-sider
                collapsible
                v-model="collapsed"
        >
            <div class="logo"/>
            <a-menu theme="dark" :defaultSelectedKeys="['1']" mode="inline">
                <a-menu-item key="1">
                    <a-icon type="pie-chart"/>
                    <span>Option 1</span>
                </a-menu-item>
                <a-menu-item key="2">
                    <a-icon type="desktop"/>
                    <span>Option 2</span>
                </a-menu-item>
                <a-sub-menu
                        key="sub1"
                >
                    <span slot="title"><a-icon type="user"/><span>User</span></span>
                    <a-menu-item key="3">Tom</a-menu-item>
                    <a-menu-item key="4">Bill</a-menu-item>
                    <a-menu-item key="5">Alex</a-menu-item>
                </a-sub-menu>
                <a-sub-menu
                        key="sub2"
                >
                    <span slot="title"><a-icon type="team"/><span>Team</span></span>
                    <a-menu-item key="6">Team 1</a-menu-item>
                    <a-menu-item key="8">Team 2</a-menu-item>
                </a-sub-menu>
                <a-menu-item key="9">
                    <a-icon type="file"/>
                    <span>File</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <!--<a-layout-header style="background: #fff; padding: 0" />-->
            <a-layout-content style="margin: 0 8px;text-align: left">
                <a-breadcrumb style="margin: 8px 0">
                    <a-breadcrumb-item>User</a-breadcrumb-item>
                    <a-breadcrumb-item>Bill</a-breadcrumb-item>
                </a-breadcrumb>
                <!--<div :style="{ padding: '24px', background: '#fff', minHeight: '360px' ,border:'1px solid red' }">-->
                <div :style="{background: '#fff',minHeight:'360px'}">
                    <div :style="contentDivStyle">
                        <iframe src="http://www.baidu.com" width="100%" height="100%" frameborder="0"/>

                    </div>
                </div>
            </a-layout-content>
            <a-layout-footer style="text-align: center">
                Copyright © PingAn Bank Co., Ltd. All Rights Reserved
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>
<script>
    import { axios } from '@/utils/request'

    export default {
        name: 'ApplyMain',
        data() {
            return {
                collapsed: false,
                contentDivStyle:{
                    height:this.contentHeight+'px'
                }
            }
        },
        props:['contentHeight'],
        methods: {
            toggleCollapsed() {
                this.collapsed = !this.collapsed
            },

        },
        beforeMount:()=>{

        },

    }
</script>

<style>
    #components-layout-demo-side .logo {
        height: 40px;
        margin: 16px;
        background: rgba(255, 255, 255, .2) url('../assets/pingan.png');
        background-size: 100% 100%;
    }
    #components-layout-demo-fixed-sider .logo {
        height: 32px;
        background: rgba(255, 255, 255, .2);
        margin: 16px;
    }
</style>


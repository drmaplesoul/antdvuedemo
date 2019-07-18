import Vue from 'vue'
import Router from 'vue-router'
import TaskDetailMain from '../pages/workflow/taskDetailMain/TaskDetailMain'
import Hello from '../pages/Hello'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/index',
            name: '首页',
            component: TaskDetailMain,
            invisible: true
        },
        {
            path: '/hello',
            name: 'HelloWorld',
            component: Hello,
            invisible: true
        },
    ]
})
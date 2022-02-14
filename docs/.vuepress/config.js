module.exports = {
    title:'零向量',
    description:"山行野宿，孑然万里",
    theme: 'reco',
    // 在移动端，搜索框在获得焦点时会放大，并且在失去焦点后可以左右滚动，这可以通过设置元来优化。
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
      ],
    plugins:[["sakura", {
        num: 20,  // 默认数量
        show: true, //  是否显示
        zIndex: -1,   // 层级
        img: {
          replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
          httpUrl: '...'     // 绝对路径
        }     
    }]],
    locales: {
        '/': {
          lang: 'zh-CN'
        }
    },
    themeConfig:{
        type: 'blog',
        logo: '/logo.png',
        subSidebar: 'auto',
        smoothScroll: true,
        authorAvatar: '/logo.png',
        noFoundPageByTencent: false,
        sidebar: 'auto',
        
        // 顶部导航
        nav:[
            {text:'主页',link: '/',icon: 'reco-home'},
            {
                text:'文章总览',
                icon: 'reco-document',
                items: [
                    { 
                        text: '代码规范',
                        items:[
                            { text: 'Css', link: '/front_end_development/code/css/' },
                            { text: 'Html', link: '/front_end_development/code/html/' },
                            { text: 'Javascript', link: '/front_end_development/code/javascript/' },
                            { text: 'Es6', link: '/front_end_development/code/es6/' },
                            { text: 'React', link: '/front_end_development/code/react/' }
                          ] 
                    },
                    { 
                        text: '命名规范', 
                        items:[
                            { text: '命名规范', link: '/front_end_development/name/' },
                          ] 
                       
                    },
                    {
                        text:'前端工程化',
                        items:[
                            { text: '简介', link: '/front_end_engineering/' },
                            { text: '技术选型', link: '/front_end_engineering/01.html' },
                            { text: '统一规范', link: '/front_end_engineering/02.html' },
                            { text: '前端组件化', link: '/front_end_engineering/03.html' },
                            { text: '测试', link: '/front_end_engineering/04.html' },
                            { text: '构建工具', link: '/front_end_engineering/05.html' },
                            { text: '自动化部署', link: '/front_end_engineering/06.html' },
                            { text: '前端监控', link: '/front_end_engineering/07.html' },
                            { text: '性能优化(一)', link: '/front_end_engineering/08.html' },
                            { text: '性能优化(二)', link: '/front_end_engineering/09.html' },
                            { text: '重构', link: '/front_end_engineering/10.html' },
                            { text: '微服务', link: '/front_end_engineering/11.html' },
                            { text: 'Serverless', link: '/front_end_engineering/12.html' },
        
                        ]
                },

                ]
                
            },
            
        ],
        // 博客配置
    blogConfig: {
        category: {
          location: 2,     // 在导航栏菜单中所占的位置，默认2
          text: '分类' // 默认文案 “分类”
        },
        tag: {
          location: 3,     // 在导航栏菜单中所占的位置，默认3
          text: '标签'      // 默认文案 “标签”
        }
      }
        
    }
}
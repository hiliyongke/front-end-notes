module.exports = {
    title:'前端笔记',
    description:"个人前端笔记",
    themeConfig:{
        // 是否显示搜索框
        search:false,
        // GitHub 链接
        repo: 'vuejs/vuepress',
        sidebar: 'auto',
        // 顶部导航
        nav:[
            {
                text:'前端规范',
                items: [
                    { 
                        text: '代码规范',
                        items:[
                            { text: 'Css', link: '/front_end_development/code/css/' },
                            { text: 'Html', link: '/front_end_development/code/html/' },
                            { text: 'Javascript', link: '/front_end_development/code/javascript/' },
                            { text: 'Es6', link: '/front_end_development/code/es6/' }
                          ] 
                    },
                    { 
                        text: '命名规范', 
                        items:[
                            { text: '命名规范', link: '/front_end_development/name/' },
                          ] 
                       
                    }

                ]
                
            },
            {text:'前端工程化',link:'/b'},
            {
                text: 'Languages',
                items: [
                  { text: 'Chinese', link: '/language/chinese/' },
                  { text: 'Japanese', link: '/language/japanese/' }
                ]
            }
        ],
        // 侧边导航
        // sidebar: [
        //     '/front_end_development/name/',
        //   ]
        
    }
}
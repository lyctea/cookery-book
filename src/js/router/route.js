import React,{ Component } from 'react';
import { Router,Route,IndexRoute,useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import Index from '../Containers/index';


//设置浏览器的history 去掉key参数 如果不需要这种操作则直接引入 import { hashHistory } from 'react-router'
var appHistory = useRouterHistory(createHashHistory)({ queryKey: false });


// 模块按需加载： 第一个参数是依赖，第二个是回调函数，第三个就是上面提到的 chunkName，用来指定这个 chunk file 的 name
// 详细资料参考：  https://segmentfault.com/a/1190000007141049

let Search = (location,cb) => {
    require.ensure([],require => {
        cb(null,require('../containers/search.js').default);
    },'search');
};
let Searchlist = (location,cb) => {
    require.ensure([],require => {
        cb(null,require('../containers/serch-list.js').default);
    },'serch-list');
};
let Searchdetail = (location,cb) => {
    require.ensure([],require => {
        cb(null,require('../containers/search-detail').default);
    },'search-detail')
}

const routes = (
    <Route path="/" component={Index}>
        <IndexRoute component={Index} />
        <Route path="/search" getComponent={Search}/>
        <Route path="/searchlist" getComponent={Searchlist} />
        <Route path="/searchdetail" getComponent={Searchdetail} />
    </Route>
);

//导出模块
export default class Root extends Component{
    render(){
        return <Router history={appHistory} routes={routes}/>;
    }
};
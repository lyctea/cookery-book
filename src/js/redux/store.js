//连接中间件 用于生成项目的唯一store
import { createStore,combineReducers,applyMiddleware,compose } from 'redux';
import * as reducers from '../redux/reducers.js';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//将所有的reducer和中间件连接起来， 生产store
var store = createStore(
    combineReducers(reducers),
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
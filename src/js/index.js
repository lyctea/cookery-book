import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import Route from './router/route.js';


{/*<Provider store> 使组件层级中的 connect() 方法都能够获得 Redux store*/}
render(
    <Provider store = {store}>
        <Route/>
    </Provider>
    ,document.getElementById('container')
);
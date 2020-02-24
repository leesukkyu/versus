import React from 'react';
import ReactDOM from 'react-dom';
import App from '@Components/App';
import { setRequestInterceptor, setResponseInterceptor } from '@/http';

import { Provider } from 'mobx-react';

import RootStore from '@/store/RootStore';

const rootStore = new RootStore();

// 서버 요청 전처리
setRequestInterceptor((data) => {
    const newData = data;
    rootStore.animationStore.changeProgressbarState(true);
    if (!newData.headers.Authorization) {
        newData.headers.Authorization = `Bearer ${rootStore.userStore.token.accessToken}`;
    }
    return newData;
});

// 서버 요청 후처리
setResponseInterceptor(() => {
    rootStore.animationStore.changeProgressbarState(false);
});

// 개발 모드에서는 일단 로컬 스토리지에 데이터를 가지고 시작한다.(발급 토큰이 있다고 판단)
if (process.env.NODE_ENV === 'development') {
    rootStore.userStore.setToken({
        accessToken: localStorage.getItem('accessToken'),
    });
}

ReactDOM.render(
    <Provider store={rootStore}>
        <App />
    </Provider>
    document.getElementById('root'),
);
/* eslint-disable func-names */
// 프로젝트 공통 통신 모듈
import axios from 'axios';
import RootStore from '@Store/rootStore';

// 통신 공통 처리
const instance = axios.create({
  baseURL: 'localhost:9001/',
});

// 통신 전처리
instance.interceptors.request.use(config => {
  const { animationStore } = RootStore;
  animationStore.changeAnimationState(true);
  return config;
});

// 통신 후처리
instance.interceptors.response.use(config => {
  const { animationStore } = RootStore;
  const newConfig = config;
  animationStore.changeAnimationState(false);
  return config;
});

export default instance;

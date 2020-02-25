// 로그인 사용자 데이터 스토어
import { TOKEN } from '@Config/Ini';
import { observable, action, configure, runInAction, when } from 'mobx';
import UserTypes from '@Types/UserTypes'
import http from '@/http';

configure({ enforceActions: 'observed' });

export interface tokenTypes {
    accessToken: string;
    tokenType: string;
    expiresIn: string;
    refreshToken: string;
    scope: string;
}

class UserStore {
    rootStore: any;

    // 토큰 데이터
    @observable
    token: tokenTypes = null;

    // 접속 유저 데이터
    @observable
    user: UserTypes = null;

    @observable
    error: boolean = null;

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @action
    setToken(v) {
        this.token = v;
    }

    // 로그인
    @action
    public $fetchToken(payload: { username: string; password: string }) {
        return new Promise((resolve) => {
            http
                .post(
                    'o/token/',
                    {
                        username: payload.username,
                        password: payload.password,
                        grant_type: 'password',
                    },
                    {
                        headers: {
                            Authorization: TOKEN,
                            'Content-type': 'application/x-www-form-urlencoded',
                        },
                    },
                )
                .then((rs) => {
                    runInAction(() => {
                        this.token = rs.data;
                        // 개발 모드에서는 일단 로컬 스토리지에 데이터를 가지고 시작한다.(발급 토큰이 있다고 판단)
                        if (process.env.NODE_ENV === 'development') {
                            localStorage.setItem('accessToken', this.token.accessToken);
                        }
                        resolve(rs);
                    });
                });
        });
    }

    // 개인 정보 가져오기
    @action
    public $fetchUserInfo() {
        return new Promise((resolve) => {
            http.get('v1/me/').then((rs) => {
                runInAction(() => {
                    this.user = rs.data;
                    resolve(rs);
                });
            });
        });
    }
}

export default UserStore;

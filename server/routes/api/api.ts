import { Router } from 'express';
import express from 'express';
import user from './user/user'
const app = express();

const router = Router();

// 로그인
router.use('/user', user)

// 로그아웃
router.get('/logout', function (req, res, next) {
    res.json({
        login: false
    })
});

module.exports = router;

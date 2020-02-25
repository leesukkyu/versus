import { Router } from 'express';
import express from 'express';
const router = Router();
router.get('/login', function (req, res, next) {
    res.json({
        login: false
    })
});

// 로그아웃
router.get('/logout', function (req, res, next) {
    res.json({
        login: false
    })
});

export default router;
import { Router } from 'express';

const authRouter = Router();

authRouter.post('/sing-up', (req, res) => res.send({ title: 'Sign up' }));
authRouter.post('/sing-in', (req, res) => res.send({ title: 'Sign in' }));
authRouter.post('/sing-out', (req, res) => res.send({ title: 'Sign out' }));

export default authRouter;
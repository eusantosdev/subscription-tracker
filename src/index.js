import express from 'express';

import { PORT } from './config/env.js'

import authRouter from './routers/auth.routes.js';
import subscriptionRouter from './routers/subscription.routes.js';
import userRouter from './routers/user.routes.js';

const app = express();

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/subscription', subscriptionRouter);
app.use('/api/v1/users', userRouter);

app.get('/', (req, res) => {
    res.send('Welcome!');
});

app.listen(PORT, () => {
    console.log(`Subscription Tracker API is running on http://localhost:${PORT}`);
});
import { Router } from 'express';

const authRouter = Router();

authRouter.get('/', (req, res) => res.send({ title : 'GET all auth' }));

authRouter.get('/:id', (req, res) => res.send({ title: 'GET auth by id' }));

authRouter.post('/', (req, res) => res.send({ title: 'CREATE auth' }));

authRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE auth by id'} ));

authRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE auth by id' }));

export default authRouter;
import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.send({ title: 'GET all subscriptions' }));

subscriptionRouter.get('/:id', (req, res) => res.send({ title: 'GET subscription by id' }));

subscriptionRouter.post('/', (req, res) => res.send({ title: 'CREATE new subscription' }));

subscriptionRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE subscription by id' }));

subscriptionRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE subscription by id' }));

export default subscriptionRouter;
import express from 'express';

const routes = new express.Router();

routes.post('/certifications', async (req, res) => {

  res.json({ ok: true })
});

export default routes;
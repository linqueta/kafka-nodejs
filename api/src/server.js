import express from 'express';

const app = express();

app.post('/certifications', (req, res) => {
  res.json({ ok: true })
});

app.listen(3333);
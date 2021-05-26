import express from 'express';

const routes = new express.Router();

routes.post('/certifications', async (req, res) => {
  const message = {
    user: {
      id: 1,
      name: "Linqueta"
    },
    course: 'Kafka with Nodejs',
    grade: 5
  };

  await req.producer.send({
    topic: 'issue-certificate',
    messages: [
      {
        value: JSON.stringify(message)
      }
    ],
  });

  res.json({ ok: true })
});

export default routes;
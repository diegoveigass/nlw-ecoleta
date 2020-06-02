import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Listagem de usuários');

  response.json(['Diego', 'Cleiton', 'Robson', 'Diegao']);
});

app.post('/users', (request, response) => {
  const user = {
    name: 'Diego',
    email: 'diegoveiga@gmail.com',
  };

  return response.json(user);
});

app.listen(3333);

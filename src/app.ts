import * as express from 'express';
const app: express.Application = express();

// get
app.get('/', (req: express.Request, res: express.Response) => {
  res.send('hello express');
});

app.get('/posts', (req: express.Request, res: express.Response) => {
  res.json([
    { id: 1, content: 'hello' },
    { id: 2, content: 'hello2' },
    { id: 3, content: 'hello3' },
  ]);
});
app.get('/sendTest', (req:Express.Request, res:express.Response) => {
    res.send('send');
})
// 3000 포트로 서버 실행
app.listen(3000, () => {
  console.log('실행중');
});
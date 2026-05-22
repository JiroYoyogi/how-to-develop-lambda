import { handler } from './index.mjs';

const event = {
  // APIGWでリクエスト
  pathParameters: {
    date: "2026-05-20-1700",
  },
  // 関数URLでリクエスト
  rawPath: "/popular/2026-05-20-1700",
  body: 
    JSON.stringify({
      name: "代々木二郎",
      email: "jiro@yoyogi.com",
      content: "仕事のお願いをしたい"
    })
};

const result = await handler(event);
// console.log(result.body);
console.log(JSON.parse(result.body));

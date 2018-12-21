import serializeJavascript from 'serialize-javascript';

const template = (content, context) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR with RR</title>
        <link rel="stylesheet" type="text/css" href="/public/client.css">
        <script src="/public/client.js" defer></script>
        <script>
          window.eodrinApp = window.eodrinApp || {};
          window.eodrinApp.initialData = ${serializeJavascript(context)}</script>
      </head>

      <body>
        <div id="app">${content}</div>
      </body>
    </html>
  `;
};

export default template;

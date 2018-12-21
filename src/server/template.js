import serializeJavascript from 'serialize-javascript';

export default function template (content, context) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR with RR</title>
        <script src="/public/client.js" defer></script>
        <script>window.__INITIAL_DATA__ = ${serializeJavascript(context)}</script>
      </head>

      <body>
        <div id="app">${content}</div>
      </body>
    </html>
  `;
}

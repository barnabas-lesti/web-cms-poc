const template = (content, initialState = {}) => `
	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<title> SSR Preact App</title>
		</head>
		<body>
			<div id="app">${content}</div>
			<script>window.__INITIAL_STATE__=${JSON.stringify(initialState).replace(/<|>/g, '')}</script>
			<script src="/assets/bundle.js"></script>
		</body>
	</html>
`

export default template;

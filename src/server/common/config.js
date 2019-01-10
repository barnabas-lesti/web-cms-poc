import appBaseHref from 'app-root-path';
import path from 'path';
// const yargs = require('yargs');

const envDirPath = path.resolve(appBaseHref.path, 'env');
process.env.NODE_CONFIG_DIR = envDirPath;
// process.env.NODE_ENV = yargs.argv.env || process.env.NODE_ENV;

const configLib = require('config');

/**
 * Application configuration object.
 */
const config = {
	common: {
		ENV: configLib.get('common.ENV'),
		PORT: configLib.get('common.PORT'),
	},
	api: {
		API_URL: configLib.get('api.API_URL'),
	}
};

export default config;

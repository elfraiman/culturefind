//@ts-check
const withTs = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')
const defaultGetLocalIdent = require('css-loader/lib/getLocalIdent');
const withPlugins = require("next-compose-plugins")
const { ANALYZE } = process.env
const path = require('path');

module.exports = withPlugins(
  [
    withTs,
    withSass,
    withBundleAnalyzer
  ],
  {
    analyzeServer: ['server', 'all'].includes(ANALYZE),
    analyzeBrowser: ['browser', 'all'].includes(ANALYZE),
    cssModules: true,
    target: 'serverless',
    sassLoaderOptions: {
      includePaths: ['node_modules', 'node_modules/@material'],
    },
    cssLoaderOptions: {
      // This will ensure we can import non css modules files. 
      // https://github.com/zeit/next-plugins/issues/135
      //
      getLocalIdent: (loaderContext, _localIdentName, localName) => {
        const fileName = path.basename(loaderContext.resourcePath);
        if (fileName.includes('module.scss')) {
          /** Removing the `.scss` at the end of the path so 'bla.module.scss' becomes 'bla.module' */
          const name = fileName.replace(/\.[^/.]+$/, "");
          return `${name}__${localName}`;
        } else if ( fileName.includes('global.scss') ) {
          return localName;
        }
      }
    }
  }
)
import path from 'path';

import postcssGlobalData from '@csstools/postcss-global-data';
import postcssShopify from '@shopify/postcss-plugin';
import { dirname } from 'path';
import postcssCustomMedia from 'postcss-custom-media';
import postcssDiscardComments from 'postcss-discard-comments';
import postcssImport from 'postcss-import';
import postcssNesting from 'postcss-nesting';
import pxtorem from 'postcss-pxtorem';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const mediaQueriesCssPath = path.resolve(
  __dirname,
  '../node_modules/@shopify/polaris-tokens/dist/css/media-queries.css',
);

export default [
  postcssImport(),
  postcssNesting({
    // The way native CSS nesting & SASS nesting behave with complex selectors
    // differ; SASS expands out every selector into a comma separated list, but
    // native CSS wraps the complex selectors in an `:is()` which can result in
    // a different specificity. We favour the SASS convention here to ensure
    // compatibility with our ported-in SASS styles.
    // See: https://sass-lang.com/blog/sass-and-native-nesting/
    noIsPseudoSelector: true,
  }),
  postcssGlobalData({
    files: [mediaQueriesCssPath],
  }),
  postcssCustomMedia(),
  postcssShopify,
  pxtorem({
    rootValue: 16,
    replace: true,
    propList: ['*'],
  }),
  postcssDiscardComments(),
];

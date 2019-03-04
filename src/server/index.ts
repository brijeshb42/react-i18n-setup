import { createServer } from 'http';
import { StaticRouter } from 'react-router';
import ReactDOMServer from 'react-dom/server';

import { render as renderShell, renderToString } from './template';
import { logger } from './logger';
import Routes from '../shared/routes';

const server = createServer((request, resp) => {
  const context = {};

  const appShell = renderShell({
    title: 'i18n example',
    lang: 'en',
    html: renderToString(Routes, request.url!, context),
    assetPath(src) {
      if (process.env.NODE_ENV === 'development') {
        return `//localhost:8081/dist/${src}`;
      }

      return src;
    },
    serverRendered: true,
  });

  resp.write(`<!DOCTYPE html>${appShell}`);
  resp.end();
});

server.listen(3000);
logger('Started backend on 3000');


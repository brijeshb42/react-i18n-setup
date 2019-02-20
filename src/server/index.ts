import { createServer } from 'http';
import { StaticRouter } from 'react-router';
import ReactDOMServer from 'react-dom/server';

import Routes from '../shared/routes';

import { render, renderToString } from './template';

const server = createServer((request, resp) => {
  const context = {};

  const appShell = render({
    title: 'i18n example',
    lang: 'en',
    html: renderToString(Routes, request.url!, context),
    assetPath(src) {
      if (process.env.NODE_ENV === 'development') {
        return `//localhost:8081/dist/${src}`;
      }

      return src;
    }
  });

  resp.write(`<!DOCTYPE html>${appShell}`);
  resp.end();
});

console.log('Started backend on 3000');
server.listen(3000);


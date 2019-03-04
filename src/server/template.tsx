import React, { ComponentType }from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';

interface HeadProps {
  title: string,
  lang: string,
  html: string,
  serverRendered: boolean,
  assetPath: (src: string) => string,
}

function Template(props: HeadProps) {
  return (
    <html lang={props.lang}>
      <head>
        <meta charSet="utf-8" />
        <title>{props.title}</title>
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: props.html }} />
        <script>
          {`(function(w) {
              var r = ${JSON.stringify(props.serverRendered)};
              w.isServerRendered = function() {
                return r;
              };
          })(window);`}
        </script>
        <script src={props.assetPath('main.js')} />
      </body>
    </html>
  );
}

export function render(props: HeadProps) {
  return ReactDOMServer.renderToStaticMarkup(<Template {...props} />);
}

function renderApp(MainComponent: ComponentType, url: string, context: Object) {
  return (
    <StaticRouter location={url} context={context}>
      <MainComponent />
    </StaticRouter>
  );
}

export function renderToString(MainComponent: ComponentType, url: string, context: Object) {
  const content = renderApp(MainComponent, url, context);
  return ReactDOMServer.renderToString(content);
}


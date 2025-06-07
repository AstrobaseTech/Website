// https://astro.build/config

import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import starlightTypeDoc, { typeDocSidebarGroup } from 'starlight-typedoc';
import astrobaseTypedocConfig from './astrobase/typedoc.json';

export default defineConfig({
  site: 'https://astrobase.me',

  integrations: [
    starlight({
      title: 'Astrobase',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/AstrobaseTech' },
        { icon: 'x.com', label: 'X/Twitter', href: 'https://x.com/librebase' },
      ],
      sidebar: [typeDocSidebarGroup],
      customCss: ['./src/styles/global.css'],
      plugins: [
        starlightTypeDoc({
          tsconfig: './astrobase/tsconfig.json',
          entryPoints: astrobaseTypedocConfig.entryPoints.map(
            (path) => `./astrobase/${path.slice(2)}`,
          ),
          typeDoc: {
            name: astrobaseTypedocConfig.name,
          },
          output: 'sdk/docs/api',
          sidebar: {
            label: 'API Reference',
          },
        }),
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});

// https://astro.build/config

import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import starlightTypeDoc, { typeDocSidebarGroup } from 'starlight-typedoc';

import astrobasePackageJson from './astrobase/package.json';
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
      sidebar: [
        { label: `Astrobase SDK v${astrobasePackageJson.version}`, slug: 'sdk/docs' },
        { label: 'Concepts', autogenerate: { directory: 'sdk/docs/concepts' } },
        { label: 'Guides', autogenerate: { directory: 'sdk/docs/guides' } },
        typeDocSidebarGroup,
      ],
      customCss: ['./src/styles/global.css'],
      plugins: [
        starlightTypeDoc({
          tsconfig: './astrobase/tsconfig.json',
          entryPoints: astrobaseTypedocConfig.entryPoints.map(
            (path) => `./astrobase/${path.slice(2)}`,
          ),
          output: 'sdk/docs/api',
          sidebar: {
            collapsed: true,
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

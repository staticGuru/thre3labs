/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent } from '../astro.a71d5b5b.mjs';
import { b as $$404 } from './404.astro.6b77d0d5.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
/* empty css                         */
const $$Astro = createAstro("https://astroship.web3templates.com");
const $$Any = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Any;
  Astro2.params;
  return renderTemplate`${renderComponent($$result, "Page_404", $$404, {})}`;
}, "E:/Upwork projects/Nikesh_web3/thre3labs-demo/src/pages/any.astro", void 0);

const $$file = "E:/Upwork projects/Nikesh_web3/thre3labs-demo/src/pages/any.astro";
const $$url = "/any";

export { $$Any as default, $$file as file, $$url as url };

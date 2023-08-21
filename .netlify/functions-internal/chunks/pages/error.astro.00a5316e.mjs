/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead } from '../astro.a71d5b5b.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';

const $$Astro = createAstro("https://astroship.web3templates.com");
const $$Error = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Error;
  return renderTemplate`${maybeRenderHead()}<article>
  <h1>Oops, something went wrong!</h1>
  <p>We apologize, but we couldn't fetch the data for this page.</p>
  <p>Please try again later.</p>
</article>`;
}, "E:/Upwork projects/Nikesh_web3/thre3labs-demo/src/pages/error.astro", void 0);

const $$file = "E:/Upwork projects/Nikesh_web3/thre3labs-demo/src/pages/error.astro";
const $$url = "/error";

export { $$Error as default, $$file as file, $$url as url };

/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, b as addAttribute } from '../astro.a71d5b5b.mjs';
import { c as $$Link, $ as $$Container, a as $$Layout } from './404.astro.52632069.mjs';
import { $ as $$Icon } from './contact.astro.d6986a91.mjs';
import { a as $$Picture, d as getHomeContents } from './about.astro.9bacbb97.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
/* empty css                         */import 'svgo';
/* empty css                             */import 'node:fs/promises';
import 'node:path';
import 'node:url';
import 'http-cache-semantics';
import 'node:os';
import 'image-size';
import 'magic-string';
import 'node:stream';
import 'dotenv';
import 'prop-types';

const $$Astro$4 = createAstro("https://astroship.web3templates.com");
const $$Cta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Cta;
  const {
    data: { contextTitle, contextDescription, button }
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-black p-8 md:px-20 md:py-20 mt-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center">
  <h2 class="text-white text-4xl md:text-6xl tracking-tight">
    ${contextTitle}
  </h2>
  <p class="text-slate-400 mt-4 text-lg md:text-xl">
    ${contextDescription}
  </p>
  <div class="flex mt-5">
    ${renderComponent($$result, "Link", $$Link, { "href": button?.url, "style": "inverted" }, { "default": ($$result2) => renderTemplate`${button?.title}` })}
  </div>
</div>`;
}, "E:/Upwork projects/Nikesh_web3/thre3labs-demo/src/components/cta.astro", void 0);

const $$Astro$3 = createAstro("https://astroship.web3templates.com");
const $$Features = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Features;
  const {
    data: { contextTitle, contextDescription, featuresList }
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mt-16 md:mt-0">
  <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
    ${contextTitle}
  </h2>
  <p class="text-lg mt-4 text-slate-600">
    ${contextDescription}
  </p>
</div>

<div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
  ${Object.values(featuresList).map((feature, index) => renderTemplate`<div class="flex gap-4 items-start"${addAttribute(index, "key")}>
        <div class="mt-1 bg-black rounded-full  p-2 w-8 h-8 shrink-0">
          ${renderComponent($$result, "Icon", $$Icon, { "class": "text-white", "name": feature?.featureIcon })}
        </div>
        <div>
          <h3 class="font-semibold text-lg">${feature?.featureTitle}</h3>
          <p class="text-slate-500 mt-2 leading-relaxed">
            ${feature?.featureDescription}
          </p>
        </div>
      </div>`)}
</div>`;
}, "E:/Upwork projects/Nikesh_web3/thre3labs-demo/src/components/features.astro", void 0);

const defaultHeroImage = {"src":"/_astro/hero.6fdd0dc6.png","width":520,"height":424,"format":"png"};

const $$Astro$2 = createAstro("https://astroship.web3templates.com");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Hero;
  const { data } = Astro2.props;
  let {
    contextTitle = "",
    contextDescription = "",
    heroImage = {},
    buttonA = {},
    buttonB = {}
  } = data;
  return renderTemplate`${maybeRenderHead()}<main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24">
  <div class="py-6 md:order-1 hidden md:block">
    ${renderComponent($$result, "Picture", $$Picture, { "src": heroImage?.mediaItemUrl ?? defaultHeroImage, "alt": "Astronaut in the air", "widths": [200, 400, 600], "aspectRatio": "4:3", "sizes": "(max-width: 800px) 100vw, 620px", "loading": "eager", "format": "avif", "onerror": "this.onerror=null;this.src='https://placeimg.com/200/300/animals';" })}
  </div>
  <div>
    <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
      ${contextTitle}
    </h1>
    <p class="text-lg mt-4 text-slate-600 max-w-xl">
      ${contextDescription}
    </p>
    <div class="mt-6 flex flex-col sm:flex-row gap-3">
      ${renderComponent($$result, "Link", $$Link, { "href": buttonA?.url ?? "#", "target": "_blank", "class": "flex gap-1 items-center justify-center", "rel": "noopener" }, { "default": ($$result2) => renderTemplate`
        ${renderComponent($$result2, "Icon", $$Icon, { "class": "text-white w-5 h-5", "name": "bx:bxs-phone" })}
        ${buttonA?.title}` })}
      ${renderComponent($$result, "Link", $$Link, { "size": "lg", "style": "outline", "rel": "noopener", "href": buttonB?.url ?? "#", "class": "flex gap-1 items-center justify-center", "target": "_blank" }, { "default": ($$result2) => renderTemplate`
        ${renderComponent($$result2, "Icon", $$Icon, { "class": "text-black w-4 h-4", "name": "bx:bxl-github" })}
        ${buttonB?.title}` })}
    </div>
  </div>
</main>`;
}, "E:/Upwork projects/Nikesh_web3/thre3labs-demo/src/components/hero.astro", void 0);

const $$Astro$1 = createAstro("https://astroship.web3templates.com");
const $$Logos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Logos;
  const {
    data: { contextTitle, logos }
  } = Astro2.props;
  const perChunk = 4;
  const result = Object.values(logos).reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, [])?.reverse();
  const [row1, row2, row3] = result;
  return renderTemplate`${maybeRenderHead()}<div class="mt-24">
  <h2 class="text-center text-slate-500">
    ${contextTitle}
  </h2>
  <div class="flex gap-8 md:gap-20 items-center justify-center mt-10 flex-wrap">
    ${row1?.map((logo) => renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "class": "h-8 md:h-10", "name": logo })}`)}
  </div>
  <div class="flex gap-8 md:gap-20 items-center justify-center mt-10 flex-wrap">
    ${row2?.map((logo) => renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "class": "h-8 md:h-10", "name": logo })}`)}
  </div>
  <div class="flex gap-8 md:gap-20 items-center justify-center mt-10 flex-wrap">
    ${row3?.map((logo) => renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "class": "h-8 md:h-10", "name": logo })}`)}
  </div>
</div>`;
}, "E:/Upwork projects/Nikesh_web3/thre3labs-demo/src/components/logos.astro", void 0);

const $$Astro = createAstro("https://astroship.web3templates.com");
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let data = await getHomeContents();
  let pages = "";
  if (data?.pages) {
    pages = data.pages?.edges?.[0]?.node?.homeSections;
  }
  const {
    heroSection = {},
    featuresSection = {},
    logoList = {},
    ctaSection = {}
  } = pages;
  const logout = () => {
    if (!Astro2.cookies.has("userInfo")) {
      Astro2.redirect("/signin");
    }
  };
  const user = Astro2.cookies.get("userInfo");
  if (!user.value) {
    return Astro2.redirect("/signin");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "", "logout": () => logout() }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
    ${renderComponent($$result3, "Hero", $$Hero, { "data": heroSection })}
    ${renderComponent($$result3, "Features", $$Features, { "data": featuresSection })}
    ${renderComponent($$result3, "Logos", $$Logos, { "data": logoList })}
    ${renderComponent($$result3, "Cta", $$Cta, { "data": ctaSection })}
  ` })}
` })}`;
}, "E:/Upwork projects/Nikesh_web3/thre3labs-demo/src/pages/index.astro", void 0);

const $$file = "E:/Upwork projects/Nikesh_web3/thre3labs-demo/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, prerender, $$url as url };

/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, F as Fragment, m as maybeRenderHead, b as addAttribute } from '../astro.a71d5b5b.mjs';
import { $ as $$Sectionhead, a as $$Picture } from './about.astro.94ca3f07.mjs';
import { $ as $$Container, a as $$Layout } from './404.astro.cc71b858.mjs';
import { a as getPosts, f as formatDate } from './_slug_.astro.f152fb60.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
import 'node:fs/promises';
import 'node:path';
import 'node:url';
import 'http-cache-semantics';
import 'node:os';
import 'image-size';
import 'magic-string';
import 'node:stream';
/* empty css                         */import 'dotenv';

const $$Astro = createAstro("https://astroship.web3templates.com");
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const posts = await getPosts();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
    ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`
        We write about building startups and thoughts going on our mind.
      ` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`Our Blog` })}` })}
    ${maybeRenderHead()}<main class="mt-16">
      <ul class="grid gap-16 max-w-4xl mx-auto">
        ${posts?.map((post, index) => renderTemplate`<li>
              <a${addAttribute(`/blog/${post?.slug}`, "href")}>
                <div class="grid md:grid-cols-2 gap-5 md:gap-10 items-center">
                  ${renderComponent($$result3, "Picture", $$Picture, { "src": post?._embedded?.["wp:featuredmedia"]?.["0"]?.source_url, "alt": post?.title?.rendered, "sizes": "(max-width: 800px) 100vw, 800px", "widths": [200, 400, 800], "aspectRatio": "16:9", "background": "#ffffff", "fit": "cover", "position": "center", "loading": index <= 2 ? "eager" : "lazy", "decoding": index <= 2 ? "sync" : "async", "class": "w-full rounded-md" })}
                  <div>
                    <span class="text-blue-400 uppercase tracking-wider text-sm font-medium">
                      ${post?._embedded?.["wp:term"]?.["0"]?.[0]?.name}
                    </span>

                    <h2 class="text-3xl font-semibold leading-snug tracking-tight mt-1 ">
                      ${post?.title?.rendered}
                    </h2>

                    <div class="flex gap-2 mt-3">
                      <span class="text-gray-400">
                        ${post?._embedded?.["author"]?.["0"]?.name}
                      </span>
                      <span class="text-gray-400">• </span>
                      <time class="text-gray-400"${addAttribute(formatDate(post?.date), "datetime")}>
                        ${formatDate(post?.date)}
                      </time>
                    </div>
                  </div>
                </div>
              </a>
            </li>`)}
      </ul>
    </main>
  ` })}
` })}`;
}, "E:/Upwork projects/Nikesh_web3/thre3labs-demo/src/pages/blog.astro", void 0);

const $$file = "E:/Upwork projects/Nikesh_web3/thre3labs-demo/src/pages/blog.astro";
const $$url = "/blog";

export { $$Blog as default, $$file as file, $$url as url };

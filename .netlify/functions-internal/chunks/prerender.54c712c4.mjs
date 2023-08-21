/* empty css                        */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, b as addAttribute, F as Fragment, u as unescapeHTML } from './astro.a71d5b5b.mjs';
import { $ as $$Container, a as $$Layout } from './pages/404.astro.e345295d.mjs';
import { g as getPosts } from './pages/about.astro.87cec5d7.mjs';
import { f as formatDate } from './pages/blog.astro.9447951f.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
/* empty css                        */import 'node:fs/promises';
import 'node:path';
import 'node:url';
import 'http-cache-semantics';
import 'node:os';
import 'image-size';
import 'magic-string';
import 'node:stream';
import 'dotenv';
import 'prop-types';
import 'js-cookie';

const $$Astro = createAstro("https://astroship.web3templates.com");
const prerender = true;
async function getStaticPaths() {
  let posts = await getPosts();
  function getTags(data) {
    if (!data)
      return [];
    const tags = data?.map((item) => item?.name || "tags");
    return tags;
  }
  function getCategoryTitle(data) {
    if (!data)
      return "";
    return data?.[0]?.name;
  }
  return posts?.map((post) => {
    return {
      params: { slug: post.slug },
      props: {
        title: post?.title?.rendered,
        content: post?.content?.rendered,
        category: getCategoryTitle(post?._embedded?.["wp:term"]?.["0"]),
        author: post?._embedded?.["author"]?.["0"]?.name,
        tags: getTags(post?._embedded?.["wp:term"]?.["1"]),
        date: formatDate(post?.date),
        image: post?._embedded?.["wp:featuredmedia"]?.["0"]?.source_url,
        // Spreading the Custom Fields into a meta object
        meta: {
          ...post?.acf
        }
      }
    };
  });
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  Astro2.params;
  const {
    title = "",
    content = "",
    author = "",
    category = "",
    date = "",
    tags = [],
    image = "",
    meta = ""
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
    ${maybeRenderHead()}<div class="mx-auto max-w-[735px] mt-14">
      <span class="text-blue-400 uppercase tracking-wider text-sm font-medium">
        ${category}
      </span>
      <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight mt-1 lg:leading-tight">
        ${title}
      </h1>
      <div class="flex gap-2 mt-3 items-center flex-wrap md:flex-nowrap">
        <span class="text-gray-400">
          ${author}
        </span>
        <span class="text-gray-400">•</span>
        <time class="text-gray-400"${addAttribute(date, "datetime")}>
          ${date}
        </time>
        ${tags?.length ? renderTemplate`<span class="text-gray-400 hidden md:block">•</span>` : null}
        <div class="w-full md:w-auto flex flex-wrap gap-3">
          ${tags?.map((tag) => renderTemplate`<span class="text-sm text-gray-500">#${tag}</span>`)}
        </div>
      </div>
    </div>

    <div class="mx-auto prose prose-lg mt-6">
      ${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${unescapeHTML(content)}` })}
    </div>
    <div class="text-center mt-8">
      <a href="/blog" class="bg-gray-100 px-5 py-3 rounded-md hover:bg-gray-200 transition">← Back to Blog</a>
    </div>
  ` })}
` })}`;
}, "E:/Upwork projects/Nikesh_web3/thre3labs-demo/src/pages/blog/[slug].astro", void 0);

const $$file = "E:/Upwork projects/Nikesh_web3/thre3labs-demo/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

export { $$slug as default, $$file as file, getStaticPaths, prerender, $$url as url };

/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderSlot, s as spreadAttributes, u as unescapeHTML, e as renderComponent, F as Fragment, f as renderHead } from '../astro.a71d5b5b.mjs';
/* empty css                         */
const $$Astro$k = createAstro("https://astroship.web3templates.com");
const $$Container = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Container;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["max-w-screen-xl mx-auto px-5", className], "class:list")}>
  ${renderSlot($$result, $$slots["default"])}
</div>`;
}, "E:/Upwork projects/Nikesh_web3/thre3labs-demo/src/components/container.astro", void 0);

const $$Astro$j = createAstro("https://astroship.web3templates.com");
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Link;
  const {
    href,
    block,
    size = "lg",
    style = "primary",
    class: className,
    ...rest
  } = Astro2.props;
  const sizes = {
    lg: "px-5 py-2.5",
    md: "px-4 py-2"
  };
  const styles = {
    outline: "bg-white border-2 border-black hover:bg-gray-100 text-black ",
    primary: "bg-black text-white hover:bg-gray-800  border-2 border-transparent",
    inverted: "bg-white text-black   border-2 border-transparent",
    muted: "bg-gray-100 hover:bg-gray-200   border-2 border-transparent"
  };
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${spreadAttributes(rest)}${addAttribute([
    "rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200",
    block && "w-full",
    sizes[size],
    styles[style],
    className
  ], "class:list")}>${renderSlot($$result, $$slots["default"])}
</a>`;
}, "E:/Upwork projects/Nikesh_web3/thre3labs-demo/src/components/ui/link.astro", void 0);

const $$Astro$i = createAstro("https://astroship.web3templates.com");
const $$OpenGraphArticleTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}
${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}
${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}
${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}
${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}
${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "E:/Upwork projects/Nikesh_web3/thre3labs-demo/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$h = createAstro("https://astroship.web3templates.com");
const $$OpenGraphBasicTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}>
<meta property="og:type"${addAttribute(openGraph.basic.type, "content")}>
<meta property="og:image"${addAttribute(openGraph.basic.image, "content")}>
<meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "E:/Upwork projects/Nikesh_web3/thre3labs-demo/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$g = createAstro("https://astroship.web3templates.com");
const $$OpenGraphImageTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>
${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}
${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}
${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}
${!(height === null) ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}
${!(alt === null) ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "E:/Upwork projects/Nikesh_web3/thre3labs-demo/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$f = createAstro("https://astroship.web3templates.com");
const $$OpenGraphOptionalTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}
${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}
${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}
${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}
${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}
${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}
${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "E:/Upwork projects/Nikesh_web3/thre3labs-demo/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$e = createAstro("https://astroship.web3templates.com");
const $$ExtendedTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}
${props.extend.meta?.map(({ content, httpEquiv, name, property }) => renderTemplate`<meta${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(name, "name")}${addAttribute(property, "property")}>`)}`;
}, "E:/Upwork projects/Nikesh_web3/thre3labs-demo/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$d = createAstro("https://astroship.web3templates.com");
const $$TwitterTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}
${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}
${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}
${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}
${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}
${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}
${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "E:/Upwork projects/Nikesh_web3/thre3labs-demo/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$c = createAstro("https://astroship.web3templates.com");
const $$SEO = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || props.openGraph.basic.title == null || props.openGraph.basic.type == null || props.openGraph.basic.image == null) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is stongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}

${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}

<link rel="canonical"${addAttribute(Astro2.props.canonical || Astro2.url.href, "href")}>

${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}

<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>

${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}
${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}
${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}
${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}
${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}
${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}`;
}, "E:/Upwork projects/Nikesh_web3/thre3labs-demo/node_modules/astro-seo/src/SEO.astro", void 0);

const $$Astro$b = createAstro("https://astroship.web3templates.com");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="my-20">
  <p class="text-center text-sm text-slate-500">
    Copyright © ${( new Date()).getFullYear()} Thre3 Labs. All rights reserved.
  </p>
  <!--
    Can we ask you a favor 🙏
    Please keep this backlink on your website if possible.
    or Purchase a commercial license from https://web3templates.com
  -->
  <p class="text-center text-xs text-slate-500 mt-1">
    Made by <a href="https://twitter.com/nikeshjs" target="_blank" rel="noopener" class="hover:underline">
      @nikeshjs
    </a>
  </p>
</footer>`;
}, "E:/Upwork projects/Nikesh_web3/thre3labs-demo/src/components/footer.astro", void 0);

const $$Astro$a = createAstro("https://astroship.web3templates.com");
const $$Astronav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Astronav;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}

`;
}, "E:/Upwork projects/Nikesh_web3/thre3labs-demo/node_modules/astro-navbar/src/Astronav.astro", void 0);

const $$Astro$9 = createAstro("https://astroship.web3templates.com");
const $$MenuIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$MenuIcon;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button id="astronav-menu">
  ${renderSlot($$result, $$slots["default"], renderTemplate`
    <svg fill="currentColor"${addAttribute([className], "class:list")} width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <title>Menu</title>
      <path class="astronav-toggle hidden" fill-rule="evenodd" clip-rule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"></path>
      <path class="astronav-toggle" fill-rule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"></path>
    </svg>
  `)}
</button>`;
}, "E:/Upwork projects/Nikesh_web3/thre3labs-demo/node_modules/astro-navbar/src/components/MenuIcon.astro", void 0);

const $$Astro$8 = createAstro("https://astroship.web3templates.com");
const $$OpenIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$OpenIcon;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["astronav-toggle", className], "class:list")}>${renderSlot($$result, $$slots["default"])}</span>`;
}, "E:/Upwork projects/Nikesh_web3/thre3labs-demo/node_modules/astro-navbar/src/components/OpenIcon.astro", void 0);

const $$Astro$7 = createAstro("https://astroship.web3templates.com");
const $$CloseIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$CloseIcon;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["astronav-toggle hidden", className], "class:list")}>${renderSlot($$result, $$slots["default"])}</span>`;
}, "E:/Upwork projects/Nikesh_web3/thre3labs-demo/node_modules/astro-navbar/src/components/CloseIcon.astro", void 0);

const $$Astro$6 = createAstro("https://astroship.web3templates.com");
const $$MenuItems = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$MenuItems;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(["astronav-toggle", className], "class:list")}>
    ${renderSlot($$result, $$slots["default"])}
</nav>`;
}, "E:/Upwork projects/Nikesh_web3/thre3labs-demo/node_modules/astro-navbar/src/components/MenuItems.astro", void 0);

const $$Astro$5 = createAstro("https://astroship.web3templates.com");
const $$Dropdown$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Dropdown$1;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<menu${addAttribute(["astronav-dropdown", className], "class:list")} aria-expanded="false">${renderSlot($$result, $$slots["default"])}</menu>`;
}, "E:/Upwork projects/Nikesh_web3/thre3labs-demo/node_modules/astro-navbar/src/components/Dropdown.astro", void 0);

const $$Astro$4 = createAstro("https://astroship.web3templates.com");
const $$DropdownItems = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$DropdownItems;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["dropdown-toggle hidden", className], "class:list")}>${renderSlot($$result, $$slots["default"])}</div>`;
}, "E:/Upwork projects/Nikesh_web3/thre3labs-demo/node_modules/astro-navbar/src/components/DropdownItems.astro", void 0);

const $$Astro$3 = createAstro("https://astroship.web3templates.com");
const $$Dropdown = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Dropdown;
  const { title, lastItem, children } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="relative">
  ${renderComponent($$result, "Dropdown", $$Dropdown$1, { "class": "group" }, { "default": ($$result2) => renderTemplate`
    <button class="flex items-center gap-1 w-full lg:w-auto lg:px-3 py-2 text-gray-600 hover:text-gray-900">
      <span>${title}</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-3 h-3 mt-0.5 group-open:rotate-180">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
      </svg>
    </button>
    ${renderComponent($$result2, "DropdownItems", $$DropdownItems, {}, { "default": ($$result3) => renderTemplate`
      <div${addAttribute([
    "lg:absolute w-full lg:w-48 z-10",
    lastItem ? "lg:right-0 origin-top-right" : "lg:left-0 origin-top-left"
  ], "class:list")}>
        <div class="px-3 lg:py-2 lg:bg-white lg:rounded-md lg:shadow lg:border flex flex-col">
          ${children.map((item) => renderTemplate`<a${addAttribute(item.path, "href")} class="py-1 text-gray-600 hover:text-gray-900">
                ${item.title}
              </a>`)}
        </div>
      </div>
    ` })}
  ` })}
</li>`;
}, "E:/Upwork projects/Nikesh_web3/thre3labs-demo/src/components/navbar/dropdown.astro", void 0);

const Logo = "/_astro/logo.8c405708.svg";

const $$Astro$2 = createAstro("https://astroship.web3templates.com");
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navbar;
  const menuitems = [
    {
      title: "Services",
      path: "#",
      children: [
        { title: "Smart Contracts", path: "#" },
        { title: "Website Development", path: "#" },
        { title: "DApp Development", path: "#" }
      ]
    },
    {
      title: "Pricing",
      path: "/pricing"
    },
    {
      title: "About",
      path: "/about"
    },
    {
      title: "Blog",
      path: "/blog"
    },
    {
      title: "Contact",
      path: "/contact"
    }
  ];
  console.log("welcomeeee", Astro2.request.method);
  if (Astro2.request.method === "POST") {
    Astro2.cookies.delete("userInfo");
    return Astro2.redirect("/signin");
  }
  const IsUser = Astro2.cookies.get("userInfo")?.value;
  Astro2.cookies.set("userInfo", "");
  console.log("IsUser", IsUser);
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<header class="flex flex-col lg:flex-row justify-between items-center my-5">
    ${renderComponent($$result2, "Astronav", $$Astronav, {}, { "default": ($$result3) => renderTemplate`
      <div class="flex w-full lg:w-auto items-center justify-between">
        <a href="https://thre3labs.com/" class="flex items-center">
          <img${addAttribute(Logo, "src")} class="h-6 mr-3 sm:h-9" alt="Thre3 Labs Logo">
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Thre3 Lab</span>
        </a>
        <div class="block lg:hidden">
          ${renderComponent($$result3, "MenuIcon", $$MenuIcon, { "class": "w-4 h-4 text-gray-800" })}
        </div>
      </div>
      ${renderComponent($$result3, "MenuItems", $$MenuItems, { "class": "hidden w-full lg:w-auto mt-2 lg:flex lg:mt-0" }, { "default": ($$result4) => renderTemplate`
        <ul class="flex flex-col lg:flex-row lg:gap-3">
          ${menuitems.map((item, index) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, {}, { "default": ($$result5) => renderTemplate`${item.children && renderTemplate`${renderComponent($$result5, "Dropdown", $$Dropdown, { "title": item.title, "children": item.children, "lastItem": index === menuitems.length - 1 })}`}${!item.children && renderTemplate`<li>
                    <a${addAttribute(item.path, "href")} class="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900">
                      ${item.title}
                    </a>
                  </li>`}` })}`)}
        </ul>
        <div class="lg:hidden flex items-center mt-3 gap-4">
          ${renderComponent($$result4, "Link", $$Link, { "href": "#", "style": "muted", "block": true, "size": "md" }, { "default": ($$result5) => renderTemplate`Log in` })}
          ${renderComponent($$result4, "Link", $$Link, { "href": "#", "size": "md", "block": true }, { "default": ($$result5) => renderTemplate`Sign up` })}
        </div>
      ` })}
    ` })}
    <div>
      <div class="hidden lg:flex items-center gap-4">
        ${IsUser ? renderTemplate`<form method="POST">
              <button name="logout" type="submit">
                Log out
              </button>
            </form>` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`
              ${renderComponent($$result3, "Link", $$Link, { "href": "/signin", "size": "md" }, { "default": ($$result4) => renderTemplate`
                Log in
              ` })}
              ${renderComponent($$result3, "Link", $$Link, { "href": "/signup", "size": "md" }, { "default": ($$result4) => renderTemplate`
                Sign up
              ` })}
            ` })}`}
      </div>
    </div>
  </header>
` })}`;
}, "E:/Upwork projects/Nikesh_web3/thre3labs-demo/src/components/navbar/navbar.astro", void 0);

const $$Astro$1 = createAstro("https://astroship.web3templates.com");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site).toString();
  const resolvedImageWithDomain = new URL(
    "/opengraph.jpg",
    Astro2.site
  ).toString();
  const { title } = Astro2.props;
  const makeTitle = title ? title + " | Astroship" : "Thre3 Labs | W\u039EB3";
  return renderTemplate`<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>

    <!-- <link rel="preload" as="image" href={src} alt="Hero" /> -->
    ${renderComponent($$result, "SEO", $$SEO, { "title": makeTitle, "description": "Astroship is a starter website template for Astro built with TailwindCSS.", "canonical": canonicalURL, "twitter": {
    creator: "@surjithctly",
    site: "@web3templates",
    card: "summary_large_image"
  }, "openGraph": {
    basic: {
      url: canonicalURL,
      type: "website",
      title: `Astroship - Starter Template for Astro`,
      image: resolvedImageWithDomain
    },
    image: {
      alt: "Astroship Homepage Screenshot"
    }
  } })}
  ${renderHead()}</head>
  <body>
    ${renderComponent($$result, "Navbar", $$Navbar, {})}
    ${renderSlot($$result, $$slots["default"])}
    ${renderComponent($$result, "Footer", $$Footer, {})}
    
  </body>
</html>`;
}, "E:/Upwork projects/Nikesh_web3/thre3labs-demo/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro("https://astroship.web3templates.com");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Not Found" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<h1>Error <span class="text-gradient">Page</span> hanlding</h1>
` })}`;
}, "E:/Upwork projects/Nikesh_web3/thre3labs-demo/src/pages/404.astro", void 0);

const $$file = "E:/Upwork projects/Nikesh_web3/thre3labs-demo/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Container as $, Logo as L, _404 as _, $$Layout as a, $$404 as b, $$Link as c };

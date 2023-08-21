import 'kleur/colors';
import 'node:fs/promises';
import 'node:path';
import 'node:url';
import 'http-cache-semantics';
import 'node:os';
import 'image-size';
import 'magic-string';
import 'node:stream';
import mime from 'mime';
/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, b as addAttribute, d as renderSlot, e as renderComponent, F as Fragment } from '../astro.a71d5b5b.mjs';
import { $ as $$Container, a as $$Layout } from './404.astro.52632069.mjs';
import dotenv from 'dotenv';
import PropTypes from 'prop-types';

function isOutputFormat(value) {
  return ["avif", "jpeg", "jpg", "png", "webp"].includes(value);
}
function isOutputFormatSupportsAlpha(value) {
  return ["avif", "png", "webp"].includes(value);
}
function isAspectRatioString(value) {
  return /^\d*:\d*$/.test(value);
}
function parseAspectRatio(aspectRatio) {
  if (!aspectRatio) {
    return void 0;
  }
  if (typeof aspectRatio === "number") {
    return aspectRatio;
  } else {
    const [width, height] = aspectRatio.split(":");
    return parseInt(width) / parseInt(height);
  }
}
function isSSRService(service) {
  return "transform" in service;
}
class BaseSSRService {
  async getImageAttributes(transform) {
    const { width, height, src, format, quality, aspectRatio, ...rest } = transform;
    return {
      ...rest,
      width,
      height
    };
  }
  serializeTransform(transform) {
    const searchParams = new URLSearchParams();
    if (transform.quality) {
      searchParams.append("q", transform.quality.toString());
    }
    if (transform.format) {
      searchParams.append("f", transform.format);
    }
    if (transform.width) {
      searchParams.append("w", transform.width.toString());
    }
    if (transform.height) {
      searchParams.append("h", transform.height.toString());
    }
    if (transform.aspectRatio) {
      searchParams.append("ar", transform.aspectRatio.toString());
    }
    if (transform.fit) {
      searchParams.append("fit", transform.fit);
    }
    if (transform.background) {
      searchParams.append("bg", transform.background);
    }
    if (transform.position) {
      searchParams.append("p", encodeURI(transform.position));
    }
    searchParams.append("href", transform.src);
    return { searchParams };
  }
  parseTransform(searchParams) {
    if (!searchParams.has("href")) {
      return void 0;
    }
    let transform = { src: searchParams.get("href") };
    if (searchParams.has("q")) {
      transform.quality = parseInt(searchParams.get("q"));
    }
    if (searchParams.has("f")) {
      const format = searchParams.get("f");
      if (isOutputFormat(format)) {
        transform.format = format;
      }
    }
    if (searchParams.has("w")) {
      transform.width = parseInt(searchParams.get("w"));
    }
    if (searchParams.has("h")) {
      transform.height = parseInt(searchParams.get("h"));
    }
    if (searchParams.has("ar")) {
      const ratio = searchParams.get("ar");
      if (isAspectRatioString(ratio)) {
        transform.aspectRatio = ratio;
      } else {
        transform.aspectRatio = parseFloat(ratio);
      }
    }
    if (searchParams.has("fit")) {
      transform.fit = searchParams.get("fit");
    }
    if (searchParams.has("p")) {
      transform.position = decodeURI(searchParams.get("p"));
    }
    if (searchParams.has("bg")) {
      transform.background = searchParams.get("bg");
    }
    return transform;
  }
}

function isRemoteImage(src) {
  return /^(https?:)?\/\//.test(src);
}
function removeQueryString(src) {
  const index = src.lastIndexOf("?");
  return index > 0 ? src.substring(0, index) : src;
}
function extname(src) {
  const base = basename(src);
  const index = base.lastIndexOf(".");
  if (index <= 0) {
    return "";
  }
  return base.substring(index);
}
function basename(src) {
  return removeQueryString(src.replace(/^.*[\\\/]/, ""));
}

function resolveSize(transform) {
  if (transform.width && transform.height) {
    return transform;
  }
  if (!transform.width && !transform.height) {
    throw new Error(`"width" and "height" cannot both be undefined`);
  }
  if (!transform.aspectRatio) {
    throw new Error(
      `"aspectRatio" must be included if only "${transform.width ? "width" : "height"}" is provided`
    );
  }
  let aspectRatio;
  if (typeof transform.aspectRatio === "number") {
    aspectRatio = transform.aspectRatio;
  } else {
    const [width, height] = transform.aspectRatio.split(":");
    aspectRatio = Number.parseInt(width) / Number.parseInt(height);
  }
  if (transform.width) {
    return {
      ...transform,
      width: transform.width,
      height: Math.round(transform.width / aspectRatio)
    };
  } else if (transform.height) {
    return {
      ...transform,
      width: Math.round(transform.height * aspectRatio),
      height: transform.height
    };
  }
  return transform;
}
async function resolveTransform(input) {
  if (typeof input.src === "string") {
    return resolveSize(input);
  }
  const metadata = "then" in input.src ? (await input.src).default : input.src;
  let { width, height, aspectRatio, background, format = metadata.format, ...rest } = input;
  if (!width && !height) {
    width = metadata.width;
    height = metadata.height;
  } else if (width) {
    let ratio = parseAspectRatio(aspectRatio) || metadata.width / metadata.height;
    height = height || Math.round(width / ratio);
  } else if (height) {
    let ratio = parseAspectRatio(aspectRatio) || metadata.width / metadata.height;
    width = width || Math.round(height * ratio);
  }
  return {
    ...rest,
    src: metadata.src,
    width,
    height,
    aspectRatio,
    format,
    background
  };
}
async function getImage(transform) {
  var _a, _b, _c;
  if (!transform.src) {
    throw new Error("[@astrojs/image] `src` is required");
  }
  let loader = (_a = globalThis.astroImage) == null ? void 0 : _a.loader;
  if (!loader) {
    const { default: mod } = await import('./endpoint.js.a6e7c548.mjs').then(n => n.s).catch(() => {
      throw new Error(
        "[@astrojs/image] Builtin image loader not found. (Did you remember to add the integration to your Astro config?)"
      );
    });
    loader = mod;
    globalThis.astroImage = globalThis.astroImage || {};
    globalThis.astroImage.loader = loader;
  }
  const resolved = await resolveTransform(transform);
  const attributes = await loader.getImageAttributes(resolved);
  const isDev = (_b = (Object.assign({"BASE_URL":"/","MODE":"production","DEV":false,"PROD":true,"SSR":true,"SITE":"https://astroship.web3templates.com","ASSETS_PREFIX":undefined},{SSR:true,}))) == null ? void 0 : _b.DEV;
  const isLocalImage = !isRemoteImage(resolved.src);
  const _loader = isDev && isLocalImage ? globalThis.astroImage.defaultLoader : loader;
  if (!_loader) {
    throw new Error("@astrojs/image: loader not found!");
  }
  const { searchParams } = isSSRService(_loader) ? _loader.serializeTransform(resolved) : globalThis.astroImage.defaultLoader.serializeTransform(resolved);
  const imgSrc = !isLocalImage && resolved.src.startsWith("//") ? `https:${resolved.src}` : resolved.src;
  let src;
  if (/^[\/\\]?@astroimage/.test(imgSrc)) {
    src = `${imgSrc}?${searchParams.toString()}`;
  } else {
    searchParams.set("href", imgSrc);
    src = `/_image?${searchParams.toString()}`;
  }
  if ((_c = globalThis.astroImage) == null ? void 0 : _c.addStaticImage) {
    src = globalThis.astroImage.addStaticImage(resolved);
  }
  return {
    ...attributes,
    src
  };
}

async function resolveAspectRatio({ src, aspectRatio }) {
  if (typeof src === "string") {
    return parseAspectRatio(aspectRatio);
  } else {
    const metadata = "then" in src ? (await src).default : src;
    return parseAspectRatio(aspectRatio) || metadata.width / metadata.height;
  }
}
async function resolveFormats({ src, formats }) {
  const unique = new Set(formats);
  if (typeof src === "string") {
    unique.add(extname(src).replace(".", ""));
  } else {
    const metadata = "then" in src ? (await src).default : src;
    unique.add(extname(metadata.src).replace(".", ""));
  }
  return Array.from(unique).filter(Boolean);
}
async function getPicture(params) {
  const { src, alt, widths, fit, position, background } = params;
  if (!src) {
    throw new Error("[@astrojs/image] `src` is required");
  }
  if (!widths || !Array.isArray(widths)) {
    throw new Error("[@astrojs/image] at least one `width` is required. ex: `widths={[100]}`");
  }
  const aspectRatio = await resolveAspectRatio(params);
  if (!aspectRatio) {
    throw new Error("`aspectRatio` must be provided for remote images");
  }
  const allFormats = await resolveFormats(params);
  const lastFormat = allFormats[allFormats.length - 1];
  const maxWidth = Math.max(...widths);
  let image;
  async function getSource(format) {
    const imgs = await Promise.all(
      widths.map(async (width) => {
        const img = await getImage({
          src,
          alt,
          format,
          width,
          fit,
          position,
          background,
          aspectRatio
        });
        if (format === lastFormat && width === maxWidth) {
          image = img;
        }
        return `${img.src} ${width}w`;
      })
    );
    return {
      type: mime.getType(format) || format,
      srcset: imgs.join(",")
    };
  }
  const sources = await Promise.all(allFormats.map((format) => getSource(format)));
  return {
    sources,
    image
  };
}

const $$Astro$3 = createAstro("https://astroship.web3templates.com");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Image;
  const { loading = "lazy", decoding = "async", ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    warnForMissingAlt();
  }
  const attrs = await getImage(props);
  return renderTemplate`${maybeRenderHead()}<img${spreadAttributes(attrs)}${addAttribute(loading, "loading")}${addAttribute(decoding, "decoding")}>`;
}, "E:/Upwork projects/Nikesh_web3/thre3labs-demo/node_modules/@astrojs/image/components/Image.astro", void 0);

const $$Astro$2 = createAstro("https://astroship.web3templates.com");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Picture;
  const {
    src,
    alt,
    sizes,
    widths,
    aspectRatio,
    fit,
    background,
    position,
    formats = ["avif", "webp"],
    loading = "lazy",
    decoding = "async",
    ...attrs
  } = Astro2.props;
  if (alt === void 0 || alt === null) {
    warnForMissingAlt();
  }
  const { image, sources } = await getPicture({
    src,
    widths,
    formats,
    aspectRatio,
    fit,
    background,
    position,
    alt
  });
  delete image.width;
  delete image.height;
  return renderTemplate`${maybeRenderHead()}<picture>
	${sources.map((attrs2) => renderTemplate`<source${spreadAttributes(attrs2)}${addAttribute(sizes, "sizes")}>`)}
	<img${spreadAttributes(image)}${addAttribute(loading, "loading")}${addAttribute(decoding, "decoding")}${spreadAttributes(attrs)}>
</picture>`;
}, "E:/Upwork projects/Nikesh_web3/thre3labs-demo/node_modules/@astrojs/image/components/Picture.astro", void 0);

let altWarningShown = false;
function warnForMissingAlt() {
  if (altWarningShown === true) {
    return;
  }
  altWarningShown = true;
  console.warn(`
[@astrojs/image] "alt" text was not provided for an <Image> or <Picture> component.

A future release of @astrojs/image may throw a build error when "alt" text is missing.

The "alt" attribute holds a text description of the image, which isn't mandatory but is incredibly useful for accessibility. Set to an empty string (alt="") if the image is not a key part of the content (it's decoration or a tracking pixel).
`);
}

const GET_ABOUT_PAGE =`query ABOUT_PAGE {
     pages(where: {title: "about"}) {
       edges {
         node {
           aboutSections {
             contextTitle
             contextDescription
             pageTitle
             subTitle
             fieldGroupName
             teamMembers {
               member1 {
                 teamMemberName
                 memberDesignation
                 profileImage {
                   mediaItemUrl
                 }
               }
               member2 {
                 teamMemberName
                 memberDesignation
                 profileImage {
                   mediaItemUrl
                 }
               }
               member3 {
                 teamMemberName
                 memberDesignation
                 profileImage {
                   mediaItemUrl
                 }
               }
               member4 {
                 teamMemberName
                 memberDesignation
                 profileImage {
                   mediaItemUrl
                 }
               }
             }
           }
         }
       }
     }
   }`;
   const GET_HOME_PAGE=`query HOME_PAGE {
    pages(where: {name: "home"}) {
      edges {
        node {
          homeSections {
            heroSection {
              contextTitle
              contextDescription
              buttonA {
                title
                url
              }
              buttonB {
                title
                url
              }
              heroImage {
                mediaItemUrl
              }
            }
            featuresSection {
              contextTitle
              contextDescription
              featuresList {
                feature1 {
                  featureTitle
                  featureDescription
                  featureIcon
                }
                feature2 {
                  featureTitle
                  featureDescription
                  featureIcon
                }
                feature3 {
                  featureTitle
                  featureDescription
                  featureIcon
                }
                feature4 {
                  featureTitle
                  featureDescription
                  featureIcon
                }
                feature5 {
                  featureTitle
                  featureDescription
                  featureIcon
                }
                feature6 {
                  featureTitle
                  featureDescription
                  featureIcon
                }
              }
            }
            logoList {
              contextTitle
              logos {
                logoName1
                logoName2
                logoName3
                logoName4
                logoName5
                logoName6
                logoName7
                logoName8
                logoName9
                logoName10
                logoName11
                logoName12
              }
            }
            ctaSection {
              contextTitle
              contextDescription
              button {
                title
                url
              }
            }
          }
        }
      }
    }
  }`;
  const GET_CONTACT_PAGE=`query CONTACT_PAGE {
    pages(where: {name: "contact"}) {
      edges {
        node {
          contactSections {
            contextTitle
            contextDescription
            contact {
              title
              address
              description
              contactEmail
              formSubmissionApiUrl
            }
          }
        }
      }
    }
  }`;

const userConfig={
     username:"user",
     password:"root@123"
};

dotenv.config();

const API_URL = `${process.env.API_URL}/wp-json/wp/v2`;
const GRAPHQL_API_URL = `${process.env.API_URL}/graphql`;

// Gets post by API URL and given path
async function fetchAPI(path, authRequired = false) {
  try {
    var headers = {
      Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
    };
    if(authRequired) {
      const AuthResponse=await AuthService.signIn(userConfig);
      headers = {
        Authorization: `Bearer ${AuthResponse.token}`,
      };
    }
    
    const res = authRequired
      ? await fetch(`${API_URL}${path}`, { headers })
      : await fetch(`${API_URL}${path}`);
    const json = await res.json();
    return json;
  } catch (err) {
    console.log(err);
  }
}
fetchAPI.prototype = {
  path: PropTypes.string,
  authRequired: PropTypes.bool,
};
async function GraphqlFetchAPI(query, { variables } = {}) {
  const headers = { "Content-Type": "application/json" };
  const res = await fetch(GRAPHQL_API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

async function getPosts() {
  try {
    let posts = await fetchAPI("/posts?_embed");
    return posts;
  } catch (err) {
    console.log(err);
  }
}
async function getPriceContents() {
  try {
    let priceData = await fetchAPI("/pages?slug=pricing");

    if (priceData?.[0]) {
      return Object.entries(priceData?.[0]?.acf).map(([key, value]) => value);
    } else {
      return [];
    }
  } catch (err) {
    console.log(err);
  }
}
async function getAboutContents() {
  try {
    let aboutData = await GraphqlFetchAPI(GET_ABOUT_PAGE);
    return aboutData;
  } catch (err) {
    console.log(err);
  }
}
async function getHomeContents() {
  try {
    let homeData = await GraphqlFetchAPI(GET_HOME_PAGE);
    return homeData;
  } catch (err) {
    console.log(err);
  }
}
async function getContactContents() {
  try {
    let contactData = await GraphqlFetchAPI(GET_CONTACT_PAGE);
    return contactData;
  } catch (err) {
    console.log(err);
  }
}
const AuthService = {
  async signIn(payload) {
    const headers = { "Content-Type": "application/json" };
    const res = await fetch(
      `${process.env.API_URL}/wp-json/jwt-auth/v1/token`,
      {
        method: "POST",
        headers,
        credentials: "same-origin",
        body: JSON.stringify(payload),
      }
    );
    const json = await res.json();
    if (json.errors) {
      console.log(json.errors);
      throw new Error("Failed to fetch API");
    }
    return json;
  },
  async signUp(payload) {
    const coreUserAuth = await AuthService.signIn(userConfig);
    if (coreUserAuth) {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${coreUserAuth.token}`,
      };
      const res = await fetch(`${process.env.API_URL}/wp-json/wp/v2/users`, {
        method: "POST",
        headers,
        credentials: "same-origin",
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (json.errors) {
        console.log(json.errors);
        throw new Error("Failed to fetch API");
      }
      return json;
    }
  },
  async isRegistered(email) {
    let isEmailExists = await fetchAPI(`/users/?search=${email}`, true);
    return isEmailExists.length !== 0;
  },
};

const $$Astro$1 = createAstro("https://astroship.web3templates.com");
const $$Sectionhead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Sectionhead;
  const { align = "center" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["mt-16", align === "center" && "text-center"], "class:list")}>
  <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
    ${renderSlot($$result, $$slots["title"], renderTemplate`Title`)}
  </h1>
  <p class="text-lg mt-4 text-slate-600">
    ${renderSlot($$result, $$slots["desc"], renderTemplate`Some description goes here`)}
  </p>
</div>`;
}, "E:/Upwork projects/Nikesh_web3/thre3labs-demo/src/components/sectionhead.astro", void 0);

const $$Astro = createAstro("https://astroship.web3templates.com");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const data = await getAboutContents();
  let pages = "";
  if (data?.pages) {
    pages = data.pages?.edges?.[0]?.node?.aboutSections;
    var { teamMembers = {} } = pages;
    var memberList = [];
    for (let [key, value] of Object.entries(teamMembers)) {
      memberList.push(value);
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
    ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`${pages?.subTitle}` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`${pages?.pageTitle}` })}` })}

    ${maybeRenderHead()}<div class="flex flex-col gap-4 mx-auto max-w-4xl mt-16">
      <h2 class="font-bold text-3xl text-gray-800">
        ${pages?.contextTitle}
      </h2>
      <p class="text-lg leading-relaxed text-slate-500">
        ${pages?.contextDescription}
      </p>
    </div>
    <div class="grid md:grid-cols-4 gap-10 mx-auto max-w-4xl mt-12">
      ${memberList?.map((teamMemberEntry) => renderTemplate`<div class="group">
            <div class="w-full aspect-square">
              ${renderComponent($$result3, "Picture", $$Picture, { "src": teamMemberEntry?.profileImage?.mediaItemUrl, "alt": teamMemberEntry?.teamMemberName, "sizes": "(max-width: 800px) 100vw, 400px", "widths": [200, 400], "aspectRatio": "1:1", "background": "#ffffff", "fit": "cover", "position": "center", "class": "w-full rounded-md rounded transition group-hover:-translate-y-1 group-hover:shadow-xl" })}
            </div>

            <div class="mt-4 text-center">
              <h2 class="text-lg text-gray-800">
                ${teamMemberEntry?.teamMemberName}
              </h2>
              <h3 class="text-sm text-slate-500">
                ${teamMemberEntry?.memberDesignation}
              </h3>
            </div>
          </div>`)}
    </div>
  ` })}
` })}`;
}, "E:/Upwork projects/Nikesh_web3/thre3labs-demo/src/pages/about.astro", void 0);

const $$file = "E:/Upwork projects/Nikesh_web3/thre3labs-demo/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Sectionhead as $, AuthService as A, BaseSSRService as B, $$Picture as a, getContactContents as b, isRemoteImage as c, getHomeContents as d, getPriceContents as e, about as f, getPosts as g, isOutputFormatSupportsAlpha as i };

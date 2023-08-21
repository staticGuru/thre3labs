/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, b as addAttribute, F as Fragment, u as unescapeHTML } from '../astro.a71d5b5b.mjs';
import { $ as $$Container, a as $$Layout } from './404.astro.cc71b858.mjs';
import dotenv from 'dotenv';

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

dotenv.config();

const API_URL = `${process.env.API_URL}/wp-json/wp/v2`;
const GRAPHQL_API_URL = `${process.env.API_URL}/graphql`;

// Gets post by API URL and given path
async function fetchAPI(path) {
  try {
    const res = await fetch(`${API_URL}${path}`);
    const json = await res.json();
    return json;
  } catch (err) {
    console.log(err);
  }
}
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
    let signUrl = `${process.env.API_URL}/wp-json/jwt-auth/v1/token`;
    // return "guru"
    console.log(signUrl);
    debugger;
    await fetch('http://15.206.158.235/wp-json/jwt-auth/v1/token', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      credentials: 'same-origin',
      // mode:"cors",
      body: JSON.stringify({ username: "demo", password: "demouserpassword" }),
    })
      .then((res) => {
        console.log("SignInData", res.json());
        return res;
      })
      .catch((err) => {
        console.log("err", err);
      });
  },
};

/** */

function formatDate(dateTime) {
  const date = new Date(dateTime);

  // Define the days of the week and months arrays
  const daysOfWeek = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Extract date components
  const dayOfWeek = daysOfWeek[date.getDay()];
  const month = months[date.getMonth()];
  const day = String(date.getDate());
  const year = date.getFullYear();

  // Construct the formatted date string
  const formattedDate = `${dayOfWeek} ${month} ${day} ${year}`;

  return formattedDate;
}

const isValidEmail=(email)=>{
  return true;
};

const isRegistered=(email)=>{
  return false;
};

const $$Astro = createAstro("https://astroship.web3templates.com");
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

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { AuthService as A, _slug_ as _, getPosts as a, getContactContents as b, getHomeContents as c, getPriceContents as d, isRegistered as e, formatDate as f, getAboutContents as g, isValidEmail as i };

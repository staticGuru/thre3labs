/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, g as defineScriptVars, e as renderComponent, b as addAttribute, m as maybeRenderHead } from '../astro.a71d5b5b.mjs';
import { L as Logo } from './404.astro.52632069.mjs';
import { A as AuthService } from './about.astro.9bacbb97.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
/* empty css                         */import 'node:fs/promises';
import 'node:path';
import 'node:url';
import 'http-cache-semantics';
import 'node:os';
import 'image-size';
import 'magic-string';
import 'node:stream';
import 'dotenv';
import 'prop-types';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://astroship.web3templates.com");
const $$Signin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signin;
  let errors = { error: "" };
  let isPassword = true;
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const username = data.get("username");
      const password = data.get("password");
      const SignInAPI = await AuthService.signIn({ username, password });
      if (!SignInAPI?.data) {
        Astro2.cookies.set("userInfo", SignInAPI);
        return Astro2.redirect("/");
      } else {
        errors = { error: "Username and Password is not correct!!!" };
      }
    } catch (error) {
      errors = { error: "Something went wrong!!!" };
    }
  }
  if (Astro2.cookies.get("userInfo")?.value) {
    return Astro2.redirect("/");
  }
  return renderTemplate(_a || (_a = __template(["", '<div class="lg:flex">\n  <div class="lg:w-1/2 xl:max-w-screen-sm">\n    <div class="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">\n      <div class="cursor-pointer flex items-center">\n        <div>\n          <img', ' class="h-6 mr-3 sm:h-9" alt="Thre3 Labs Logo">\n        </div>\n      </div>\n    </div>\n    <div class="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">\n      <h2 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">\n        Sign In\n      </h2>\n      <div class="mt-5">\n        ', '\n        <form method="POST">\n          <div class="mb-4">\n            <label for="Name"', '>\n              Username</label>\n            <input type="text" placeholder="Nikil Mike" name="username"', '>\n          </div>\n          <div class="mb-4">\n            <label for="Name"', '>\n              Password</label>\n            <div class="relative container">\n              ', `
            </div>
          </div>
          <a href="/forgotpassword" class="block text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800 cursor-pointer text-right">
            Forgot Password?
          </a>
          <div class="mt-10">
            <button data-confetti-button1 type="submit" class="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg">
              Sign In
            </button>
          </div>
        </form>
        <div class="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
          Don't have an account ? <a class="cursor-pointer text-indigo-600 hover:text-indigo-800" href="/signup">Sign up</a>
        </div>
      </div>
    </div>
  </div>
  <div class="hidden lg:flex items-center justify-center bg-indigo-100 flex-1 h-screen">
    <div class="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
      <svg class="w-5/6 mx-auto" xmlns="http://www.w3.org/2000/svg" id="f080dbb7-9b2b-439b-a118-60b91c514f72" data-name="Layer 1" viewBox="0 0 528.71721 699.76785">
        <title>Login</title>
        <rect y="17.06342" width="444" height="657" fill="#535461"></rect>
        <polygon points="323 691.063 0 674.063 0 17.063 323 0.063 323 691.063" fill="#7f9cf5"></polygon>
        <circle cx="296" cy="377.06342" r="4" fill="#535461"></circle>
        <polygon points="296 377.66 298.773 382.463 301.545 387.265 296 387.265 290.455 387.265 293.227 382.463 296 377.66" fill="#535461"></polygon>
        <polygon points="337 691.063 317.217 691 318 0.063 337 0.063 337 691.063" fill="#7f9cf5"></polygon>
        <g opacity="0.1">
          <polygon points="337.217 691 317.217 691 318.217 0 337.217 0 337.217 691" fill="#fff"></polygon>
        </g>
        <circle cx="296" cy="348.06342" r="13" opacity="0.1"></circle>
        <circle cx="296" cy="346.06342" r="13" fill="#535461"></circle>
        <line x1="52.81943" y1="16.10799" x2="52.81943" y2="677.15616" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" opacity="0.1"></line>
        <line x1="109.81943" y1="12.10799" x2="109.81943" y2="679.15616" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" opacity="0.1"></line>
        <line x1="166.81943" y1="9.10799" x2="166.81943" y2="683" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" opacity="0.1"></line>
        <line x1="223.81943" y1="6.10799" x2="223.81943" y2="687.15616" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" opacity="0.1"></line>
        <line x1="280.81943" y1="3.10799" x2="280.81943" y2="688" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" opacity="0.1"></line>
        <ellipse cx="463.21721" cy="95.32341" rx="39.5" ry="37" fill="#2f2e41"></ellipse>
        <path d="M683.8586,425.93948l-10,14s-48,10-30,25,44-14,44-14l14-18Z" transform="translate(-335.6414 -100.11607)" fill="#ffb8b8"></path>
        <path d="M735.8586,266.93948s-13,0-16,18-6,78-6,78-42,55-35,62,15,20,20,18,48-61,48-61Z" transform="translate(-335.6414 -100.11607)" fill="#7f9cf5"></path>
        <path d="M735.8586,266.93948s-13,0-16,18-6,78-6,78-42,55-35,62,15,20,20,18,48-61,48-61Z" transform="translate(-335.6414 -100.11607)" opacity="0.1"></path>
        <path d="M775.8586,215.93948s-1,39-13,41-8,15-8,15,39,23,65,0l5-12s-18-13-10-31Z" transform="translate(-335.6414 -100.11607)" fill="#ffb8b8"></path>
        <path d="M708.8586,455.93948s-59,110-37,144,55,104,60,104,33-14,31-23-32-76-40-82-4-22-3-23,34-54,34-54-1,84,3,97-1,106,4,110,28,11,32,5,16-97,8-118l15-144Z" transform="translate(-335.6414 -100.11607)" fill="#2f2e41"></path>
        <path d="M762.8586,722.93948l-25,46s-36,26-11,30,40-6,40-6l22-16v-46Z" transform="translate(-335.6414 -100.11607)" fill="#2f2e41"></path>
        <path d="M728.8586,696.93948l13,31s5,13,0,16-19,21-10,23a29.29979,29.29979,0,0,0,5.49538.5463,55.56592,55.56592,0,0,0,40.39768-16.43936l8.10694-8.10694s-27.77007-63.94827-27.385-63.47414S728.8586,696.93948,728.8586,696.93948Z" transform="translate(-335.6414 -100.11607)" fill="#2f2e41"></path>
        <circle cx="465.21721" cy="105.82341" r="34" fill="#ffb8b8"></circle>
        <path d="M820.3586,253.43948l-10.5,10.5s-32,12-47,0c0,0,5.5-11.5,5.5-10.5s-43.5,7.5-47.5,25.5,3,49,3,49-28,132-17,135,114,28,113,9,8-97,8-97l35-67s-5-22-17-29S820.3586,253.43948,820.3586,253.43948Z" transform="translate(-335.6414 -100.11607)" fill="#7f9cf5"></path>
        <path d="M775.8586,448.93948l-13,8s-50,34-24,40,41-24,41-24l10-12Z" transform="translate(-335.6414 -100.11607)" fill="#ffb8b8"></path>
        <path d="M849.8586,301.93948l9,9s6,84-6,101-67,63-70,60-22-18-18-20,57.18287-57.56942,57.18287-57.56942l-4.18287-77.43058Z" transform="translate(-335.6414 -100.11607)" opacity="0.1"></path>
        <path d="M853.8586,298.93948l9,9s6,84-6,101-67,63-70,60-22-18-18-20,57.18287-57.56942,57.18287-57.56942l-4.18287-77.43058Z" transform="translate(-335.6414 -100.11607)" fill="#7f9cf5"></path>
        <path d="M786.797,157.64461s-11.5575-4.20273-27.31774,4.72807l8.40546,2.10136s-12.60819,1.05068-14.18421,17.8616h5.77875s-3.67739,14.70955,0,18.91228l2.364-4.4654,6.82943,13.65887,1.576-6.82944,3.15205,1.05069,2.10137-11.03217s5.25341,7.88012,9.45614,8.40546V195.2065s11.5575,13.13352,15.23489,12.60818l-5.25341-7.35477,7.35477,1.576-3.152-5.25341,18.91228,5.25341-4.20273-5.25341,13.13352,4.20273,6.3041,2.6267s8.9308-20.4883-3.67739-34.67251S798.61712,151.60318,786.797,157.64461Z" transform="translate(-335.6414 -100.11607)" fill="#2f2e41"></path>
      </svg>
    </div>
  </div>
</div>
<script>(function(){`, '\n  function togglePasswordVisibility() {\n    isPassword = true;\n  }\n  const password = document.getElementById("viewpassword");\n  const passwordIcon = document.getElementById("passwordIcon");\n  password.addEventListener("click", (e) => {\n    e.preventDefault();\n    var svg1 = password.getElementsByTagName("svg");\n    svg1[0].appendChild(\n      <path\n        stroke-linecap="round"\n        stroke-linejoin="round"\n        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"\n      />\n    );\n    // const old=password.children[0];\n    // const new1 = document.createTextNode("guru");\n    // // old.replaceChild(new1,old.childNodes[0])\n    // password.removeChild(old)\n    // password.appendChild(new1);\n    passwordIcon.setAttribute(\n      "type",\n      passwordIcon.getAttribute("type") === "text" ? "password" : "text"\n    );\n\n    // password.appendChild(\n    //   <svg\n    //     xmlns="http://www.w3.org/2000/svg"\n    //     fill="none"\n    //     viewBox="0 0 24 24"\n    //     stroke-width={1.5}\n    //     stroke="currentColor"\n    //     class="w-5 h-5">\n    //     <path\n    //       stroke-linecap="round"\n    //       stroke-linejoin="round"\n    //       d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"\n    //     />\n    //   </svg>\n    // );\n  });\n})();<\/script>'])), maybeRenderHead(), addAttribute(Logo, "src"), errors.error && renderTemplate`<p class="text-red-600 py-2">${errors.error}</p>`, addAttribute(`block mb-1 text-sm ${errors.error ? "text-red-600" : "text-gray-600"}`, "class"), addAttribute(`w-full px-4 py-2 ${errors.error ? "text-red-900 placeholder-red-400 border border-red-500 rounded outline-none focus:ring-red-500 focus:border-red-500" : "text-gray-900 placeholder-gray-400 border border-gray-500 rounded outline-none focus:ring-gray-500 focus:border-gray-500"} focus:ring-1`, "class"), addAttribute(`block mb-1 text-sm ${errors.error ? "text-red-600" : "text-gray-600"}`, "class"), renderComponent($$result, "InputComponent", null, { "client:only": true, "errors": { error: errors.error }, "client:component-hydration": "only", "client:component-path": "E:/Upwork projects/Nikesh_web3/thre3labs-demo/src/components/ui/input", "client:component-export": "InputComponent" }), defineScriptVars({ isPassword }));
}, "E:/Upwork projects/Nikesh_web3/thre3labs-demo/src/pages/signin.astro", void 0);

const $$file = "E:/Upwork projects/Nikesh_web3/thre3labs-demo/src/pages/signin.astro";
const $$url = "/signin";

export { $$Signin as default, $$file as file, $$url as url };

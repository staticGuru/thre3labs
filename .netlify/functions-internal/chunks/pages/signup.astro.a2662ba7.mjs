/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../astro.a71d5b5b.mjs';
import { i as isValidEmail } from './blog.astro.9447951f.mjs';
import { L as Logo } from './404.astro.e345295d.mjs';
import { A as AuthService } from './about.astro.87cec5d7.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
import 'js-cookie';
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

const $$Astro = createAstro("https://astroship.web3templates.com");
const $$Signup = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signup;
  var errors = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    mismatchPassword: ""
  };
  var isRegisteredEmail = false;
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const username = data.get("username");
      const email = data.get("email");
      const password = data.get("password");
      const confirmPassword = data.get("confirmPassword");
      errors = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        mismatchPassword: ""
      };
      if (typeof username !== "string" || username.length < 1) {
        errors.username = "Please enter a username. ";
      } else {
        errors.username = "";
      }
      if (typeof email !== "string" || !isValidEmail(email)) {
        errors.email = "Email is not valid. ";
      } else {
        errors.email = "";
      }
      if (typeof password !== "string" || password.length < 6) {
        errors.password = "Password must be at least 6 characters. ";
      }
      if (password?.toString().toLowerCase() !== confirmPassword?.toString().toLowerCase()) {
        errors.mismatchPassword = "Password and confirmPassword must be the same.";
      }
      const hasErrors = Object.values(errors).some((msg) => msg);
      isRegisteredEmail = await AuthService.isRegistered(email);
      if (!hasErrors) {
        const responseData = await AuthService.signUp({
          username,
          email,
          password
        });
        if (responseData?.id) {
          return Astro2.redirect("/signin");
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
  return renderTemplate`${maybeRenderHead()}<div class="lg:flex">
  <div class="lg:w-1/2 xl:max-w-screen-sm">
    <div class="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
      <div class="cursor-pointer flex items-center">
        <div>
          <img${addAttribute(Logo, "src")} class="h-6 mr-3 sm:h-9" alt="Thre3 Labs Logo">
        </div>
      </div>
    </div>
    <div class="mt-1 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-1 xl:px-24 xl:max-w-2xl">
      <h2 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
        Sign up
      </h2>
      <div class="mt-5">
        <form method="POST">
          <div class="mb-4">
            <label for="Name"${addAttribute(`block mb-1 text-sm ${errors.email ? "text-red-600" : "text-gray-600"}`, "class")}>
              Email Address</label>
            <input type="text" placeholder="mike@gmail.com" name="email"${addAttribute(`w-full px-4 py-2 ${errors.email ? "text-red-900 placeholder-red-400 border border-red-500 rounded outline-none focus:ring-red-500 focus:border-red-500" : "text-gray-900 placeholder-gray-400 border border-gray-500 rounded outline-none focus:ring-gray-500 focus:border-gray-500"} focus:ring-1`, "class")}>
            ${errors.email && renderTemplate`<span class="inline-flex text-sm text-red-700">
                  ${errors.email}
                </span>`}
          </div>
          <div class="mb-4">
            <label for="Name"${addAttribute(`block mb-1 text-sm ${errors.username ? "text-red-600" : "text-gray-600"}`, "class")}>
              Username</label>
            <input type="text" placeholder="Nikil Mike" name="username"${addAttribute(`w-full px-4 py-2 ${errors.username ? "text-red-900 placeholder-red-400 border border-red-500 rounded outline-none focus:ring-red-500 focus:border-red-500" : "text-gray-900 placeholder-gray-400 border border-gray-500 rounded outline-none focus:ring-gray-500 focus:border-gray-500"} focus:ring-1`, "class")}>
            ${errors.username && renderTemplate`<span class="inline-flex text-sm text-red-700">
                  ${errors.username}
                </span>`}
          </div>
          <div class="mb-4">
            <label for="Name"${addAttribute(`block mb-1 text-sm ${errors.password ? "text-red-600" : "text-gray-600"}`, "class")}>
              Password</label>
            <input type="password" placeholder="password" name="password"${addAttribute(`w-full px-4 py-2 ${errors.password ? "text-red-900 placeholder-red-400 border border-red-500 rounded outline-none focus:ring-red-500 focus:border-red-500" : "text-gray-900 placeholder-gray-400 border border-gray-500 rounded outline-none focus:ring-gray-500 focus:border-gray-500"} focus:ring-1`, "class")}>
            ${errors.password && renderTemplate`<span class="inline-flex text-sm text-red-700">
                  ${errors.password}
                </span>`}
          </div>
          <div class="mb-4">
            <label${addAttribute(`block mb-1 text-sm ${errors.confirmPassword ? "text-red-600" : "text-gray-600"}`, "class")}>
              Confirm Password</label>
            <input type="password" placeholder="confirm password" name="confirmPassword"${addAttribute(`w-full px-4 py-2 ${errors.confirmPassword ? "text-red-900 placeholder-red-400 border border-red-500 rounded outline-none focus:ring-red-500 focus:border-red-500" : "text-gray-900 placeholder-gray-400 border border-gray-500 rounded outline-none focus:ring-gray-500 focus:border-gray-500"} focus:ring-1`, "class")}>
            ${errors.confirmPassword && renderTemplate`<span class="inline-flex text-sm text-red-700">
                  ${errors.confirmPassword}
                </span>`}
          </div>

          <div class="mt-10">
            <button type="submit" class="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg">
              Sign Up
            </button>
          </div>
        </form>
        <div class="mt-5 text-sm font-display font-semibold text-gray-700 text-center">
          Already have an Account ? <a class="cursor-pointer text-indigo-600 hover:text-indigo-800" href="/signin">Sign in</a>
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
</div>`;
}, "E:/Upwork projects/Nikesh_web3/thre3labs-demo/src/pages/signup.astro", void 0);

const $$file = "E:/Upwork projects/Nikesh_web3/thre3labs-demo/src/pages/signup.astro";
const $$url = "/signup";

export { $$Signup as default, $$file as file, $$url as url };

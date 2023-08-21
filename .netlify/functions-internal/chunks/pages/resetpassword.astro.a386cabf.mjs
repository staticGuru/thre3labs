/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead } from '../astro.a71d5b5b.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';

const $$Astro = createAstro("https://astroship.web3templates.com");
const $$Resetpassword = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Resetpassword;
  return renderTemplate`${maybeRenderHead()}<div class="bg-indigo-200 h-screen">
  <div class="h-full flex justify-center items-center text-gray-900 bg-transparent">
    <div class="w-full px-8 max-w-lg space-y-6 bg-white rounded-md py-16">
      <h1 class="mb-6 text-3xl font-bold text-center">Reset Password</h1>
      <p class="text-center mx-12">
        We are send the recovery code to the respective email address.
      </p>
      <form action="#" class="space-y-6 w-ful">
        <input class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary-100" type="text" name="reset-code" placeholder="Enter the code" required="">
        <input class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary-100" type="password" name="reset-password" placeholder="new password" required="">
        <input class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary-100" type="password" name="confirm-password" placeholder="Confirm password" required="">
        <div class="flex items-center justify-center">
          <button type="submit" class="w-1/2 self-center px-4 py-2 font-medium text-center text-white bg-indigo-600 transition-colors duration-200 rounded-md bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1">
            Save
          </button>
        </div>
      </form>
      <div class="text-sm text-gray-600 items-center flex justify-between">
        <a href="/signin" class="text-gray-800 cursor-pointer hover:text-blue-500 inline-flex items-center ml-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
          </svg>
          Back
        </a>
        <p class="hover:text-blue-500 cursor-pointer">Need help?</p>
      </div>
    </div>
  </div>
</div>
<!--
<div class="container mx-auto">
  <div class="flex justify-center items-center h-screen px-6">
    
    <div class="w-full xl:w-3/4 lg:w-11/12 flex">
   
      <div
        class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
        style="background-image: url('https://source.unsplash.com/oWTW-jNGl9I/600x800')">
      </div>
      <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
        <div class="px-8 mb-4 text-center">
          <h3 class="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
          <p class="mb-4 text-sm text-gray-700">
            We get it, stuff happens. Just enter your email address below and
            we'll send you a link to reset your password!
          </p>
        </div>
        <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
          <div class="mb-4">
            <label
              class="block mb-2 text-sm font-bold text-gray-700"
              for="email">
              Email
            </label>
            <input
              class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter Email Address..."
            />
          </div>
          <div class="mb-6 text-center">
            <button
              class="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
              type="button">
              Reset Password
            </button>
          </div>
          <hr class="mb-6 border-t" />
          <div class="text-center">
            <a
              class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
              href="./register.html">
              Create an Account!
            </a>
          </div>
          <div class="text-center">
            <a
              class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
              href="./index.html">
              Already have an account? Login!
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>-->`;
}, "E:/Upwork projects/Nikesh_web3/thre3labs-demo/src/pages/resetpassword.astro", void 0);

const $$file = "E:/Upwork projects/Nikesh_web3/thre3labs-demo/src/pages/resetpassword.astro";
const $$url = "/resetpassword";

export { $$Resetpassword as default, $$file as file, $$url as url };

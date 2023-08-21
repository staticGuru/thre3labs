import dotenv from "dotenv";
import { GET_ABOUT_PAGE, GET_CONTACT_PAGE, GET_HOME_PAGE } from "./query";
import PropTypes from "prop-types";
import { userConfig } from "@utils/userConfig";

dotenv.config();

const API_URL = `${process.env.API_URL}/wp-json/wp/v2`;
const GRAPHQL_API_URL = `${process.env.API_URL}/graphql`;

// Gets post by API URL and given path
export async function fetchAPI(path, authRequired = false) {
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
export async function GraphqlFetchAPI(query, { variables } = {}) {
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

export async function getPosts() {
  try {
    let posts = await fetchAPI("/posts?_embed");
    return posts;
  } catch (err) {
    console.log(err);
  }
}
export async function getPriceContents() {
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
export async function getAboutContents() {
  try {
    let aboutData = await GraphqlFetchAPI(GET_ABOUT_PAGE);
    return aboutData;
  } catch (err) {
    console.log(err);
  }
}
export async function getHomeContents() {
  try {
    let homeData = await GraphqlFetchAPI(GET_HOME_PAGE);
    return homeData;
  } catch (err) {
    console.log(err);
  }
}
export async function getContactContents() {
  try {
    let contactData = await GraphqlFetchAPI(GET_CONTACT_PAGE);
    return contactData;
  } catch (err) {
    console.log(err);
  }
}
export const AuthService = {
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

import type { GatsbyConfig } from "gatsby";
import path from "path";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Starknet",
    siteUrl:
      process.env.NODE_ENV === "development"
        ? "http://localhost:8000/"
        : process.env.DEPLOY_PRIME_URL,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        generateMatchPathRewrites: false,
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: "gatsby-theme-i18n",
      options: {
        defaultLang: "en",
        prefixDefault: true,
        configPath: path.resolve("./i18n/config.json"),
      },
    },
    {
      resolve: "gatsby-theme-i18n-react-intl",
      options: {
        defaultLocale: "./i18n/intl/en.json",
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "./src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "./content/",
      },
      __key: "posts",
    },
  ],
};

export default config;
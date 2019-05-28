module.exports = {
  siteMetadata: {
    title: 'WTF Robots',
    siteDescription: 'A blog that chronicles the wtf moments of DIY',
    authorName: 'Tiffany White'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'WTF Robots',
        short_name: 'WTF Robots',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#ff628c',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone'
        // icon: 'public/favicon.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/blog-posts`
      }
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-'
            }
          }
        ]
      }
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-styled-components'
  ]
}

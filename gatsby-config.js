plugins: [
  {
    resolve: `gatsby-source-datocms`,
    options: {
      // You can find your read-only API token under the Settings > API tokens
      // section of your administrative area:
      apiToken: `6fafb816603fdd7361e35ba0fc887c`,

      // If you are working on development/staging environment, you might want to
      // preview the latest version of records instead of the published one:
      previewMode: false,

      // Disable automatic reloading of content when some change occurs on DatoCMS:
      disableLiveReload: false,

      // Custom API base URL
      apiUrl: 'https://akshay-gadkari-blog.datocms.com'
    }
  },
]

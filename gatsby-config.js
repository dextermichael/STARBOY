module.exports = {
  siteMetadata: {
    title: 'THESTARBOY',
    description: 'Life Long adventure of Discovery, Fun and selfmastery.',
    keywords:
      'react, Astrophotography, app development, musis, film, comic books, businesss, teaching',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '6x5ielcrwgzp',
        accessToken: 'HUlmrWLzWmFJj0pJVfasrLta9QOOz-HBsXrSlEIlq_Y',
      },
    },
  ],
}

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Redirect from one domain to another
      {
        source: '/about',
        destination: '/',
        permanent: false,
      },
      // Redirect from one domain's path to another
      {
        source: '/old-blog/:id',
        destination: '/new-blog/:id',
        permanent: true,
      },
      // Redirect from one domain to a different domain
      {
        source: '/example-page',
        destination: 'https://example.com/new-page',
        permanent: true,
      },
    ];
  },
};

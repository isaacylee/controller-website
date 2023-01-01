/**
 * @type {import('next-sitemap').IConfig}
 * @see https://github.com/iamvishnusankar/next-sitemap#readme
 */
module.exports = {
  async redirects() {
    return [
      {
        source: '/audits-and-reports/:path*',
        destination: '/audits/:path*',
        permanent: true,
      },
      {
        source: '/payroll-calendar/',
        destination: '/payrollcalendar/',
        permanent: true,
      },
      {
        source: '/financial-reports/:path',
        destination: '/reports/:path',
        permanent: true,
      },
      {
        source: '/audits-and-reviews/:path',
        destination: '/audits/:path',
        permanent: true,
      },
      {
        source: '/fraud_hotline/',
        destination: '/report-fraud-waste-and-abuse/',
        permanent: true,
      },
      {
        source: '/wp-content/:path',
        destination: 'https://wpstaticarchive.lacontroller.io/wp-content/:path',
        permanent: true,
      },
    ];
  },
  // !STARTERCONF Change the siteUrl
  /** Without additional '/' on the end, e.g. https://theodorusclarence.com */
  siteUrl: 'https://tsnext-tw.thcl.dev',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};

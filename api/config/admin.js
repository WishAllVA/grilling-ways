module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c435ca9bb1c3f5770825f9fa97775858'),
  },
});

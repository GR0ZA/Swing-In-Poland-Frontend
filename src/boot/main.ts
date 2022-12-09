import { boot } from 'quasar/wrappers';
import { createAuth0 } from '@auth0/auth0-vue';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  app.use(
    createAuth0({
      domain: 'swinginpoland.eu.auth0.com',
      client_id: 'OH2KKNDhrGmr21ERbuReG3dK1rv17xzT',
      redirect_uri: window.location.origin,
    })
  );
});

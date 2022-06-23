import type { App, Plugin } from 'vue';

const components: Record<string, Plugin> = {};

const install = (app: App, config?: Record<string, unknown>) => {
  for (const key of Object.keys(components)) {
    app.use(components[key], config);
  }
};

const AethicVue = {
  ...components,
  install,
};

export default AethicVue;

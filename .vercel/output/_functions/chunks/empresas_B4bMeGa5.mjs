import { c as createComponent } from './astro-component_BBW6I32v.mjs';
import { b as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_CK2xrWc0.mjs';
import { $ as $$MainLayout } from './MainLayout_DMTnLyfw.mjs';

const $$Empresas = createComponent(($$result, $$props, $$slots) => {
  const title = "Empresas";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>${title}</h1> ` })}`;
}, "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/pages/servicios/empresas.astro", void 0);

const $$file = "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/pages/servicios/empresas.astro";
const $$url = "/servicios/empresas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Empresas,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

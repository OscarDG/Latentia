import { c as createComponent } from './astro-component_BVy0q73C.mjs';
import { o as createRenderInstruction, m as maybeRenderHead, c as addAttribute, r as renderTemplate, b as renderComponent, p as renderHead, d as renderSlot } from './entrypoint_BFwTI1_J.mjs';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Header;
  const { links } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<header class="fixed flex flex-row md:justify-between justify-between items-center w-full h-18 pt-8 pb-8 bg-[#F2F2F2] z-50"> <div class="flex flex-row justify-center items-center w-[10%] md:w-[20%] h-10 ml-5"> <img src="/logo.svg" alt="Logo" class="w-10 h-10"> </div> <div class="flex flex-row justify-around items-center w-[65%] md:w-[50%] h-auto p-2 gap-2"> <div id="menuTrigger" class="lg:hidden md:flex flex flex-col justify-between items-center w-12 h-10 mr-0 hover:cursor-pointer bg-brand-peru-400 rounded-md p-2"> <span class="w-[90%] h-0.5 bg-brand-peru-100 rounded-2xl"></span> <span class="w-[90%] h-0.5 bg-brand-peru-100 rounded-2xl"></span> <span class="w-[90%] h-0.5 bg-brand-peru-100 rounded-2xl"></span> <span class="w-[90%] h-0.5 bg-brand-peru-100 rounded-2xl"></span> </div> <nav class="relative flex flex-row justify-between items-center h-10"> <ul id="mobileMenu" class="lg:relative md:absolute absolute lg:flex md:hidden hidden md:flex-row flex-col justify-center md:justify-between md:items-center items-center md:w-full w-70 md:h-12 h-80 md:right-0 right-0 md:top-0 top-13 gap-5 p-5 md:bg-transparent bg-brand-gray-100/90 md:rounded-none rounded-2xl"> ${links.map((link) => renderTemplate`<li${addAttribute(link.label === "Servicios" ? "servicesLink" : void 0, "id")} class="list-none flex-row justify-center items-center text-center cursor-pointer"><a${addAttribute(link.href, "href")}${addAttribute(link.href === currentPath ? ["relative no-underline font-inter", "after:absolute after:left-0 after:bottom-0", "after:h-0.5 after:rounded-2xl after:w-full after:content-['']", "after:bg-brand-peru-400", "after:scale-x-0 after:origin-left", "after:transition-transform after:duration-300", "hover:after:scale-x-100", "text-brand-peru-400 hover:text-brand-peru-600", "pb-1"] : ["relative no-underline font-inter", "after:absolute after:left-0 after:bottom-0", "after:h-0.5 after:rounded-2xl after:w-full after:content-['']", "after:bg-brand-red-800", "after:scale-x-0 after:origin-left", "after:transition-transform after:duration-300", "hover:after:scale-x-100", "text-brand-red-800", "pb-1"], "class:list")}>${link.label}</a></li>`)} </ul> <ul id="submenu" class="absolute md:top-10 top-45 md:left-40 -right-30 hidden flex-col justify-center md:items-start items-center w-45 h-25 gap-5 p-2 md:bg-brand-gray-100/80 bg-brand-gray-100 rounded-sm"> <li class="text-sm"><a href="/" target="_blank" class="relative no-underline font-inter after:absolute after:left-0 after:bottom-0 after:h-0.5 after:rounded-2xl after:w-full after:content-[''] after:bg-brand-peru-400 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 text-brand-red-900 hover:text-brand-peru-600 pb-1">Servicios profesionales</a></li> <li class="text-sm"><a href="/" target="_blank" class="relative no-underline font-inter after:absolute after:left-0 after:bottom-0 after:h-0.5 after:rounded-2xl after:w-full after:content-[''] after:bg-brand-peru-400 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 text-brand-red-900 hover:text-brand-peru-600 pb-1">Servicios personas</a></li> </ul> </nav> <button class="flex flex-row justify-center items-center w-25 h-10 bg-brand-peru-400 hover:bg-brand-peru-300 hover:cursor-pointer rounded-sm font-inter hover:transition hover:ease-in hover:transform hover:scale-102"> <span class="text-white text-sm">Contactanos</span> </button> </div> </header> ${renderScript($$result, "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/components/Header.astro", void 0);

const $$Phone = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Phone;
  const { color, width, height } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(width, "width")}${addAttribute(height, "height")} viewBox="0 0 24 24"${addAttribute(color, "fill")} class="icon icon-tabler icons-tabler-filled icon-tabler-phone"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z"></path> </svg>`;
}, "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/assets/Phone.astro", void 0);

const $$LocationIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$LocationIcon;
  const { color, width, height } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(width, "width")}${addAttribute(height, "height")} viewBox="0 0 24 24"${addAttribute(color, "fill")} class="icon icon-tabler icons-tabler-filled icon-tabler-map-pin"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6"></path> </svg>`;
}, "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/assets/LocationIcon.astro", void 0);

const $$EmailIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$EmailIcon;
  const { color, width, height } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(width, "width")}${addAttribute(height, "height")} viewBox="0 0 24 24"${addAttribute(color, "fill")} class="icon icon-tabler icons-tabler-filled icon-tabler-mail"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z"></path> <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z"></path> </svg>`;
}, "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/assets/EmailIcon.astro", void 0);

const $$InstagramIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$InstagramIcon;
  const { color, width, height } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(width, "width")}${addAttribute(height, "height")} viewBox="0 0 24 24" fill="none"${addAttribute(color, "stroke")} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4l0 -8"></path> <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path> <path d="M16.5 7.5v.01"></path> </svg>`;
}, "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/assets/InstagramIcon.astro", void 0);

const $$LinkedinIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$LinkedinIcon;
  const { color, width, height } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(width, "width")}${addAttribute(height, "height")} viewBox="0 0 24 24" fill="none"${addAttribute(color, "stroke")} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M8 11v5"></path> <path d="M8 8v.01"></path> <path d="M12 16v-5"></path> <path d="M16 16v-3a2 2 0 1 0 -4 0"></path> <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10"></path> </svg>`;
}, "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/assets/LinkedinIcon.astro", void 0);

const $$TiktokIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$TiktokIcon;
  const { color, width, height } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(width, "width")}${addAttribute(height, "height")} viewBox="0 0 24 24" fill="none"${addAttribute(color, "stroke")} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-tiktok"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917"></path> </svg>`;
}, "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/assets/TiktokIcon.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer id="footer" class="relative flex flex-col w-full justify-center items-center min-h-screen bg-[#F2F2F2] font-inter"> <div class="flex flex-col md:flex-row gap-20 lg:gap-35 md:gap-10 p-5"> <div id="site-map" class="flex flex-col justify-baseline gap-5 p-2"> <h2 class="text-2xl text-brand-peru">Site map</h2> <ul id="site-map--list" class="flex flex-col justify-around text-brand-red-800 gap-2"> <li class="hover:text-brand-peru-200"><a href="/nosotros">Nosotros</a></li> <li class="hover:text-brand-peru-200"><a href="/empresas">Servicios empresariales</a></li> <li class="hover:text-brand-peru-200"><a href="/personas">Servicios personales</a></li> <li class="hover:text-brand-peru-200"><a href="/datos" target="_blank">Política de tratamiento de datos</a></li> </ul> </div> <div id="contact-info" class="flex flex-col justify-baseline gap-5 p-2"> <h2 class="text-2xl text-brand-peru">Información de contacto</h2> <ul id="contact-info--list" class="flex flex-col justify-around text-brand-red-800 gap-3"> <li class="flex flex-row gap-2"><span>${renderComponent($$result, "Phone", $$Phone, { "color": "#C3803C", "width": 20, "height": 20 })}</span>Calle 123 # 12 -32 Oficina 102 (Bogotá)</li> <li class="flex flex-row gap-2"><span>${renderComponent($$result, "LocationIcon", $$LocationIcon, { "color": "#C3803C", "width": 20, "height": 20 })}</span>(+57) 222-2222</li> <li class="flex flex-row gap-2"><span>${renderComponent($$result, "EmailIcon", $$EmailIcon, { "color": "#C3803C", "width": 20, "height": 20 })}</span>correo@latentia.com.co</li> </ul> </div> <div id="social" class="flex flex-col justify-baseline items-baseline text-brand-red-80 gap-5 p-2 w-auto"> <h2 class="text-2xl text-brand-peru">Nuestras redes</h2> <div id="social-Instagram" class="flex flex-row"><a href="/" target="_blank" class="flex flex-row gap-2 justify-center items-center">${renderComponent($$result, "InstagramIcon", $$InstagramIcon, { "color": "#C3803C", "width": 20, "height": 20 })}@Latetia - Instagram</a></div> <div id="social-linkedIn" class="flex flex-row"><a href="/" target="_blank" class="flex flex-row gap-2 justify-center items-center">${renderComponent($$result, "LinkedinIcon", $$LinkedinIcon, { "color": "#C3803C", "width": 20, "height": 20 })}Latentia Psicología - LinkedIn</a></div> <div id="social-Youtube" class="flex flex-row"><a href="/" target="_blank" class="flex flex-row gap-2 justify-center items-center">${renderComponent($$result, "TiktokIcon", $$TiktokIcon, { "color": "#C3803C", "width": 20, "height": 20 })}@Latentia - TikTok</a></div> </div> </div> </footer>`;
}, "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/components/Footer.astro", void 0);

const links = [
  {
    label: "Inicio",
    href: "/"
  },
  {
    label: "Nosotros",
    href: "/nosotros"
  },
  {
    label: "Servicios"
  },
  {
    label: "Contacto",
    href: "/contacto"
  }
];

const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, { "links": links })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $, renderScript as r };

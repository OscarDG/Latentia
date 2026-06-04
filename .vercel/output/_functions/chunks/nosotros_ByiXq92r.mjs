import { c as createComponent } from './astro-component_BVy0q73C.mjs';
import { m as maybeRenderHead, b as renderComponent, r as renderTemplate, c as addAttribute } from './entrypoint_BFwTI1_J.mjs';
import { r as renderScript, $ as $$MainLayout } from './MainLayout_083NTv6L.mjs';
import { $ as $$Button, t as thumb2, a as team } from './team_4k_7hbO6.mjs';
import { $ as $$Image } from './_astro_assets_Dsh3HQpx.mjs';

const $$HeroAbout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="hero-about" class="relative flex flex-col justify-end items-center w-full h-dvh min-h-screen bg-[url(../assets/images/about_bg.jpg)] bg-no-repeat md:bg-cover bg-cover bg-center 2xl:pb-20 lg:pb-10 md:pb-40 pb-20"> <div class="absolute inset-0 z-0 bg-linear-to-t from-black/70 rounded-sm"></div> <div class="flex flex-col justify-center items-center gap-15"> <div class="flex flex-col md:justify-around justify-center items-center w-auto h-auto bottom-20 left gap-5 z-10"> <h2 class="font-inter text-2xl md:text-3xl text-brand-peru-500 text-center">Slogan principal de la marca</h2> <h1 class="font-cormorant lg:text-8xl md:text-7xl text-5xl text-white text-center">Sobre Nosotros</h1> </div> <div id="hero-cta" class="flex flex-row w-[80%] justify-center items-center gap-10 z-10"> ${renderComponent($$result, "Button", $$Button, { "type": "main", "size": "lg", "link": "/" }, { "default": ($$result2) => renderTemplate`Main` })} </div> </div> </section>`;
}, "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/components/HeroAbout.astro", void 0);

const $$FeaturesAbout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col w-full justify-center h-auto min-h-screen gap-10 md:gap-30 pt-20 pb-10 md:pb-20"> <div class="flex flex-col w-full h-[10%] justify-around gap-20 items-center"> <ul class="flex flex-row justify-around items-center w-[90%] h-full md:h-full text-2xl font-inter md:gap-0 gap-5"> <li class="flex flex-col items-center justify-center w-[30%] md:h-33 h-23 gap-2 pl-1 md:pl-5 pr-1 md:pr-5 pt-2 pb-2 after:w-[60%] after:h-[0.5px] after:bg-brand-peru-500 after:mt-5"> <p class="md:text-md text-[1.2rem] text-brand-peru-500 text-center">Feature 1</p> <p class="text-xs text-gray-500 font-semibold text-center">Lorem ipsum dolor sit amet.</p> </li> <li class="flex flex-col items-center justify-center w-[30%] md:h-33 h-23 gap-2 pl-1 md:pl-5 pr-1 md:pr-5 pt-2 pb-2 after:w-[60%] after:h-[0.5px] after:bg-brand-peru-500 after:mt-5"> <p class="md:text-md text-[1.2rem] text-brand-peru-500 text-center">Feature 2</p> <p class="text-xs w-full text-gray-500 font-semibold text-center">Lorem ipsum dolor sit amet.</p> </li> <li class="flex flex-col items-center justify-center w-[30%] md:h-33 h-23 gap-2 pl-1 md:pl-5 pr-1 md:pr-5 pt-2 pb-2 after:w-[60%] after:h-[0.5px] after:bg-brand-peru-500 after:mt-5"> <p class="md:text-md text-[1.2rem] text-brand-peru-500 text-center">Feature 3</p> <p class="text-xs text-gray-500 font-semibold text-center">Lorem ipsum dolor sit amet.</p> </li> </ul> </div> <div class="flex flex-col md:flex-row w-full h-[90%] min-h-100 justify-center items-center gap-10 md:gap-0"> <div class="flex flex-col md:w-[50%] w-[90%] p-5 gap-10"> <h2 class="font-cormorant md:text-6xl text-3xl md:text-left text-center text-brand-red-500">Procesos que transforman</h2> <p class=" w-[90%] md:w-100 font-inter text-sm md:text-md md:text-left text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis rutrum sem, id fringilla risus. Nam quis consequat mauris. Aliquam malesuada libero nisi, sit amet rutrum erat auctor a.</p> </div> <div class="relative md:w-[35%] w-[80%] h-auto"> ${renderComponent($$result, "Image", $$Image, { "src": thumb2, "alt": "Feature Image", "width": 400, "height": 400, "class": "rounded-sm object-cover" })} <span class="absolute -bottom-8 -left-8 w-30 h-30 rounded-full bg-white"></span> <span class="absolute -bottom-4 -left-4 w-23 h-23 flex justify-center items-center rounded-full bg-brand-blue-600"> <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="#CE965F" class="icon icon-tabler icons-tabler-filled icon-tabler-heart"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z"></path> </svg> </span> </div> </div> </section>`;
}, "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/components/FeaturesAbout.astro", void 0);

const $$TeamAbout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$TeamAbout;
  const { team } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({});
  const teamWithImages = await Promise.all(
    team.filter((prof) => prof.available).map(async (prof) => {
      const imageModule = images[`../assets/team/${prof.thumb_link}`];
      const resolvedImage = imageModule ? (await imageModule()).default : null;
      return { ...prof, resolvedImage };
    })
  );
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col items-center w-full h-full min-h-screen mt-10 mb-10 before:w-[80%] before:h-[0.5px] before:bg-gray-200 before:mb-10"> <h1 class="w-[70%] h-[10%] font-cormorant text-4xl md:text-6xl text-center text-brand-red-600 mb-20 md:mb-30">Conoce a nuestro equipo</h1> <div class="flex flex-col w-full h-auto max-h-[90%] gap-10 justify-center items-center"> ${teamWithImages.map((prof) => renderTemplate`<div class="flex flex-col md:flex-row w-[90%] h-auto md:h-120 gap-2 md:gap-20 items-center justify-center md:after:w-0 after:w-[80%] after:h-[0.5px] after:bg-brand-blue-100/50 after:mb-10"> <div class="relative flex flex-col items-center w-full md:w-[30%] h-auto"> ${prof.resolvedImage ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": prof.resolvedImage.src, "alt": prof.name, "width": 400, "height": 400, "class": "rounded-sm object-cover max-h-100" })}` : renderTemplate`<img${addAttribute(prof.thumb_link, "src")}${addAttribute(prof.name, "alt")} class="rounded-sm object-cover w-[80%] md:w-full h-full max-h-80 md:max-h-100">`} </div> <div class="flex flex-col justify-between items-center w-full md:w-[40%] h-full pt-10 pb-10 gap-10"> <h2 class="w-full font-cormorant text-center md:text-left text-3xl text-brand-red-500">${prof.name}</h2> <p class="font-inter text-md text-gray-500 text-center md:text-left">${prof.description}</p> <div class="flex flex-row items-center md:justify-start justify-center w-full md:-[40%] gap-5"> ${prof.areas.map((area) => renderTemplate`<span class="w-auto h-auto pt-1.5 pb-1.5 pl-3 pr-3 rounded-sm bg-brand-peru-400 text-white text-sm">${area}</span>`)} </div> <div class="flex flex-row items-center justify-center md:justify-start w-full gap-5"> <button class="w-[40%] h-auto pt-2 pb-2 pl-3 pr-3 rounded-sm bg-brand-red-600 text-white text-sm hover:bg-brand-red-500 transition duration-300 cursor-pointer hover:ease-in hover:transform hover:scale-102">Pedir cita</button> </div> </div> </div>`)} </div> </section>`;
}, "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/components/TeamAbout.astro", void 0);

const image_url = new Proxy({"src":"/_astro/form_illustration.DCHTxjSb.png","width":400,"height":400,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/assets/images/form_illustration.png";
							}
							
							return target[name];
						}
					});

const $$FormAbout = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col items-center justify-center w-full h-full min-h-screen mt-10 bg-[url(../assets/images/landscape.jpg)] bg-no-repeat md:bg-cover bg-cover bg-center"> <div class="flex flex-row items-center w-[80%] h-[80%] min-h-120 bg-white rounded-md p-5"> <div class="flex flex-col justify-center items-center w-[50%] h-[90%] min-h-110 gap-10"> <div class="flex flex-col w-[90%] items-start gap-5"> <h2 class="w-[90%] text-4xl font-cormorant text-brand-red-500">Inicia tu camino con nosotros</h2> <p class="w-[80%] text-sm font-inter">Solicita una asesoría personalizada diligenciando nuestro formulario de contacto</p> </div> ${renderComponent($$result, "Image", $$Image, { "src": image_url, "alt": "Email", "class": "w-64 h-64 object-contain" })} </div> <form id="contactForm" class="flex flex-col justify-center items-center w-[50%] h-[90%] min-h-110 gap-10 rounded-sm bg-gray-100"> <input id="name" type="text" name="name" placeholder="Nombre completo" class="w-[80%] p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-red-500"> <input id="email" type="email" name="email" placeholder="Correo electrónico" class="w-[80%] p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-red-500"> <div class="flex flex-row w-[80%] gap-3"> <select id="dialCode" name="dialCode" class="w-30 p-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-red-500"> <option value="+57">COL +57</option> <option value="+1">US +1</option> <option value="+52">MX +52</option> <option value="+54">ARG +54</option> <option value="+56">CL +56</option> <option value="+51">PE +51</option> <option value="+58">VE +58</option> <option value="+593">EC +593</option> <option value="+591">BO +591</option> <option value="+595">PY +595</option> <option value="+598">UY +598</option> <option value="+34">ES +34</option> <option value="+55">BR +55</option> <option value="+44">GB +44</option> <option value="+49">DE +49</option> <option value="+33">FR +33</option> </select> <input id="phone" type="tel" name="phone" placeholder="Número de teléfono" class="w-[80%] p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-red-500"> </div> <p id="formMsg" class="hidden text-sm text-center w-[80%]"></p> <button id="submitBtn" type="submit" class="w-[80%] p-3 bg-brand-red-500 text-white rounded-md hover:bg-brand-red-600 transition-colors duration-300">Enviar</button> </form> </div> </section> ${renderScript($$result, "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/components/FormAbout.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/components/FormAbout.astro", void 0);

const $$Nosotros = createComponent(($$result, $$props, $$slots) => {
  const title = "Nosotros";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroAbout", $$HeroAbout, {})} ${renderComponent($$result2, "FeaturesAbout", $$FeaturesAbout, {})} ${renderComponent($$result2, "TeamAbout", $$TeamAbout, { "team": team })} ${renderComponent($$result2, "FormAbout", $$FormAbout, {})} ` })}`;
}, "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/pages/nosotros.astro", void 0);

const $$file = "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/pages/nosotros.astro";
const $$url = "/nosotros";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Nosotros,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

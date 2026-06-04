import { c as createComponent } from './astro-component_BBW6I32v.mjs';
import { m as maybeRenderHead, b as renderComponent, r as renderTemplate, c as addAttribute, d as renderSlot } from './entrypoint_CK2xrWc0.mjs';
import { r as renderScript, $ as $$MainLayout } from './MainLayout_DMTnLyfw.mjs';
import { $ as $$Button, a as team } from './team_99HVDZrM.mjs';
import { $ as $$Image } from './_astro_assets_B_T01o9e.mjs';

const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="hero-section" class="relative flex flex-col justify-end items-center w-full h-dvh min-h-screen bg-[url(../assets/images/hero_image.webp)] bg-no-repeat md:bg-cover bg-cover bg-center 2xl:pb-20 lg:pb-10 md:pb-40 pb-20"> <div class="absolute inset-0 z-0 bg-linear-to-t from-black/50 from-1% via-blur-md via-5% to-transparent to-90%"></div> <div class="flex flex-col justify-center items-center gap-15"> <div id="hero-text" class="flex flex-col md:justify-around justify-center items-center w-auto h-auto bottom-20 left gap-5 z-10"> <h1 class="font-cormorant lg:text-8xl md:text-7xl text-5xl text-brand-gray-100 text-center">This is the main text</h1> <h2 class="font-inter text-2xl text-brand-gray-100 text-center">Praesent sed justo interdum, ultrices magna at, tempor erat.</h2> </div> <div id="hero-cta" class="flex flex-row w-[80%] justify-center items-center gap-10 z-10"> ${renderComponent($$result, "Button", $$Button, { "type": "main", "size": "lg", "link": "/" }, { "default": ($$result2) => renderTemplate`Main` })} ${renderComponent($$result, "Button", $$Button, { "type": "second", "size": "lg", "link": "/" }, { "default": ($$result2) => renderTemplate`Second` })} </div> </div> </section>`;
}, "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/components/HeroSection.astro", void 0);

const $$ModalBtn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ModalBtn;
  const { size = "md", type = "main", state = true, modalId } = Astro2.props;
  const base = "flex items-center justify-center rounded-sm font-inter z-10 transition ease-in-out cursor-pointer";
  const sizes = {
    sm: "min-w-25 h-8 text-sm px-4 py-2",
    md: "min-w-30 h-10 text-md px-4 py-2",
    lg: "min-w-40 h-12 text-lg"
  };
  const variants = {
    main: "bg-brand-red-700 text-brand-gray-100 hover:bg-brand-red-600 hover:scale-102",
    thirth: "border border-brand-peru-400 text-brand-peru-400 hover:bg-brand-peru-400 hover:border-transparent hover:text-brand-peru-900",
    second: "bg-brand-peru-400 text-brand-peru-900 hover:bg-brand-peru-500 hover:scale-102"
  };
  const disabled = !state ? "opacity-50 pointer-events-none" : "";
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(modalId, "data-modal-target")}${addAttribute([base, variants[type], sizes[size], disabled], "class:list")}> ${renderSlot($$result, $$slots["default"])} </button>`;
}, "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/components/ModalBtn.astro", void 0);

const $$Modal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Modal;
  const { id, title = "Modal" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<dialog${addAttribute(id, "id")}${addAttribute(id, "data-modal")} class="modal-dialog fixed inset-0 md:top-20 top-5 md:left-52 left-5 pt-10 pb-10 rounded-sm bg-brand-gray-100 items-center justify-center z-50 md:w-[70%] w-full md:h-[80%] h-full drop-shadow-gray-500 drop-shadow-md transition-all ease-in-out animate-show" data-astro-cid-qmzm2soj> <div class="modal-content flex flex-col w-full h-full justify-between items-center gap-2 pb-1" data-astro-cid-qmzm2soj> <header class="modal-header absolute top-0 flex flex-row justify-between items-center h-10 w-full p-5" data-astro-cid-qmzm2soj> <button type="button" class="close-btn absolute right-5 top-5 group flex cursor-pointer rounded-full bg-brand-peru-300 hover:bg-brand-peru-500 h-6 md:h-10 w-6 md:w-10 justify-center items-center"${addAttribute(id, "data-modal-close")} aria-label="Cerrar modal" data-astro-cid-qmzm2soj> <svg class="w-4 md:w-6 h-4 md:h-6 icon icon-tabler icons-tabler-outline icon-tabler-x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#5A3B1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-qmzm2soj> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-qmzm2soj></path> <path d="M18 6l-12 12" data-astro-cid-qmzm2soj></path> <path d="M6 6l12 12" data-astro-cid-qmzm2soj></path> </svg> </button> </header> <div class="modal-body flex flex-col justify-between align-center w-[90%] md:w-[80%] h-[95%] md:h-[90%] mb-5 gap-10" data-astro-cid-qmzm2soj> ${renderSlot($$result, $$slots["default"])} </div> <footer class="modal-footer flex flex-row justify-center w-[90%] md:w-[30%]" data-astro-cid-qmzm2soj> ${renderSlot($$result, $$slots["footer"], renderTemplate` ${renderComponent($$result, "Button", $$Button, { "type": "main", "size": "md", "link": "/", "data-astro-cid-qmzm2soj": true }, { "default": ($$result2) => renderTemplate`Solicitar Servicio` })} `)} </footer> </div> </dialog>  ${renderScript($$result, "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/components/Modal.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/components/Modal.astro", void 0);

const service4 = new Proxy({"src":"/_astro/servicePeople.CDaY9r5f.webp","width":3840,"height":2160,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/assets/images/servicePeople.webp";
							}
							
							return target[name];
						}
					});

const $$ServicesPeople = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ServicesPeople;
  const { service } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="services-people" class="flex flex-col justify-around items-center w-full h-auto min-h-screen gap-10 md:gap-10 pt-20 pb-20"> <div id="services-people--maincard" class="flex flex-col md:flex-row w-[90%] md:w-[85%] lg:w-[80%] h-150 md:h-90 lg:h-115"> <div class="w-full md:w-[50%] h-[40%] md:h-full rounded-tl-sm rounded-tr-sm md:rounded-br-none md:rounded-tr-none md:rounded-bl-sm overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "src": service4, "alt": "Servicios personales", "class": "w-full h-full object-cover object-center rounded-tl-sm rounded-tr-sm md:rounded-br-none md:rounded-tr-none md:rounded-bl-sm hover:scale-110 transition ease-in" })} </div> <div class="flex flex-col w-full md:w-[50%] h-auto min-h-80 md:h-full justify-around items-start rounded-br-sm rounded-bl-sm md:rounded-tr-sm md:rounded-tl-none md:rounded-br-sm md:rounded-bl-none bg-white drop-shadow-sm pl-5 md:pl-8 pr-5 md:pr-0 pt-5 md:pt-0 pb-5 md:gap-0 gap-5"> <h2 class="text-3xl md:text-4xl text-brand-peru-500 font-cormorant">Servicios personales</h2> <p class=" w-full md:w-[80%] text-brand-gray-700 font-inter text-sm md:text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim at odio a ultrices. Duis non imperdiet neque. In hac habitasse platea dictumst. Fusce eu tempus augue. Mauris urna mauris, luctus quis quam ac, placerat luctus dolor. Maecenas pulvinar est diam, ac lobortis quam tincidunt vitae. Phasellus feugiat quis diam eget commodo. Nam sit amet ultricies arcu.</p> ${renderComponent($$result, "Button", $$Button, { "type": "second", "size": "md", "link": "/" }, { "default": ($$result2) => renderTemplate`Solicitar servicio` })} </div> </div> <div id="services-people--secondCards" class="flex flex-col md:flex-row flex-wrap w-[80%] md:w-[90%] lg:w-[80%] h-auto md:h-auto justify-around items-center gap-10 padding-5"> ${service.map((service2, index) => service2.type === "Persons" && renderTemplate`<div class="relative flex flex-col w-65 md:w-75 md:h-85 h-70 rounded-sm bg-cover bg-no-repeat bg-center p-3"${addAttribute(`background-image: url("${service2.thumb_link}")`, "style")} people-animate> <div class="absolute inset-0 z-0 bg-linear-to-t from-black/70 rounded-sm"></div> <div class="flex flex-col w-full h-[70%] justify-around"> <h2 class="text-white font-inter text-2xl z-10">${service2.title}</h2> <p class="text-white font-inter text-sm z-10">${service2.shortText}</p> </div> <div class="absolute bottom-6 right-6"> ${renderComponent($$result, "ModalBtn", $$ModalBtn, { "modalId": `service-modal-${index}`, "type": "second", "size": "sm" }, { "default": ($$result2) => renderTemplate`Ver más` })} </div> </div>
            ${renderComponent($$result, "Modal", $$Modal, { "id": `service-modal-${index}`, "title": service2.title }, { "default": ($$result2) => renderTemplate` <div class="flex flex-col w-auto h-full justify-around items-center gap-5"> <h2 class="text-center font-cormorant text-2xl md:text-3xl text-brand-peru-500">${service2.title}</h2> <p class="text-left font-inter text-md md:text-lg text-brand-gray-700">${service2.mainText}</p> <ul class="flex flex-row md:flex-row justify-around flex-wrap md:gap-6 gap-3 w-[80%] text-brand-gray-700 text-md md:text-lg font-inter h-auto"> ${service2.features.map((feature) => renderTemplate`<li class="flex flex-row items-start font-inter"> <span class="leading-snug w-auto h-auto pl-2 md:pl-4 pr-2 md:pr-4 pb-2 md:pb-3 pt-2 md:pt-3 rounded-4xl bg-brand-red-300 md:text-sm text-[0.6em] text-brand-red-800">${feature}</span> </li>`)} </ul> </div> ` })}`)} </div> </section> ${renderScript($$result, "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/components/ServicesPeople.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/components/ServicesPeople.astro", void 0);

const service5 = new Proxy({"src":"/_astro/servicePeople2.vGQ1lrGd.webp","width":1280,"height":853,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/assets/images/servicePeople2.webp";
							}
							
							return target[name];
						}
					});

const $$ServicesCorporative = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ServicesCorporative;
  const { service } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="services-corporative" class="flex flex-col justify-around items-center w-full h-auto min-h-screen gap-10 md:gap-10 pt-20 pb-15"> <div id="services-people--maincard" class="flex flex-col md:flex-row w-[90%] md:w-[85%] lg:w-[80%] h-150 md:h-90 lg:h-115"> <div class="order-2 md:order-1 flex flex-col w-full md:w-[50%] h-auto min-h-80 md:h-full justify-around items-start bg-white drop-shadow-sm rounded-br-sm rounded-bl-sm md:rounded-tl-sm md:rounded-tr-none md:rounded-bl-sm md:rounded-br-none gap-5 pl-5 md:pl-8 pr-5 md:pr-0 pt-5 md:pt-0 pb-5"> <h2 class="text-3xl md:text-4xl text-brand-peru-500 font-cormorant">Servicios Corporativos</h2> <p class=" w-full md:w-[80%] text-brand-gray-700 font-inter text-sm md:text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim at odio a ultrices. Duis non imperdiet neque. In hac habitasse platea dictumst. Fusce eu tempus augue. Mauris urna mauris, luctus quis quam ac, placerat luctus dolor. Maecenas pulvinar est diam, ac lobortis quam tincidunt vitae. Phasellus feugiat quis diam eget commodo. Nam sit amet ultricies arcu.</p> ${renderComponent($$result, "Button", $$Button, { "type": "second", "size": "md", "link": "/" }, { "default": ($$result2) => renderTemplate`Solicitar servicio` })} </div> <div class="order-1 md:order-2 w-full md:w-[50%] h-[40%] md:h-full rounded-tl-sm rounded-tr-sm md:rounded-bl-none md:rounded-tl-none md:rounded-tr-sm md:rounded-br-sm overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "src": service5, "alt": "Servicios corporativos", "class": "w-full h-full object-cover object-center rounded-tl-sm rounded-tr-sm md:rounded-bl-none md:rounded-tl-none md:rounded-tr-sm md:rounded-br-sm hover:scale-110 transition ease-in" })} </div> </div> <div id="services-people--secondCards" class="flex flex-col md:flex-row flex-wrap w-[80%] md:w-[90%] lg:w-[80%] h-auto md:h-auto justify-around items-center gap-10 padding-5"> ${service.map((service2, index) => service2.type === "Corporative" && renderTemplate`<div class="relative flex flex-col w-65 md:w-75 md:h-85 h-70 rounded-sm md:rounded-sm bg-cover bg-no-repeat bg-center p-3 overflow-hidden"${addAttribute(`background-image: url("${service2.thumb_link}")`, "style")} corporate-animate> <div class="absolute inset-0 z-0 bg-linear-to-t from-black/70 rounded-sm"></div> <div class="flex flex-col w-full h-[70%] justify-around"> <h2 class="text-white font-inter text-2xl z-10">${service2.title}</h2> <p class="text-white font-inter text-sm z-10">${service2.shortText}</p> </div> <div class="absolute bottom-6 right-6"> ${renderComponent($$result, "ModalBtn", $$ModalBtn, { "modalId": `service-modal-${index}`, "type": "second", "size": "sm" }, { "default": ($$result2) => renderTemplate`Ver más` })} </div> </div>
            ${renderComponent($$result, "Modal", $$Modal, { "id": `service-modal-${index}`, "title": service2.title }, { "default": ($$result2) => renderTemplate` <div class="flex flex-col w-auto h-full justify-around items-center gap-5"> <h2 class="text-center font-cormorant text-2xl md:text-3xl text-brand-peru-500">${service2.title}</h2> <p class="text-left font-inter text-lg text-brand-gray-700">${service2.mainText}</p> <ul class="flex flex-row md:flex-row justify-around flex-wrap md:gap-6 gap-3 w-[80%] text-brand-gray-700 text-md md:text-lg font-inter h-auto"> ${service2.features.map((feature) => renderTemplate`<li class="flex flex-row gap-4 items-start font-inter"> <span class="leading-snug w-auto h-auto pl-2 md:pl-4 pr-2 md:pr-4 pb-2 md:pb-3 pt-2 md:pt-3 rounded-4xl bg-brand-red-300 md:text-sm text-[0.6em] text-brand-red-800">${feature}</span> </li>`)} </ul> </div> ` })}`)} </div> </section> ${renderScript($$result, "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/components/ServicesCorporative.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/components/ServicesCorporative.astro", void 0);

const $$Features = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative flex flex-col w-full h-auto min-h-screen justify-around items-center pt-10 pb-10 before:w-[80%] before:h-[0.5px] before:bg-gray-200 before:mb-10"> <div class="flex flex-col justify-center items-center w-full h-auto gap-5 mb-20"> <h2 class="font-cormorant text-brand-peru-500 text-4xl md:text-6xl text-center">Lo que nos caracteriza</h2> <p class="font-inter text-shadow-brand-blue-900 text-xl w-[90%] md:w-[50%] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> </div> <div class="flex flex-col md:flex-col lg:flex-row justify-center items-center w-[90%] md:w-[95%] md:gap-x-5 gap-x-0 lg:gap-y-0 md:gap-y-10 gap-y-10"> <div id="features-video" class="w-90 md:w-[80%] lg:w-[45%] h-100 md:h-140 lg:h-130 rounded-sm overflow-hidden"> <iframe src="https://www.youtube.com/embed/3i76Ow2Nw4E?start=481" title="Youtube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="w-full h-full"></iframe> </div> <div id="features-cards" class="flex flex-col items-center justify-center md:flex-row lg:flex-row align-middle flex-wrap lg:w-[50%] md:w-[90%] w-[90%] h-auto md:h-auto lg:h-140 p-1 gap-4 md:gap-6 lg:gap-4"> <div class="flex flex-row md:flex-col lg:flex-col justify-ariund items-center w-full md:w-[35%] lg:w-[42%] h-[25%] md:h-[48%] lg:h-[48%] md:gap-y-2 bg-white rounded-sm p-3 drop-shadow-xs hover:drop-shadow-sm transition ease-in hover:-translate-y-1" card-animate> <div class="w-40 md:w-40 lg:w-[75%] h-30 md:h-30 lg:h-[70%] rounded-sm bg-[url(../assets/icons/equipo.png)] bg-center bg-no-repeat"></div> <div class="flex flex-col justify-around items-center w-[55%] md:w-[85%] h-[40%] md:h-[30%] font-inter"> <h3 class="font-bold text-brand-red-500">Feature 1</h3> <p class="text-center text-sm text-brand-blue-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> </div> </div> <div class="flex flex-row md:flex-col lg:flex-col justify-ariund items-center w-full md:w-[35%] lg:w-[42%] h-[25%] md:h-[48%] lg:h-[48%] md:gap-y-2 bg-white rounded-sm p-3 drop-shadow-xs hover:drop-shadow-sm transition ease-in hover:-translate-y-1" card-animate> <div class="w-40 md:w-40 lg:w-[75%] h-30 md:h-30 lg:h-[70%] rounded-sm bg-[url(../assets/icons/buena-actitud.png)] bg-center bg-no-repeat"></div> <div class="flex flex-col justify-around items-center w-[55%] md:w-[85%] h-[40%] md:h-[30%] font-inter"> <h3 class="font-bold text-brand-red-500">Feature 2</h3> <p class="text-center text-sm text-brand-blue-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p> </div> </div> <div class="flex flex-row md:flex-col lg:flex-col justify-ariund items-center w-full md:w-[35%] lg:w-[42%] h-[25%] md:h-[48%] lg:h-[48%] md:gap-y-2 bg-white rounded-sm p-3 drop-shadow-xs hover:drop-shadow-sm transition ease-in hover:-translate-y-1" card-animate> <div class="w-40 md:w-40 lg:w-[75%] h-30 md:h-30 lg:h-[70%] rounded-sm bg-[url(../assets/icons/empresario.png)] bg-center bg-no-repeat"></div> <div class="flex flex-col justify-around items-center w-[55%] md:w-[85%] h-[40%] md:h-[30%] font-inter"> <h3 class="font-bold text-brand-red-500">Feature 3</h3> <p class="text-center text-sm text-brand-blue-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> </div> </div> <div class="flex flex-row md:flex-col lg:flex-col justify-ariund items-center w-full md:w-[35%] lg:w-[42%] h-[25%] md:h-[48%] lg:h-[48%] md:gap-y-2 bg-white rounded-sm p-3 drop-shadow-xs hover:drop-shadow-sm transition ease-in hover:-translate-y-1" card-animate> <div class="w-40 md:w-40 lg:w-[75%] h-30 md:h-30 lg:h-[70%] rounded-sm bg-[url(../assets/icons/comunidad.png)] bg-center bg-no-repeat"></div> <div class="flex flex-col justify-around items-center w-[55%] md:w-[85%] h-[40%] md:h-[30%] font-inter"> <h3 class="font-bold text-brand-red-500">Feature 4</h3> <p class="text-center text-sm text-brand-blue-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> </div> </div> </div> </div> </section> ${renderScript($$result, "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/components/Features.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/components/Features.astro", void 0);

const $$Team = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Team;
  const { team } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({});
  const teamWithImages = await Promise.all(
    team.filter((prof) => prof.available).map(async (prof) => {
      const imageModule = images[`../assets/team/${prof.thumb_link}`];
      const resolvedImage = imageModule ? (await imageModule()).default : null;
      return { ...prof, resolvedImage };
    })
  );
  return renderTemplate`${maybeRenderHead()}<section id="team-section" class="flex flex-col items-center w-full h-full min-h-screen mt-10 mb-10 before:w-[80%] before:h-[0.5px] before:bg-gray-200 before:mb-10"> <div id="team-title" class="flex flex-col w-full h-auto p-5 gap-2 mb-20"> <h2 class="font-inter text-2xl text-center text-brand-peru-500">Profesionales que conectan contigo</h2> <h3 class="font-cormorant font-bold text-4xl text-center text-brand-red-500">Nuestro equipo</h3> </div> <div id="team-cards" class="flex flex-col md:flex-col lg:flex-row items-center lg:items-baseline w-[90%] md:w-[90%] h-auto min-h-100 lg:min-h-100 gap-10"> ${teamWithImages.map(((prof) => renderTemplate`<div class="relative flex flex-col md:flex-row lg:flex-col justify-center items-center w-[80%] md:w-full lg:w-[80%] h-auto"> <div id="first-card" class="relative flex flex-col justify-around items-center w-full md:max-w-70 md:min-w-75 h-80 rounded-sm shadow-sm"> <div class="absolute inset-0 overflow-hidden rounded-sm"> ${prof.resolvedImage ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": prof.resolvedImage.src, "alt": prof.name, "class": "w-full object-cover object-center hover:scale-105 transition-transform ease-in" })}` : renderTemplate`<img${addAttribute(prof.thumb_link, "src")}${addAttribute(prof.name, "alt")} class="w-full h-full object-cover object-center hover:scale-105 transition-transform ease-in">`} </div> <div id="card-text" class="absolute bottom-12 z-20 flex flex-col w-full px-5 pb-3"> <h3 class="absolute bottom-10 left-5 font-inter font-semibold text-white">${prof.name}</h3> <p class="absolute bottom-5 left-5 font-inter text-white">${prof.profession}</p> </div> <div id="card-buttons" class="absolute bottom-5 z-10 flex flex-row gap-5"> ${renderComponent($$result, "Button", $$Button, { "type": "second", "size": "sm", "clase": "card-button" }, { "default": async ($$result2) => renderTemplate`
ver más
<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M6 9l6 6l6 -6"></path> </svg> ` })} ${renderComponent($$result, "Button", $$Button, { "type": "main", "size": "sm", "link": "/" }, { "default": async ($$result2) => renderTemplate`Pedir cita` })} </div> </div> <div id="second-card" class="flex flex-col justify-center items-center w-full md:w-[85%] lg:w-75 h-70 rounded-sm shadow-sm z-10 overflow-hidden max-h-0 md:max-w-0 md:max-h-none md:h-80 lg:max-w-full lg:max-h-0 transition-[max-height,max-width] duration-500 ease-in-out"> <p class="flex flex-col justify-center w-full h-full p-5">${prof.description}</p> </div> </div>`))} </div> </section> ${renderScript($$result, "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/components/Team.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/components/Team.astro", void 0);

const $$BannerHome = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col justify-center items-center w-full h-auto min-h-200 md:min-h-150 bg-[url(../assets/images/landscape.jpg)] bg-no-repeat md:bg-cover bg-cover bg-center lg:gap-30 md:gap-30 gap-20"> <div> <h2 class="font-cormorant text-6xl text-white text-center">Banner text</h2> <p class="font-inter text-2xl text-white text-center">banner second text</p> </div> <div> ${renderComponent($$result, "Button", $$Button, { "type": "second", "size": "lg" }, { "default": ($$result2) => renderTemplate`Empieza ahora` })} </div> </section>`;
}, "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/components/BannerHome.astro", void 0);

const service1 = new Proxy({"src":"/_astro/hero_image.BSSHC1my.webp","width":1376,"height":768,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/assets/images/hero_image.webp";
							}
							
							return target[name];
						}
					});

const services = [
  {
    type: "Persons",
    title: "Service 1",
    shortText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim at odio a ultrices. Duis non imperdiet neque. In hac habitasse platea dictumst. Fusce eu tempus augue.",
    mainText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat diam eget leo laoreet, a vehicula arcu mollis. Morbi et mauris rutrum, maximus ante quis, iaculis velit. Maecenas tincidunt nibh sit amet mauris consequat tincidunt. Cras facilisis, eros a egestas convallis, orci lacus vehicula dolor, nec luctus libero lectus ac ligula. Aenean ut sapien orci. Integer convallis porta dui eu egestas.",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3"
    ],
    thumb_link: service1.src,
    link: "/service1"
  },
  {
    type: "Persons",
    title: "Service 2",
    shortText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim at odio a ultrices. Duis non imperdiet neque. In hac habitasse platea dictumst. Fusce eu tempus augue.",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3"
    ],
    mainText: "",
    thumb_link: service4.src,
    link: "/service2"
  },
  {
    type: "Persons",
    title: "Service 3",
    shortText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim at odio a ultrices. Duis non imperdiet neque. In hac habitasse platea dictumst. Fusce eu tempus augue.",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3",
      "Feature 4"
    ],
    mainText: "",
    thumb_link: service5.src,
    link: "/service3"
  },
  {
    type: "Corporative",
    title: "Service 4",
    shortText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim at odio a ultrices. Duis non imperdiet neque. In hac habitasse platea dictumst. Fusce eu tempus augue.",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3",
      "Feature 4"
    ],
    mainText: "",
    thumb_link: service4.src,
    link: "/service4"
  },
  {
    type: "Corporative",
    title: "Service 5",
    shortText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim at odio a ultrices. Duis non imperdiet neque. In hac habitasse platea dictumst. Fusce eu tempus augue.",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3",
      "Feature 4"
    ],
    mainText: "",
    thumb_link: service5.src,
    link: "/service5"
  }
];

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Latentia";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, {})} ${renderComponent($$result2, "ServicesPeople", $$ServicesPeople, { "service": services })} ${renderComponent($$result2, "ServicesCorporative", $$ServicesCorporative, { "service": services })} ${renderComponent($$result2, "Features", $$Features, {})} ${renderComponent($$result2, "Team", $$Team, { "team": team })} ${renderComponent($$result2, "BannerHome", $$BannerHome, {})} ` })}`;
}, "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/pages/index.astro", void 0);

const $$file = "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

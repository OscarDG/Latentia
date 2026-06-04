import { c as createComponent } from './astro-component_BBW6I32v.mjs';
import { m as maybeRenderHead, c as addAttribute, d as renderSlot, r as renderTemplate } from './entrypoint_CK2xrWc0.mjs';

const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Button;
  const { size = "md", type = "main", state = true, link, clase } = Astro2.props;
  const base = "flex items-center justify-center items-center rounded-sm font-inter z-10 transition ease-in-out cursor-pointer gap-2";
  const sizes = {
    sm: "min-w-25 min-h-8 text-sm px-4 py-2",
    md: "min-w-30 min-h-10 text-md px-4 py-2",
    lg: "min-w-40 min-h-12 text-lg px-4 py-2"
  };
  const variants = {
    main: "bg-brand-red-700 text-brand-gray-100 hover:bg-brand-red-600 hover:scale-102",
    thirth: "border border-brand-peru-400 text-brand-peru-400 hover:bg-brand-peru-400 hover:border-transparent hover:text-brand-peru-900",
    second: "bg-brand-peru-400 text-brand-peru-900 hover:bg-brand-peru-500 hover:scale-102"
  };
  const disabled = !state ? "opacity-50 pointer-events-none" : "";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")}${addAttribute([clase, base, variants[type], sizes[size], disabled], "class:list")}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/components/Button.astro", void 0);

const thumb2 = new Proxy({"src":"/_astro/man1.DwHUYkcB.jpg","width":1739,"height":1920,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/assets/images/man1.jpg";
							}
							
							return target[name];
						}
					});

const thumb1 = new Proxy({"src":"/_astro/women1.7SIm_PrJ.jpg","width":1593,"height":1920,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/assets/images/women1.jpg";
							}
							
							return target[name];
						}
					});

const thumb3 = new Proxy({"src":"/_astro/women2.DcavWPC4.jpg","width":1305,"height":1920,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/espar/OneDrive/Escritorio/Programming/Latentia/latentia/src/assets/images/women2.jpg";
							}
							
							return target[name];
						}
					});

const team = [
  {
    id: 1,
    name: "Andrea Arevalo",
    profession: "Psicóloga Clínica",
    areas: [
      "Psicología familiar",
      "Psicología infantil"
    ],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper nisl a odio dapibus, nec dictum neque fringilla. Vivamus feugiat congue tempor. Etiam fermentum sapien et gravida vehicula. Vivamus tincidunt augue in libero imperdiet, et blandit orci sodales. In scelerisque cursus nisl in dapibus.",
    available: true,
    thumb_link: thumb1.src
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    profession: "Psiquiatra",
    areas: [
      "Psiquiatría infantil",
      "Neurología"
    ],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper nisl a odio dapibus, nec dictum neque fringilla. Vivamus feugiat congue tempor. Etiam fermentum sapien et gravida vehicula. Vivamus tincidunt augue in libero imperdiet, et blandit orci sodales. In scelerisque cursus nisl in dapibus.",
    available: true,
    thumb_link: thumb2.src
  },
  {
    id: 3,
    name: "María Padilla",
    profession: "Neuropsicóloga",
    areas: [
      "Psiquiatría infantil",
      "Neurología"
    ],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper nisl a odio dapibus, nec dictum neque fringilla. Vivamus feugiat congue tempor. Etiam fermentum sapien et gravida vehicula. Vivamus tincidunt augue in libero imperdiet, et blandit orci sodales. In scelerisque cursus nisl in dapibus.",
    available: true,
    thumb_link: thumb3.src
  }
];

export { $$Button as $, team as a, thumb2 as t };

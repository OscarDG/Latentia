import type {Service} from "../types/services_types.ts"

import service1 from "../assets/images/hero_image.webp"
import service2 from "../assets/images/servicePeople.webp"
import service3 from "../assets/images/servicePeople2.webp"

export const services: Service[] = [
    {
        title: "Service 1",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim at odio a ultrices. Duis non imperdiet neque. In hac habitasse platea dictumst. Fusce eu tempus augue.",
        thumb_link: service1.src,
        link: "/service1"
    },
    {
        title: "Service 2",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim at odio a ultrices. Duis non imperdiet neque. In hac habitasse platea dictumst. Fusce eu tempus augue.",
        thumb_link: service2.src,
        link: "/service2"
    },
    {
        title: "Service 3",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim at odio a ultrices. Duis non imperdiet neque. In hac habitasse platea dictumst. Fusce eu tempus augue.",
        thumb_link: service3.src,
        link: "/service3"   
    }
]
import type {Service} from "../types/services_types.ts"

import service1 from "../assets/images/hero_image.webp"
import service2 from "../assets/images/servicePeople.webp"
import service3 from "../assets/images/servicePeople2.webp"
import service4 from "../assets/images/servicePeople.webp"
import service5 from "../assets/images/servicePeople2.webp"

export const services: Service[] = [
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
        thumb_link: service2.src,
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
        thumb_link: service3.src,
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

]
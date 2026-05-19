import type {Team} from "../types/team_types"

import thumb1 from "../assets/images/women1.jpg"
import thumb2 from "../assets/images/man1.jpg"
import thumb3 from "../assets/images/women2.jpg"

export const team: Team[] = [
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
        thumb_link: thumb1.src,
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
        thumb_link: thumb2.src,
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
        thumb_link: thumb3.src,
    }
]
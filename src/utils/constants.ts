import {
    SiFigma,
    SiCss3,
    SiTypescript,
    SiReact,
    SiNodedotjs,
    SiMongodb,
} from "react-icons/si";
import type { IconType } from "react-icons";

interface ToolIcon {
    name: string;
    Icon: IconType;
}

interface Project {
    id: string;
    image: string;
    title: string;
    summary: string;
    url: string;
    tools: ToolIcon[];
}

/**
 * An object containing all the projects made
 */
const PROJECTS_INFO: Project[] = [
    {
        id: "devfolio",
        title: "DevFolio",
        image: "https://picsum.photos/400/300",
        summary: "Portfólio moderno para desenvolvedores.",
        url: "",
        tools: [
            { Icon: SiReact, name: "React" },
            { Icon: SiTypescript, name: "TypeScript" },
            { Icon: SiCss3, name: "CSS3" },
        ],
    },
    {
        id: "taskify",
        title: "Taskify",
        image: "https://picsum.photos/401/301",
        summary: "App de tarefas com Kanban.",
        url: "",
        tools: [
            { Icon: SiReact, name: "React" },
            { Icon: SiTypescript, name: "TypeScript" },
            { Icon: SiNodedotjs, name: "Node.js" },
        ],
    },
    {
        id: "fintrack",
        title: "FinTrack",
        image: "https://picsum.photos/402/302",
        summary: "Controle financeiro pessoal.",
        url: "",
        tools: [
            { Icon: SiReact, name: "React" },
            { Icon: SiMongodb, name: "MongoDB" },
            { Icon: SiNodedotjs, name: "Node.js" },
        ],
    },
    {
        id: "litkeep",
        title: "LitKeep",
        image: "https://picsum.photos/403/303",
        summary: "Gerenciador de livros",
        url: "",
        tools: [
            { Icon: SiFigma, name: "Figma" },
            { Icon: SiReact, name: "React" },
            { Icon: SiCss3, name: "CSS3" },
        ],
    },
] as const;

export { PROJECTS_INFO };
export type { Project, ToolIcon };

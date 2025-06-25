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
    description: string;
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
        description:
            "Uma página pessoal responsiva criada com React e TypeScript, com layout limpo, animações suaves e foco em performance.",
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
        description:
            "Gerenciador de tarefas no estilo Trello, com colunas, drag and drop e persistência local.",
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
        description:
            "Aplicativo de controle financeiro com gráficos e categorias personalizadas. Interface intuitiva e mobile-first.",
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
        description:
            "Um site para adicionar, remover ou até filtrar livros registrados, com interface simples, eficaz e objetiva e persistência local",
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

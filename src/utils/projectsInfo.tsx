import type { ReactNode } from "react";

import { FaReact, FaNodeJs, FaCss3Alt, FaFigma } from "react-icons/fa";
import { SiTypescript, SiMongodb } from "react-icons/si";

interface Tool {
    icon: ReactNode;
    name: string;
}

export interface Project {
    id: string;
    image: string;
    title: string;
    summary: string;
    description: string;
    tools: Tool[];
}

export const projectsInfo: Project[] = [
    {
        id: "devfolio",
        title: "DevFolio",
        image: "https://picsum.photos/400/300",
        summary: "Portfólio moderno para desenvolvedores.",
        description:
            "Uma página pessoal responsiva criada com React e TypeScript, com layout limpo, animações suaves e foco em performance.",
        tools: [
            { icon: <FaReact />, name: "React" },
            { icon: <SiTypescript />, name: "TypeScript" },
            { icon: <FaCss3Alt />, name: "CSS Modules" },
        ],
    },
    {
        id: "taskify",
        title: "Taskify",
        image: "https://picsum.photos/401/301",
        summary: "App de tarefas com Kanban.",
        description:
            "Gerenciador de tarefas no estilo Trello, com colunas, drag and drop e persistência local.",
        tools: [
            { icon: <FaReact />, name: "React" },
            { icon: <SiTypescript />, name: "TypeScript" },
            { icon: <FaNodeJs />, name: "Node.js" },
        ],
    },
    {
        id: "fintrack",
        title: "FinTrack",
        image: "https://picsum.photos/402/302",
        summary: "Controle financeiro pessoal.",
        description:
            "Aplicativo de controle financeiro com gráficos e categorias personalizadas. Interface intuitiva e mobile-first.",
        tools: [
            { icon: <FaReact />, name: "React" },
            { icon: <SiMongodb />, name: "MongoDB" },
            { icon: <FaNodeJs />, name: "Node.js" },
        ],
    },
    {
        id: "litkeep",
        title: "LitKeep",
        image: "https://picsum.photos/403/303",
        summary: "Gerenciador de livros",
        description:
            "Um site para adicionar, remover ou até filtrar livros registrados, com interface simples, eficaz e objetiva e persistência local",
        tools: [
            { icon: <FaFigma />, name: "Figma" },
            { icon: <FaReact />, name: "React" },
            { icon: <FaCss3Alt />, name: "CSS3" },
        ],
    },
] as const;

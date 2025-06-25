import type { JSX } from "react";
import type { ToolIcon } from "../../utils/constants";

import styles from "./ToolCard.module.css";

interface ToolCardProps {
    name: string;
    tool: ToolIcon;
    size?: "small" | "normal";
}

/**
 * Renders a custom card to wrapper a tool icon and its name.
 *
 * @param {Object} props - The properties of the component.
 * @param {ToolIcon} props.tool - An object containing the icon component and its 
 * name to be rendered.
 * @param {"small" | "normal"} [props.size] - The size of the card. If not passed, 
 * sets `"normal"` as default.
 *
 * @returns {JSX.Element} A JSX element representing a card to wrapper a tool.
 */
function ToolCard({ tool, size = "normal" }: ToolCardProps): JSX.Element {
    const { Icon, name } = tool;

    return (
        <div className={`${styles.tool} ${styles[size]}`}>
            <span className={`${styles.tool__icon}`}>
                <abbr title={name}><Icon /></abbr>
            </span>
        </div>
    );
}

export default ToolCard;

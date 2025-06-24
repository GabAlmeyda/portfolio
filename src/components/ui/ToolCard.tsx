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
 * @param {string} props.name - The name of the icon to be rendered side-by-side.
 * @param {ToolIcon} props.tool - An object containing the icon component and its color to be
 * rendered.
 * @param {"small" | "normal"} [props.size] - The size of the card. If not passed, sets `"normal"`
 * as default.
 *
 * @returns {JSX.Element} A JSX element representing a card to wrapper a tool.
 */
function ToolCard({ name, tool, size = "normal" }: ToolCardProps): JSX.Element {
    const { Icon, color } = tool;

    return (
        <div className={`${styles.tool} ${styles[size]}`}>
            <span data-title={name} className={`${styles.tool__icon}`}>
                <Icon style={{ color: color }} />
            </span>
        </div>
    );
}

export default ToolCard;

import type { JSX } from "react";
import type { ToolIcon } from "../../utils/constants";

import styles from "./ToolCard.module.css";

interface ToolCardProps {
    tools: ToolIcon[];
    name: string;
    size?: "small" | "normal";
}

/**
 * Renders a custom card to wrapper a tool icon and its name.
 *
 * @param {Object} props - The properties of the component.
 * @param {ToolIcon[]} props.tools - An array containing the icons and their colors to be rendered.
 * This array length must be up to 2 icons.
 * @param {string} props.name - The name of the icon to be rendered side-by-side.
 * @param {"small" | "normal"} [props.size] - The size of the card. If not passed, sets `"normal"`
 * as default.
 *
 * @returns {JSX.Element} A JSX element representing a card to wrapper a tool.
 */
function ToolCard({
    tools,
    name,
    size = "normal",
}: ToolCardProps): JSX.Element {
    if (tools.length > 2) {
        console.warn(
            "Invalid prop received in the 'ToolCard' component: 'Icons' length must be up to 2 items."
        );
    }

    return (
        <div className={`${styles.tool} ${styles[size]}`}>
            <span
                className={`${styles.tool__icons} ${
                    tools.length === 2 && styles.tool__twoIcons
                }`}
            >
                {tools.map(({ Icon, color }) => (
                    <Icon style={{ color: color }} />
                ))}
            </span>
            <span className={styles.tool__name}>
                <p>{name}</p>
            </span>
        </div>
    );
}

export default ToolCard;

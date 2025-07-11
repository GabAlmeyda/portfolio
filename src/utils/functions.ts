/**
 * Scrolls to a specific element by its ID.
 *
 * @param {string} id - The ID of the target element.
 *
 * @returns {boolean} Whether the navigaton was successful.
 */
function navigateTo(id: string): boolean {
    const element = document.getElementById(id);
    if (!element) {
        console.error(
            `[navigateTo] Element with id '${id}' not found in the DOM.`
        );
        return false;
    }

    element.scrollIntoView({ behavior: "smooth" });
    if (!element.hasAttribute("tabindex")) {
        element.setAttribute("tabindex", "-1");
    }
    setTimeout(() => element.focus(), 500);

    return true;
}

export { navigateTo };

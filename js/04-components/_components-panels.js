/* ==========================================================================
   #PANELS
   ========================================================================== */

export let _components_Panels = (function () {
    const setup = () => {

        const panels = document.querySelectorAll("._js-c-panels__action--expand-collapse");
        const panels_delete = document.querySelectorAll("._js-c-panels__action--delete");


        // TODO Move this to _tools-functions
        function addEventListenerList(list, event, fn) {
            for (let i = 0, len = list.length; i < len; i++) {
                list[i].addEventListener(event, () => {
                    fn(list[i]);
                }, false);
            }
        }

        addEventListenerList(panels, "click", expandCollapse);
        addEventListenerList(panels_delete, "click", deletePanel);

    };

    const expandCollapse = (element) => {
        let panel = element.closest(".c-panel");

        if(panel.classList.contains("c-panel--collapsed")) {
            panel.classList.remove("c-panel--collapsed");
        }
        else {
            panel.classList.add("c-panel--collapsed");
        }
    };

    const deletePanel = (element) => {
        let panel = element.closest(".c-panel");

        if (panel) {
            panel.remove();
        }
    };

    return {
        Name: "04-Components/_components-panels",
        Setup: setup,
    };
})();
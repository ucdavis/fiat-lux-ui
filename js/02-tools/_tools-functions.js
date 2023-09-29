/* ==========================================================================
   #FUNCTIONS
   ========================================================================== */

export let _tools_Functions = (function () {

    const focusElement = (element) => {
        element.classList.add("u-filter-exception");
    };

    const unfocusElement = (element) => {
        element.classList.remove("u-filter-exception");
    };

    const blurBackground = () => {
        document.querySelector("body").classList.add("u-filter-blur");
    }

    const unblurBackground = () => {
        document.querySelector("body").classList.remove("u-filter-blur");
    }

    return {
        Name: "02-tools/_tools-functions",
        FocusElement: focusElement,
        UnfocusElement: unfocusElement,
        BlurBackground: blurBackground,
        UnblurBackground: unblurBackground
    };
})();
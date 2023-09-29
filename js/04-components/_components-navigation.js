/* ==========================================================================
   #NAVIGATION
   ========================================================================== */

export let _components_Navigation = (function () {
    const setup = () => {

        const mobileMenu = document.querySelectorAll("._js-c-navigation-mobile--toggle-display");
        const mobileDropdownButtons = document.querySelectorAll("._js-c-navigation-mobile-dropdown");

        function addEventListenerList(list, event, fn) {
            for (let i = 0, len = list.length; i < len; i++) {
                list[i].addEventListener(event, () => {
                    fn(list[i]);
                }, false);
            }
        }

        addEventListenerList(mobileMenu, "click", (e) => {
            toggleDisplay(e, ".c-navigation", ".c-navigation__menu--options",
                "u-fade-out--bp-xl", "u-fade-in--bp-xl",
                "fa-bars", "fa-x");
        });

        addEventListenerList(mobileDropdownButtons, "click", (e) => {
            toggleDisplay(e, ".c-navigation__item", ".c-navigation__dropdown",
                "u-fade-out--bp-xl", "u-fade-in--bp-xl",
                "fa-plus", "fa-minus");
        });

    };

    const toggleDisplay = (e, parent, target,
                           fadeOutClass, fadeInClass,
                           visibleIconClass, hiddenIconClass) => {
        let t = e.closest(parent).querySelector(target);

        if(t.classList.contains(fadeOutClass)) {
            e.classList.remove(visibleIconClass);
            e.classList.add(hiddenIconClass);

            t.classList.remove(fadeOutClass);
            t.classList.add(fadeInClass);
        }
        else {
            e.classList.remove(hiddenIconClass);
            e.classList.add(visibleIconClass);

            t.classList.remove(fadeInClass);
            t.classList.add(fadeOutClass);
        }
    };

    return {
        Name: "04-Components/_components-navigation",
        Setup: setup,
    };
})();
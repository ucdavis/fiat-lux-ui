/* ==========================================================================
   #MAIN
   ========================================================================== */

/**
 * TABLE OF CONTENTS
 *
 * 01. SETTINGS
 * Global..............Global variables.
 *
 * 02. TOOLS
 * Libraries...........External libraries or dependencies.
 * Functions...........Reusable functions for DRY code.
 *
 * 03. ELEMENTS
 * Lists...............Functions for lists.
 * Images..............Ensure images are fluid.
 * Tables..............Tabular data styles.
 *
 * 04. COMPONENTS
 * Alerts..............Functions related to feedback from the interface.
 * Panels..............Functions related to containers for data.
 *
 */

/* #SETTINGS
   ========================================================================== */
import { _settings_Global } from "./01-settings/_settings-global.js";
// console.log("External Call: " + _settings_Global.Callable());

/* #TOOLS
   ========================================================================== */
import {_tools_Functions} from "./02-tools/_tools-functions.js";

/* #ELEMENTS
   ========================================================================== */

/* #COMPONENTS
   ========================================================================== */
import {_components_Panels} from "./04-components/_components-panels.js";
_components_Panels.Setup();

import {_components_Navigation} from "./04-components/_components-navigation.js";
_components_Navigation.Setup();

import {_components_Modal} from "./04-components/_components-modal.js";

/* #PUBLIC
   ========================================================================== */
export let OASIS = (function () {

    const focusElement = (element) => {
        _tools_Functions.FocusElement(element);
    };

    const unfocusElement = (element) => {
        _tools_Functions.UnfocusElement(element);
    };

    const blurBackground = () => {
        _tools_Functions.BlurBackground();
    }

    const unblurBackground = () => {
        _tools_Functions.UnblurBackground();
    }

    // === MODAL ===
    const modalSetup = (modal, openInput, closeInput) => {
        _components_Modal.Setup(modal, openInput, closeInput);
    }

    // == EXPORT ===
    return {
        Name: "js/main.js",
        FocusElement: focusElement,
        UnfocusElement: unfocusElement,
        BlurBackground: blurBackground,
        UnblurBackground: unblurBackground,
        ModalSetup: modalSetup
    };
})();


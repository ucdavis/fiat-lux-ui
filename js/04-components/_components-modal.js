/* ==========================================================================
   #MODAL
   ========================================================================== */

export let _components_Modal = (function () {

    /// Parameters: Modal, Open Modal Input, Close Modal Input
    const setup = (modal, openInput, closeInput) => {

        let m = document.querySelector(modal);
        let oi = document.querySelector(openInput);
        let ci = document.querySelector(closeInput);

        oi.onclick = function() { // Open Modal
            m.style.display = "block";
        }

        ci.onclick = function() { // Close Modal
            m.style.display = "none";
        }

        window.onclick = function(event) { // Input outside modal --> Close Modal
            if (event.target === m) {
                m.style.display = "none";
            }
        }
    };

    return {
        Name: "04-Components/_components-modal",
        Setup: setup,
    };
})();
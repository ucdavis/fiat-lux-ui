/* ==========================================================================
   #GLOBAL
   ========================================================================== */

export let _settings_Global = (function () {
    /// NAMESPACE DEMO --------------------------------------------------------
    const privateVariable = "private variable";

    const privateFunction = function () {
        return privateVariable;
    };

    const publicFunction = function () {
        return privateFunction();
    };

    return {
        Name: "01-Settings/_settings-global",
        Callable: publicFunction,
    };
})();
// access the members inside the namespace
// console.log("Name: " + _settings_Global.Name);
// console.log("Internal Call: " + _settings_Global.Callable());

// /END NAMESPACE DEMO --------------------------------------------------------
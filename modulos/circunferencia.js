System.register([], function (exports_1, context_1) {
    "use strict";
    var PI;
    var __moduleName = context_1 && context_1.id;
    function areaCincunferencia(raio) {
        return raio * raio * PI;
    }
    exports_1("areaCincunferencia", areaCincunferencia);
    return {
        setters: [],
        execute: function () {
            exports_1("PI", PI = 3.14);
        }
    };
});
//# sourceMappingURL=circunferencia.js.map
System.register(["./retangulo", "./circunferencia"], function (exports_1, context_1) {
    "use strict";
    var retangulo_1, circunferencia_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (retangulo_1_1) {
                retangulo_1 = retangulo_1_1;
            },
            function (circunferencia_1_1) {
                circunferencia_1 = circunferencia_1_1;
            }
        ],
        execute: function () {
            console.log(circunferencia_1.areaCincunferencia(5));
            console.log(retangulo_1.areaRetangulo(2, 3));
        }
    };
});
//# sourceMappingURL=modulos.js.map
"use strict";
var Geometria;
(function (Geometria) {
    let Area;
    (function (Area) {
        function Retangulo(base, altura) {
            return base * altura;
        }
        Area.Retangulo = Retangulo;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
//# sourceMappingURL=geometriaRetangulo.js.map
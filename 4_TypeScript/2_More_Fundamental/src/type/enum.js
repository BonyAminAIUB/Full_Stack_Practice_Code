"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Day;
(function (Day) {
    Day[Day["Saturday"] = 0] = "Saturday";
    Day[Day["Sunday"] = 1] = "Sunday";
    Day[Day["Monday"] = 2] = "Monday";
    Day[Day["Tuesday"] = 3] = "Tuesday";
    Day[Day["Wednesday"] = 4] = "Wednesday";
    Day[Day["Thursday"] = 5] = "Thursday";
    Day[Day["Friday"] = 6] = "Friday";
})(Day || (Day = {}));
let offDay = Day.Friday;
console.log(offDay);
console.log(Day.Saturday);
//# sourceMappingURL=enum.js.map
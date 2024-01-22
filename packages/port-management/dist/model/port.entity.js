"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Port = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
let Port = class Port extends base_entity_1.BaseEntity {
};
exports.Port = Port;
__decorate([
    (0, typeorm_1.Column)({ name: "country", type: "varchar", length: 300 }),
    __metadata("design:type", String)
], Port.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "name", type: "varchar", length: 300 }),
    __metadata("design:type", String)
], Port.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "vessels_in_port", type: "decimal" }),
    __metadata("design:type", Number)
], Port.prototype, "vesselsInPort", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "departures", type: "decimal" }),
    __metadata("design:type", String)
], Port.prototype, "departures", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "arrivals", type: "decimal" }),
    __metadata("design:type", String)
], Port.prototype, "arrivals", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "type", type: "varchar", length: 300 }),
    __metadata("design:type", String)
], Port.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "area_local", type: "varchar", length: 300 }),
    __metadata("design:type", String)
], Port.prototype, "areaLocal", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "area_global", type: "varchar", length: 300 }),
    __metadata("design:type", String)
], Port.prototype, "areaGlobal", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-array', { nullable: true, array: true }),
    __metadata("design:type", String)
], Port.prototype, "otherPortNames", void 0);
exports.Port = Port = __decorate([
    (0, typeorm_1.Entity)('port')
], Port);
//# sourceMappingURL=port.entity.js.map
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const port_service_1 = require("./port.service");
const CreatePort_dto_1 = require("../dtos/CreatePort.dto");
let PortController = class PortController {
    constructor(portService) {
        this.portService = portService;
    }
    getAllPorts() {
        return this.portService.getAll();
    }
    createPort(body) {
        return this.portService.createNewPort(body);
    }
};
exports.PortController = PortController;
__decorate([
    (0, microservices_1.MessagePattern)("ports_get"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PortController.prototype, "getAllPorts", null);
__decorate([
    (0, microservices_1.MessagePattern)("ports_get"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreatePort_dto_1.CreatePort]),
    __metadata("design:returntype", void 0)
], PortController.prototype, "createPort", null);
exports.PortController = PortController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [port_service_1.PortService])
], PortController);
//# sourceMappingURL=port.controller.js.map
"use strict";
// para usar os decorators, é necessário descomentar a prop: experimentalDecorators no tsconfig.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* >> DECORATORS <<
  Class
  Propriedades
  Métodos
  Parâmetros (POUCO USADO)
  GETTERS / SETTERS (BEM POUCO USADO)
*/
// Padrão Factory
// function logInfo(mensagem:string){ // por orientações da documentação do ts, parametros de decorators devem ser do tipo 'any'
//   return (target: any)=>{
//     console.log(`${mensagem}, ${target}`)
//   }
// }
// @logInfo("Servidor está rodando")
// class System{
// }
// ========= PRATICANDO ============
function setIpServer(newIp) {
    return (target) => {
        return class extends target {
            constructor() {
                super(...arguments);
                this.ip = newIp;
            }
        };
    };
}
let Server = class Server {
};
Server = __decorate([
    setIpServer("192.168.5.5")
], Server);
const server = new Server();
console.log('teste server', server);

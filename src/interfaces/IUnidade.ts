import IAtendimento from "./IAtendimentos";
import ICliente from "./ICliente";
export default interface IUnidade{
    id: number,
    Endereco: string,
    Cliente: ICliente,
    IdentificadorCliente: number,
    atendimentos: IAtendimento[];
    ativo: boolean,
    Unidade: string,
    clienteId: number
}
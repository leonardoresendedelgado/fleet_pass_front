import IAtendimento from "./IAtendimentos";
export default interface ICliente{
    id: number,
    Endereco: string,
    Cliente: string,
    IdentificadorCliente: number,
    atendimentos: IAtendimento[];
    ativo: boolean,
    Unidade: string
}
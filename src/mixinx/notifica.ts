import { TipoNotificacao, INotificacao } from "@/interfaces/INotificacao";
import { store } from "@/store";
import { NOTIFICA } from "@/store/mutations";

export const notificacaoMixin = {
    methods: {
        notifica(tipo: TipoNotificacao, titulo:INotificacao, texto:INotificacao): void{
            store.commit(NOTIFICA, {
                titulo,
                texto,
                tipo
            })
        }
    }
}
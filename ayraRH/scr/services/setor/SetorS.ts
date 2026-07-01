import prismaClient from "../../prisma/PrismaClient";

interface cadastrarSetor {
    nome: string
    turno: string
    id_empresa: string
}

class SetorS {
    async cadastrarSetor({nome, turno, id_empresa}: cadastrarSetor){
        await prismaClient.setor.create({
            data: {
                nome: nome,
                turno: turno,
                id_empresa: id_empresa
            }
        })
        return ({ dados: "Dados salvos com sucesso" })
    }
}
 export {SetorS}

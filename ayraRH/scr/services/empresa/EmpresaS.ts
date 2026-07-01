import prismaClient from "../../prisma/PrismaClient";

interface cadastrarEmpresa {
    nome: string
    cnpj: string
    segmento: string
}

class EmpresaS {
    async cadastrarEmpresa({nome, cnpj, segmento}: cadastrarEmpresa){
        await prismaClient.empresa.create({
            data: {
                nome: nome,
                cnpj: cnpj,
                segmento: segmento
            }
        })
        return ({ dados: "Dados salvos com sucesso" })
    }
}
 export {EmpresaS}

import prismaClient from "../../prisma/PrismaClient"

interface cadastrarEmpresas{
    nome: string,
    cnpj: string,
    segmento: string,
    escala: string,
    
}

class EmpresasServices {
    async cadastrarEmpresas({ nome, cnpj, segmento, escala }: cadastrarEmpresas) {
        await prismaClient.empresas.create({
            data: {
                nome: nome,
                cnpj: cnpj,
                segmento: segmento,
                escala: escala,
                
            }
        })

        return ({ dados: 'Dados salvos com sucesso' })
    }
}

export { EmpresasServices }
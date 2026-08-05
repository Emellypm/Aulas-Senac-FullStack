import prismaClient from "../../prisma/PrismaClient"

interface cadastrarEmpresas{
    nome: string,
    cnpj: string,
    segmento: string,
    tipo_escala: string,
    
}

class EmpresasServices {
    async cadastrarEmpresas({ nome, cnpj, segmento, tipo_escala }: cadastrarEmpresas) {
        await prismaClient.empresas.create({
            data: {
                nome: nome,
                cnpj: cnpj,
                segmento: segmento,
                tipo_escala: tipo_escala,
        
            }
        })

        return ({ dados: 'Dados salvos com sucesso' })
    }
}

export { EmpresasServices }
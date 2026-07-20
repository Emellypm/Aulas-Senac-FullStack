import prismaClient from '../../prisma/PrismaClient'

class CargosServices {
    async cadastrarCargos(nome: string, id_empresas: string){
        const resposta = await prismaClient.cargos.create({
            data:{
                nome: nome,
                id_empresas: id_empresas
            },
            select: {
                id: true,
                nome: true
            }
        })
        return resposta
    }
}

export { CargosServices }


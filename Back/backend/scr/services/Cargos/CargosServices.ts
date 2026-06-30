import prismaClient from "../../prisma/PrismaClient";

interface cadastrarCargos {
    nome: string
}

class CargosServices {
    async cadastrarCargos({ nome }: cadastrarCargos){
        await prismaClient.cargos.create({
            data: {
                nome: nome
            }
        })
        

    }
}

export { CargosServices }


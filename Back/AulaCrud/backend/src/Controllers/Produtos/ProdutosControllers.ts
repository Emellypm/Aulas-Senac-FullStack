import { Request, Response } from "express";
import { ProdutosServices } from "../../Services/Produtos/ProdutosServices";

class ProdutosControllers {
    async cadastrarProdutos(req: Request, res: Response) {
        const {id, nome, preco, quantidade, banner} = req.body
        if (!req.file) {
            throw new Error('Arquivo com Problemas')
        }else {
            const {originalname, filename: banner } = req.file
            const enviarDados = new ProdutosServices()
            const resposta = await enviarDados.cadastrarProdutos({
                id,
                nome,
                preco,
                quantidade,
                banner
            })
            return res.json(resposta)
        }
        

    }
}
export default ProdutosControllers;
import { useState } from "react";
import api from "../services/api";

function FormAluno() {
    const [cpf, setCpf] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [celular, setCelular] = useState("");

    const [resultado,setResultado] = useState("");

    //inserir

    async function inserir() {
        try{
            await axios.post(api,{
                cpf,
                nome,
                email,
                celular
            });
            alert("Aluno cadastrado com sucesso!");
        }catch(erro){
            alert("Erro ao cadastrar aluno");
        }
        
    }
}
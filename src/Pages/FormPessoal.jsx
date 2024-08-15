import * as C from "@chakra-ui/react"

const FormPEssoal = () =>{
    return(
        <C.VStack textAlign='center'>
            <h1>Informações do aluno</h1>
            <C.Input type="text" placeholder="Insira o Nome"/>
            <C.Input type="text" placeholder="Insira o CPF"/>
            <C.Input type="email" placeholder="Insira o Email"/>
            <C.Radio>menino</C.Radio> 
            <C.Radio>menina</C.Radio>
        </C.VStack>
       
    )
}

export default FormPEssoal
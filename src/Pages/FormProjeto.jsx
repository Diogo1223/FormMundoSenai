import * as C from "@chakra-ui/react"

const FormProjeto = () =>{
    return(
        <C.VStack>
            <h1>Nome do Projeto</h1>
            <C.Input type="text" placeholder="Insira o Projeto"/>
            <C.Input type="text" placeholder="Insira o Área"/>
            <C.Input type="email" placeholder="Insira o Coordenador/Professor"/>
            <C.Box display="flex" alignItems="center">
            <C.Checkbox>CETCC</C.Checkbox>
            <C.Checkbox>CETAFAJU</C.Checkbox>
            <C.Checkbox>CETICC</C.Checkbox>
            <C.Checkbox>CETAFEST</C.Checkbox>
            </C.Box>
        </C.VStack>
    )
}

export default FormProjeto
import styled from "styled-components"
import logo from "../assets/D.png"

export default function Subscriptions(){
    return(
        <>
        <H1>Escolha seu Plano</H1>
        <ButtonPlan>
            <img src={logo}/>
            <p>R$ 39,99</p>
        </ButtonPlan>
        </>
    )
}

const ButtonPlan = styled.button`
    
`
const H1 = styled.h1``
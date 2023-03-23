import styled from "styled-components"
import white from "../../assets/white.svg"
import ben from "../../assets/benefits.png"
import money from "../../assets/price.png"
import InputStyled from "../../Style/StyledInput"
import InputSmall from "../../Style/InputSmall"
import ButtonStyled from "../../Style/StyledButton"
import { useState } from "react"

export default function Plus() {

    const [show, setShow] = useState(false)

    function confirm() {
        console.log("entrou confirm")
        setShow(true)
        return (
            <ConfirmBox>
                <p>Tem certeza que deseja assinar o plano Driven Plus (R$ 39,99)?</p>
                <ButtonsConf>
                    <YesNo back>Não</YesNo>
                    <YesNo>Sim</YesNo>
                </ButtonsConf>
            </ConfirmBox>
        )
    }

    return (
        <Screen>
            <Top>
                <ion-icon name="arrow-back"></ion-icon>
            </Top>
            <Plan>
                <img src={white} />
                <h1>Driven Gold</h1>

                <BenPrice>
                    <Title>
                        <img src={ben} /><span>Benefícios: </span>
                    </Title>
                    <p>1. Brindes exclusivos</p>
                    <p>2. Materiais bônus de web</p>
                </BenPrice>
                <BenPrice>
                    <Title>
                        <img src={money} /><span>Preco: </span>
                    </Title>
                    <p>R$ 39,99 cobrados mensalmente</p>
                </BenPrice>
            </Plan>
            <InputStyled name="cardname" type="text" placeholder="Nome impresso no cartão" required />
            <InputStyled name="card" type="number" placeholder="Digitos do cartão" required />
            <ContainerSmall>
                <InputSmall name="seg" type="number" placeholder="Código de segurança" required />
                <InputSmall name="carddate" type="date" placeholder="Validade" required />
            </ContainerSmall>
            <ButtonStyled onClick={confirm} >ASSINAR</ButtonStyled>

            <ConfirmBox>
                <p>Tem certeza que deseja assinar o plano Driven Plus (R$ 39,99)?</p>
                <ButtonsConf>
                    <YesNo back>Não</YesNo>
                    <YesNo>Sim</YesNo>
                </ButtonsConf>
            </ConfirmBox>         
        </Screen>)
}

const ContainerSmall = styled.div`
    width: 299px;
    display: flex;
    justify-content: space-between;
`
const Screen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`
const Top = styled.div`
    margin: 22px 22px;
    width: 372px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    ion-icon{
        width:28px;
        height: 28px;
        color: white;
    }
`
const Plan = styled.div`
    margin-top: 35px;
    font-family: 'roboto';
    margin-bottom: 22px;
    h1{        
        font-size: 32px;
        font-weight: 700;
    }
`
const BenPrice = styled.div`
    font-size: 16px; 
    margin-top: 12px;
`
const Price = styled.div`
    font-size: 14px;
`
const Title = styled.div`
    margin-bottom: 10px;
    img{
        margin-right: 5px;
    }
`
const ConfirmBox = styled.div`
    z-index: 1; 
    position: absolute;
    left: 41%;
    top: 40%;
    width: 248px;
    height: 210px;
    background-color: white;
    color: black;
    border-radius: 12px;
    font-family: 'roboto';
    font-weight: 700;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 33px 22px 11px 22px;
    /* p{
        display: flex;
        align-items: center;
        justify-content: center;
    } */
`
const YesNo = styled.button`
    background-color: #FF4791;
    color: white;
    border: 1px solid #FF4791;
    border-radius: 8px;
    width: 95px;
    height: 52px;
    font-family: "roboto";
    font-weight: 700;
    font-size:14px;
    line-height: 21px;
    margin-bottom: 24px;
`
const ButtonsConf = styled.div`
    width: 204px;
    height: 52px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
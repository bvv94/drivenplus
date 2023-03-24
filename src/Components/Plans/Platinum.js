import styled from "styled-components"
import green from "../../assets/green.svg"
import ben from "../../assets/benefits.png"
import money from "../../assets/price.png"
import InputStyled from "../../Style/StyledInput"
import InputSmall from "../../Style/InputSmall"
import ButtonStyled from "../../Style/StyledButton"
import { useState, useContext} from "react"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { UserContext } from '../../Contexts/UserContext';

export default function Platinum() {

    const [show, setShow] = useState(false)
    const { token, UserData, setUserData, setId } = useContext(UserContext)
    const [membershipId, setMembershipId] = useState(1)
    const [cardName, setCardName] = useState("")
    const [cardNumber, setCardNumber] = useState("")
    const [securityNumber, setSecurityNumber] = useState(0)
    const [expirationDate, setExpirationDate] = useState("")
    const [data, setData] = useState([])
    const navigate = useNavigate();

    setId(3)
    
    function Confirm(e) {

        const body = { membershipId, cardName, cardNumber, securityNumber, expirationDate }

        e.preventDefault();
        console.log("Assinando");
        console.log (token)
        console.log (body)

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }

        axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions", body, config)
            .then((res) => {
                console.log(res.data)
                console.log("enviou")
                setUserData(res.data)
                navigate("/home")
                // ConfirmBox()

            })
            .catch((err) => {
                console.error(err.response.data.message)
                console.log("erro")
            })
            console.log(data)
        // return (
        //     <ConfirmBoxDiv>
        //         <p>Tem certeza que deseja assinar o plano Driven Plus (R$ 39,99)?</p>
        //         <ButtonsConf>
        //             <YesNo>Não</YesNo>
        //             <YesNo onClick={console.log("Sim")}>Sim</YesNo>
        //         </ButtonsConf>
        //     </ConfirmBoxDiv>
        // )

    }

    return (
        <Screen>
            <Top to="/subscriptions">
                <ion-icon name="arrow-back"></ion-icon>
            </Top>
            <Plan>
                <img src={green} />
                <h1>Driven Platinum</h1>

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
                    <p>R$ 99,99 cobrados mensalmente</p>
                </BenPrice>
            </Plan>
            <Form onSubmit={Confirm}>
                <InputStyled onChange={e => setCardName(e.target.value)} value={cardName}
                    name="cardname" type="text" placeholder="Nome impresso no cartão" required />
                <InputStyled onChange={e => setCardNumber(e.target.value)} value={cardNumber}
                    name="card" type="number" placeholder="Digitos do cartão" required />
                <ContainerSmall>
                    <InputSmall onChange={e => setSecurityNumber(e.target.value)} value={securityNumber}
                        name="seg" type="number" placeholder="Código de segurança" required />
                    <InputSmall onChange={e => setExpirationDate(e.target.value)} value={expirationDate}
                        name="carddate" type="date" placeholder="Validade" required />
                </ContainerSmall>
                <ButtonStyled type="submit">ASSINAR</ButtonStyled>
            </Form>
            {/* <ConfirmBox>
                <p>Tem certeza que deseja assinar o plano Driven Plus (R$ 39,99)?</p>
                <ButtonsConf>
                    <YesNo back>Não</YesNo>
                    <YesNo>Sim</YesNo>
                </ButtonsConf>
            </ConfirmBox>          */}
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
const Top = styled(Link)`
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
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
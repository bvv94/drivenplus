import styled from "styled-components"
import user from "../assets/profile.png"
import plan from "../assets/white.svg"

export default function Home() {
    return (
        <>
            <Screen>
                <Top>
                    <img src={plan} alt="driven" />
                    <User src={user} alt="user-image" />
                </Top>
                <H1>Olá, fulano</H1>
                <ButtonPlan>
                    Solicitar brindes
                </ButtonPlan>
                <ButtonPlan>
                    Materiais bônus de web
                </ButtonPlan>
                {/* Se for plano Gold */}
                <ButtonPlan>
                    Aulas bônus de tech
                </ButtonPlan>
                {/* Se for plano Platinum */}
                <ButtonPlan>
                    Mentorias personalizadas
                </ButtonPlan>
                <Change>
                    <ButtonPlan>
                        Mudar Plano
                    </ButtonPlan>
                    <ButtonCancelar>
                        Cancelar Plano
                    </ButtonCancelar>

                </Change>
            </Screen>
        </>
    )
}

const Screen = styled.div`
    display: flex;
    flex-direction: column;
    display: flex;
    align-items: center;
`
const ButtonPlan = styled.button`
    width: 299px;
    height: 52px;
    background-color: #FF4791;
    border-radius: 12px;
    border: 1px solid #FF4791;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: 'roboto';
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 10px;
`
const H1 = styled.h1`
    font-family: 'roboto';
    font-size: 24px;
    font-weight:700;
    margin-bottom: 24px;
    margin-top: 29px;
`
const Top = styled.div`
    margin-top: 32px;
    width: 375px;
    /* background-color: green; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        height: 51px;
    }
`
const User = styled.img`
    /* height: 20px;
    width: 34px;
    background-color: red; */
`
const Change = styled.div`
    position: absolute;
    top: 505px;
`
const ButtonCancelar = styled.button`
    width: 299px;
    height: 52px;
    background-color: #FF4747;
    border-radius: 12px;
    border: 1px solid #FF4791;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: 'roboto';
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 10px;
`
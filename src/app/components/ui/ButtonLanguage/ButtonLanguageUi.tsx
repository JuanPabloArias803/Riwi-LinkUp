import { ButtonLanguageStyled, WrapperStyled } from "./ButtonLanguageStyled"

interface IButtonLanguageUi{
    iconLanguage: string,
    iconLanguageAlt: string,
    text: string,
    iconArrowDown: string,
    iconArrowDownAlt: string
}
export default function ButtonLanguageUi({iconLanguage, iconLanguageAlt, text, iconArrowDown, iconArrowDownAlt}: IButtonLanguageUi): React.ReactNode{
    console.log(iconLanguage,iconArrowDown)
    return (
        <ButtonLanguageStyled>
            <WrapperStyled>
                <img src={iconLanguage} alt={iconLanguageAlt} style={{width:26}} />
            </WrapperStyled>
            {text}
            <div>
                <img src={iconArrowDown} alt={iconArrowDownAlt} style={{width:26}} />
            </div>
        </ButtonLanguageStyled>
    )
}
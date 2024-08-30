"use client";
import ButtonUi from "./components/ui/Button/ButtonUi";
import ButtonLanguageUi from "./components/ui/ButtonLanguage/ButtonLanguageUi";
import {HeaderStyled} from "./pageStyled"


export default function Home() {

  const handleClick = () =>{
    console.log("click");
  }

  return (
    <>
    <HeaderStyled>
      <div> 
        <h2>Riwi-LinkUp</h2>
        <ButtonLanguageUi
        iconLanguage="icons/icon-language.png"
        iconLanguageAlt="icon about language"
        text="English"
        iconArrowDown="icons/icon-arrowDown.png"
        iconArrowDownAlt=" Icon arrow down" 
        />
      </div>
    </HeaderStyled>
    <main>

    </main>
    
    </>
  )
}

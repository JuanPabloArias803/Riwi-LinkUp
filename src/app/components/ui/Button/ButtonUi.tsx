interface IButton{
    text: string,
    onClick: ()=>void,
}

export default function ButtonUi({text, onClick}: IButton): React.ReactNode{
    return(
        <button onClick={onClick}>
            {text}
        </button>
    )
}
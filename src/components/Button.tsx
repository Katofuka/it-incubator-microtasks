
type NameChanelType = {
    name: string,
    callback: () => void
}

export const Button = (props: NameChanelType) => {
    const onClickHandler = () => {
        props.callback();
    }

    return(
        <button onClick={onClickHandler}>{props.name}</button>
    )
}
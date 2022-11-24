import { Key } from "./style.js";

export default function ({letter, disabledBtn, gameMove}){
    return(
        <Key data-test="letter" onClick={() => gameMove(letter)} className={disabledBtn ? 'disabledButton': 'enabledButton'} disabled={disabledBtn}>{letter}</Key>
    )
}
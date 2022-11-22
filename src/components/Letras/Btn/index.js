import { Key } from "./style.js";

export default function ({letter, disabledBtn}){
    return(
        <Key className={disabledBtn ? 'disabledButton': 'enabledButton'} disabled={disabledBtn}>{letter}</Key>
    )
}
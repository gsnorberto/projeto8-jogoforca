// index letras 

import { Keys } from "./style";
import Btn from "./Btn";

export default function ({ disabledBtn, clickedLetters, gameMove }) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    return (
        <Keys>
            {alphabet.map((letter, index) =>
                <Btn
                    letter={letter}
                    disabledBtn={disabledBtn || clickedLetters.includes(letter) ? true : false}
                    gameMove={gameMove} key={index}
                />)}
        </Keys>
    )
}
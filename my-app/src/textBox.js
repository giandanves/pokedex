import {useRef} from 'react'

export function TextBox(props) {
    const {setTextBox} = props;
    const textRef = useRef(null);

    return (
        <input type="text" id="text-area" ref={textRef} onInput={() => setTextBox(textRef.current.value)}/>
        )
}
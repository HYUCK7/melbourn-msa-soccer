import React, { useState } from "react";
export default function Calc() {
    const [inputs, setInputs] = useState({})
    const [result, setResult] = useState('')
    const { num1, num2, opcode} = inputs;

    const onChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setInputs({...inputs, [name]: value})
    }

    const onClick =  (e) => {
        e.preventDefault()
        switch (opcode){
            case "+" :
                return setResult(Number(num1) + Number(num2))
            case "-" :
                return setResult(Number(num1) - Number(num2))
            case "*" :
                return setResult(Number(num1) * Number(num2))
            case "/" :
                return setResult(Number(num1) / Number(num2))
            case "%" :
                return setResult(Number(num1) % Number(num2))
        }
        const res = [num1, num2, opcode]
        alert(`데이터 셋 출력 : ${res}`)
    }

    return (<>
        <h1>계산기</h1>
        <form action="">

            <label >num1</label>
            <input id = "num1" name="num1" type="text" onChange={onChange} /> <br />

            <label >연산자</label>
            <select id = "opcode" name="opcode" type="text" onChange={onChange} >
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
                <option value="%">%</option>
            </select><br />

            <label >num2</label>
            <input id= "num2" name="num2" type="text" onChange={onChange} /><br />
            <div>
                <input type = "submit" onClick={onClick}
                value = "Submit" input/>
            </div>
           </form>
    </>
    )
}
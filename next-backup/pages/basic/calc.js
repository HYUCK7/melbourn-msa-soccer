import React, { useState } from "react";
export default function Calc() {
    const [inputs, setInputs] = useState({})
    const [result, setResult] = useState({})
    const { num1, num2, opcode} = inputs

    const onChange = (e) => {
        e.preventDefault()
        const { value, name } = e.target
        setInputs({...inputs, [name]: value})
    }

    const onClick = async (e) => {
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
        }const res = [num1, num2, opcode, result ]
        alert(`데이터 셋 출력 : ${JSON.stringify(res)}`)
    }

    return (<>
        <h1>계산기</h1>
        <form action="">

            <label htmlFor="">num1</label>
            <input name="num1" type="text" onChange={onChange} /> <br />

            <label htmlFor="">연산자</label>
            <select name="opcode" onChange={onChange} >
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
                <option value="%">%</option>
            </select><br />

            <label htmlFor="">num2</label>
            <input name="num2" type="text" onChange={onChange} /><br />
            <div>
                <input type = "submit" onClick={onClick}
                value = "Submit" input/>
            </div>
           </form>
    </>
    )
}
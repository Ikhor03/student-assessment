import { memo, useState } from "react"

function Dropdown({ name, student, output, setOutput }) {
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const [score, setScore] = useState('Nilai')
    const handleChange = (e) => {
        let value = e.target.value
        setScore(value)
        setOutput({ ...output, [name]: {...output[name], [student] : value} })
    }

    return (
        <>
            <select className="dropdown" value={score} onChange={handleChange}>
                <option >Nilai</option>
                {number.map((n)=> {
                    return (<option key={n} value={n}>{n}</option>)
                })}
            </select>
        </>
    )
}

export default memo(Dropdown)
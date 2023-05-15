import { useState } from "react"

export default function Dropdown({student}) {
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const [score, setScore] = useState('Nilai')

    const handleChange = (e) => {
        setScore(e.target.value)
        console.log(student)
    }

    return (
        <>
            <select className="dropdown" value={score} onChange={handleChange}>
                <option value="1">Nilai</option>
                {number.map((n)=> {
                    return (<option key={n} value={n}>{n}</option>)
                })}
            </select>
        </>
    )
}
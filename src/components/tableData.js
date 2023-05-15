import Dropdown from "./dropdown";

export default function TabelData({name}) {
    const handleChange = (e) => {
        let student = e.target.value;
        console.log(student)
    }
    return (
        <>
            <tr>
                <td className="student">{name}</td>
                <td><Dropdown student={name} /></td>
                <td><Dropdown student={name} /></td>
                <td><Dropdown student={name} /></td>
                <td><Dropdown student={name} /></td>
            </tr>
        </>
    )
}
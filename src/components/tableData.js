import { memo } from "react";
import Dropdown from "./dropdown";

function TabelData({ student, output, setOutput }) {

    return (
        <>
            <tr>
                <td className="student">{student}</td>
                <td><Dropdown name="Aspek Penilaian 1" student={student} output={output} setOutput={setOutput} /></td>
                <td><Dropdown name="Aspek Penilaian 2" student={student} output={output} setOutput={setOutput} /></td>
                <td><Dropdown name="Aspek Penilaian 3" student={student} output={output} setOutput={setOutput} /></td>
                <td><Dropdown name="Aspek Penilaian 4" student={student} output={output} setOutput={setOutput} /></td>
            </tr>
        </>
    )
}

export default memo(TabelData);
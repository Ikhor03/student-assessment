import { memo, useState } from "react";
import TabelData from "./tableData";

function Table() {
    const student = ["mahasiswa 1", "mahasiswa 2", "mahasiswa 3", "mahasiswa 4", "mahasiswa 5", "mahasiswa 6", "mahasiswa 7", "mahasiswa 8", "mahasiswa 9", "mahasiswa 10"];
    const aspek = ["Aspek Penilaian 1", "Aspek Penilaian 2", "Aspek Penilaian 3", "Aspek Penilaian 4"];

    const [output, setOutput] = useState({});
    const [visible, setvisible] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setvisible(true)
    }

    return (
        <div className="container-table">
            <form onSubmit={handleSubmit}>
                <table className="assessment">
                    <thead>
                        <tr>
                            <th></th>
                            {aspek.map((e) => { return <th key={e}>{e}</th> })}
                        </tr>
                    </thead>
                    <tbody>
                        {student.map((s) => {
                            return <TabelData
                                key={s}
                                student={s}
                                output={output}
                                setOutput={(e) => {
                                    setOutput({ ...e })
                                }}
                            />
                        })}
                    </tbody>
                </table>
                <input className="submit" type="submit" value="Simpan" />
            </form>
            <div className="output">
                <p>Output:</p>
                {visible &&
                    <code >
                        {JSON.stringify(output)}
                    </code>
                }
            </div>
        </div>
    )
}

export default memo(Table);
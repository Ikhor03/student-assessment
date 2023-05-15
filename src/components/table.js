import TabelData from "./tableData";

export default function Table() {
    const student = ["mahasiswa 1", "mahasiswa 2", "mahasiswa 3", "mahasiswa 4", "mahasiswa 5", "mahasiswa 6", "mahasiswa 7", "mahasiswa 8", "mahasiswa 9", "mahasiswa 10"]

    return (
        <div className="container-table">
            <form>
                <table className="assessment">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Aspek Penilaian 1</th>
                            <th>Aspek Penilaian 2</th>
                            <th>Aspek Penilaian 3</th>
                            <th>Aspek Penilaian 4</th>
                        </tr>
                    </thead>
                    <tbody>
                        {student.map((s) => {
                            return <TabelData key={s} name={s} />
                        })}
                    </tbody>
                </table>
                <input className="submit" type="submit" value="Simpan"/>
            </form>
        </div>
    )
}
import AspekNilai from "./AspekNilai";

const TableMhs = (props: {mhs_id: number, total_aspek_penilaian: number}) => {
  return (
    <>
      <tr id={`Mahasiswa ${props.mhs_id}`}>
        <td>{`Mahasiswa ${props.mhs_id}`}</td>
        <AspekNilai mhs_id={props.mhs_id} total_aspek_penilaian={props.total_aspek_penilaian} />
      </tr>
    </>
  );
}
 
export default TableMhs;
const AspekNilai = (props: {mhs_id: number, total_aspek_penilaian: number}) => {
  let rows: JSX.Element[] = []
  
  for (let i = 1; i <= props.total_aspek_penilaian; i++) {
    rows.push(
      <td><select name={`mahasiswa_${props.mhs_id}`} className={`aspek-select aspek_penilaian_${i}`}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select></td>
    )
  }

  return ( <>
    {rows.map(a => (a))}
  </> );
}
 
export default AspekNilai;
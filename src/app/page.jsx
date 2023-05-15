'use client'

import { useEffect, useState } from 'react';
import TableMhs from './component/TableMhs';

export default function Home() {
  const [rows, setrows] = useState([]);
  const mhs_total = 10;
  const total_aspek_penilaian = 4

  useEffect(() => {
    let newRows = []
    for (let i = 1; i <= mhs_total; i++) {
      newRows.push(<TableMhs mhs_id={i} total_aspek_penilaian={total_aspek_penilaian} />)
    }

    setrows(newRows)
  }, []);

  const getResult = () => {
    let data = {}
    const aspekElement = document.getElementsByClassName('aspek-select');
    const arrAspekElement = Array.from(aspekElement)
    
    arrAspekElement.map(e => {
      const getMhs= e.getAttribute('name') || ''

      if (data.hasOwnProperty(e.classList[1])) data[e.classList[1]][getMhs] = parseInt(e.value)
      else data[e.classList[1]] = { [getMhs]: parseInt(e.value) }
    })

    console.log(data)
  }

  return (
    <>
      <table id="mhs">
        <tr>
          <th></th>
          <th>Aspek Penilaian 1</th>
          <th>Aspek Penilaian 2</th>
          <th>Aspek Penilaian 3</th>
          <th>Aspek Penilaian 4</th>
        </tr>
        {rows.map(a => (a))}
      </table>
      <br /><br />
      <button onClick={() => getResult()}>Simpan</button>
    </>
  )
}

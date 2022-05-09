import React, { useEffect, useState} from 'react';
import axios from 'axios';

export default function Repositories() {
  const [data, setData] = useState();

  useEffect( ()=> {
    axios.get('https://api.github.com/users/white-knight666/repos')
      .then( result => {
        setData(result.data)
      })
      .catch( err => {
        console.log(err)
      })
  })
  return (
    <div>
      {
        data && data.map( (i) => {
         // console.log(i)
          return(
            <div className="second-container">
            <table className="table table-hover second">
                        <tbody>
                        <tr className="table-warning">
                               <td>{i.name}:</td>
                               <td>{i.description}</td>
                            </tr>
                            </tbody>
                            </table>
            </div>
          )
        })
      }
    </div>
  )
}
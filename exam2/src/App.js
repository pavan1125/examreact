import {useState,useEffect, Fragment} from "react"
import './App.css';
import { Table } from './components/table';
import Form from "./components/form";
import CarApp from "./components/index";
function App() {

  // const [tableData,setTableData]=useState([])
  // const [formData,setFormData]=useState()
  // let [flag,setFlag]=useState(false)

  // useEffect(()=>{
  //      setTableData(Table())
  // },[])
  // console.log(tableData)
  
  //   function IdGetter(id){

  //     console.log(id)
  //     setFlag(true)
  //   }

  //   function Data(data){
  //     setFormData(data)
  //     console.log(formData)
  //   }

  return (
    <Fragment>
        {/* <table className='table table-striped-columns'>
          <tbody>
              {
                tableData.map((item)=>{
                  return <tr key={item}>

                    {
                      item.map((item)=>{
                        return <td onClick={()=>{IdGetter(item)}} key={item} id={item}>{item}</td>
                      })
                    }
                  </tr>
                })
              }
          </tbody>
        </table>
        {flag && <Form Data={Data}/>} */}

        <CarApp/>
    </Fragment>
  );
}

export default App;

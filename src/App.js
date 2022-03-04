import logo from './logo.svg';
import axios from "axios";
import React,{useEffect} from 'react';
import XMLParser from 'react-xml-parser';
import './App.css';


var xhr = new XMLHttpRequest();
var url = "/9760000/PofelcddInfoInqireService/getPofelcddRegistSttusInfoInqire"; /*URL*/
var queryParams = "?" + encodeURIComponent("serviceKey") + "="+process.env.REACT_APP_API_KEY; /*Service Key*/
queryParams += '&pageNo=1';
queryParams += '&numOfRows=100'; 
queryParams += '&sgId=20220309';/*선거ID*/
queryParams += '&sgTypecode=1'; /*선거종류코드*/
queryParams += '&sggName='; /*선거구명*/
queryParams += '&sdName=';  /*시도명*/

// xhr.open('GET', url + queryParams);
// xhr.onreadystatechange = function () {
//     if (this.readyState == 4) {
//         console.log('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
//     }
// };

// xhr.send('');
// }

function App() {

  useEffect(()=>{
    testData();
  },[]);
    
  const testData = async()=> {
    axios.get(url+queryParams).then((res)=>
    {
      var xml = new XMLParser().parseFromString(res.data); 
      console.log(xml.children[1]);
    }) .catch(function(error) {
      console.log("에러");
  });
  }
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;

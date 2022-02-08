import logo from './logo.svg';
import './App.css';

{
  /* Javascript 샘플 코드 */


var xhr = new XMLHttpRequest();
var url = "http://apis.data.go.kr/9760000/PofelcddInfoInqireService/getPoelpcddRegistSttusInfoInqire"; /*URL*/
var queryParams = "?" + encodeURIComponent("serviceKey") + "="+process.env.REACT_APP_API_KEY; /*Service Key*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('100'); 
queryParams += '&' + encodeURIComponent('sgId') + '=' + encodeURIComponent('20220309');/*선거ID*/
queryParams += '&' + encodeURIComponent('sgTypecode') + '=' + encodeURIComponent('1'); /*선거종류코드*/
queryParams += '&' + encodeURIComponent('sggName') + '=' + encodeURIComponent(''); /*선거구명*/
queryParams += '&' + encodeURIComponent('sdName') + '=' + encodeURIComponent('');  /*시도명*/
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
    }
};

xhr.send('');
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

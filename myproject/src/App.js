import './App.css';
import MyuseStatesync001 from './components/ex05_async/MyuseStatesync001';
import MyuseStatesync002 from './components/ex05_async/MyuseStatesync002';
import MyJsx001 from './components/ex01_jsx/MyJsx001';
import MyJsx002 from './components/ex01_jsx/MyJsx002';
import MyJsx003 from './components/ex01_jsx/MyJsx003';
import Myprops001 from './components/ex06_props/Myprops001';
import Myprops002 from './components/ex06_props/Myprops002';
import Myprops003 from './components/ex06_props/Myprops003';
import Myprops004 from './components/ex06_props/Myprops004';
import MyuseContext01 from './components/ex07_context/MyuseContext01';
// import './components/ex07_context/MyuseContext01';
function App() {
  return (
    <div className='App'>
      {/* <MyJsx001></MyJsx001> */}
      {/* <MyJsx002></MyJsx002> */}
      {/* <MyJsx003></MyJsx003> */}

      {/* {<MyuseStatesync001></MyuseStatesync001>} */}
      {/* <MyuseStatesync002></MyuseStatesync002> */}
      {/* <Myprops001 name='홍갈동'></Myprops001> */}
      {/* <Myprops002 name='홍길동' age='30' loc='서울' />*/}
      {/* <Myprops003 name='홍길동' age='30' loc='서울' />*/}
      {/* <Myprops004 loc='경기' /> */}
      <MyuseContext01 />
    </div>
  );
}

export default App;

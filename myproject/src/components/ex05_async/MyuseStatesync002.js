import { useState } from 'react';
/*
React는 state가 변경이 될 때마다 렌더링이 발생한다. 
React 렌더링이 발생되면 배치로 해서 처리한다.
배치 16ms단위로 처리한다.
useState()은 비동기화로 처리한다.
*/

const MyuseStatesync002 = () => {
  const [number, setNumber] = useState(0);

  const handleUp = () => {
    //state의 값을 순차적으로 변경할때 콜백함수를 사용한다.
    setNumber((number) => number + 3);
    console.log(number);

    setNumber((number) => number + 2);
    console.log(number);

    setNumber((number) => number + 1);
    console.log(number);
  };

  const handleDown = () => {
    setNumber((number) => number + 1);
    console.log(number);
  };

  return (
    <div>
      <p>{number}</p>
      <button onClick={handleUp}>UP</button>
      <button onClick={handleDown}>DOWN</button>
    </div>
  );
};

export default MyuseStatesync002;

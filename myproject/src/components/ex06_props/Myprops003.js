// 하나의 변수명에 여러 데이터르 넣을 때는 중괄호를 쓰지 않는다.
const Myprops003 = (props) => {
  return (
    <div>
      <p>
        고객님 이름: {props.name} 나이: {props.age} 지역: {props.loc}
      </p>
    </div>
  );
};

export default Myprops003;

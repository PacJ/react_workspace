import { useNavigate, useParams } from 'react-router-dom';

// http://localhost:3000/detail/1
// http://localhost:3000/detail/2

// useParams()를 통해서 파라미터를 받는다.

/*
[2] useNavigate()
- Link 컴포넌트를 사용하지 않고 다른 페이지로 이동해야 하는 경우, 이전/ 다음 등에 사용되는 Hook 이다.
- replace 옵션을 사용하면 페이지를 이동할 때 히스토리를 남기지 낳는다. 기본은 {replace: false} 이므로 히스토리를 남긴다.
- <button onClick={() => navigate('/', {replace: true})}>Home</button>

*/

const Detail = () => {
  // const productId = useParams().productId; -> 파라미터가 하나일때는 가능
  const { productId } = useParams();

  const navigate = useNavigate();

  return (
    <div>
      <h2>상품상세 페이지</h2>
      <p>{productId} 빈 상세 페이지입니다.</p>

      <ul>
        <li>
          {/* 전 과정으로 돌아가는 기능 */}
          <button onClick={() => navigate(-1)}>List</button>
        </li>
        <li>
          {/* 홈으로 돌아가는 기능 */}
          <button onClick={() => navigate('/')}>Home</button>
        </li>
      </ul>
    </div>
  );
};

export default Detail;

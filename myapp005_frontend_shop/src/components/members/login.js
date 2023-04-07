import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../apiurl';

const LoginPage = () => {
  const [inputs, setInputs] = useState({ memberEmail: '', memberPass: '' });

  const { memberEmail, memberPass } = inputs;

  const handleValueChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  // Axios를 사용하여 HTTP 요청을 보낼 때, 요청 본문의 데이터가 JSON 형태임을 서버에 알리는 HTTP 헤더를 함께 전송하도록 설정하는 것
  const config = { headers: { 'Content-type': 'application/json' } };

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(`${baseUrl}/login`, inputs, config)
      .then((Response) => {
        console.log(Response.data);
        let jwtToken = Response.headers.get('Authorization');
        console.log(jwtToken);

        let jwtMemberName = Response.data.memberName;
        let jwtMemberEmail = Response.data.memberEmail;
        let jwtAuthRole = Response.data.jwtAuthRole;

        localStorage.setItem('Authorization', jwtToken);
        localStorage.setItem('memberEmail', jwtMemberEmail);
        localStorage.setItem('memberName', jwtMemberName);
        localStorage.setItem('authRole', jwtAuthRole);
        localStorage.setItem('isLogin', 'true');

        setInputs({ memberEmail: '', memberPass: '' });
      })
      .then((response) => {
        window.location.replace('/');
      })
      .catch((err) => {
        console.error(err.message);
      });
  };
  return (
    <div className='container text-center mt-5'>
      <div className='mx-5'>
        <h1>로그인</h1>
        <form onSubmit={onSubmit}>
          <div className='form-group mt-1'>
            <input
              type='email'
              name='memberEmail'
              className='form-control'
              id='memberEmail'
              value={memberEmail}
              placeholder='이메일'
              maxLength='20'
              onChange={handleValueChange}
            />
          </div>
          <div className='form-group mt-1'>
            <input
              type='password'
              className='form-control'
              name='memberPass'
              id='memberPass'
              value={memberPass}
              placeholder='비밀번호'
              maxLength='20'
              onChange={handleValueChange}
            />
          </div>
          <div className='mt-1'>
            <button type='submit' className='btn btn-primary'>
              로그인
            </button>
            <Link className='btn btn-primary' to='/joinadd'>
              회원 가입
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

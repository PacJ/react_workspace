import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../apiurl';

const JoinAdd = () => {
  const navigator = useNavigate();
  const [members, setMembers] = useState({
    memberEmail: '',
    memberPass: '',
    memberName: '',
    memberPhone: '',
  });

  // Axios를 사용하여 HTTP 요청을 보낼 때, 요청 본문의 데이터가 JSON 형태임을 서버에 알리는 HTTP 헤더를 함께 전송하도록 설정하는 것
  const config = { headers: { 'Content-type': 'application/json' } };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      // post 방식으로 전송 (URL, 데이터, 폼 type)
      .post(`${baseUrl}/member/signup`, members, config)
      .then((Response) => {
        setMembers({
          memberEmail: '',
          memberPass: '',
          memberName: '',
          memberPhone: '',
        });
      })
      .then((Response) => {
        navigator('/');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleValueChange = (e) => {
    // radio 버튼에서는 e.preventDefault를 하면 더블클릭 해줘야한다.
    setMembers({ ...members, [e.target.name]: e.target.value });
  };

  return (
    <div className='container'>
      <form onSubmit={onSubmit}>
        <div className='container'>
          <h1>회원가입</h1>
          <div className='form-group mb-1'>
            <input
              type='email'
              className='form-control'
              name='memberEmail'
              placeholder='이메일'
              onChange={handleValueChange}
            />
          </div>
          <div className='form-group mb-1'>
            <input
              type='password'
              className='form-control'
              name='memberPass'
              placeholder='비밀번호'
              onChange={handleValueChange}
            />
          </div>
          <div className='form-group mb-1'>
            <input
              type='text'
              className='form-control'
              name='memberName'
              placeholder='이름'
              onChange={handleValueChange}
            />
          </div>

          <div className='form-group mb-1'>
            <input
              type='text'
              className='form-control'
              name='memberPhone'
              placeholder='연락처'
              onChange={handleValueChange}
            />
          </div>

          <button type='submit' className='btn btn-primary'>
            가입 완료
          </button>
        </div>
      </form>
    </div>
  );
};

export default JoinAdd;

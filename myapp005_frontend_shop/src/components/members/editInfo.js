import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { memberActions } from '../../reduxs/actions/member_actions';

const EditInfo = () => {
  const dispatch = useDispatch();
  const { memberEmail } = useParams();
  const [inputs, setInputs] = useState({
    memberName: '',
    memberPass: '',
    memberPhone: '',
  });
  //   const { memberName, memberPass, memberPhone } = inputs;

  useEffect(() => {
    setInputs();
  }, []);

  const handleValueChange = (e) => {
    e.preventDefault();
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    setInputs();
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('memberName', memberName);
    formData.append('memberPass', memberPass);
    formData.append('memberPhone', memberPhone);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: localStorage.getItem('Authorization'),
      },
    };

    await dispatch(memberActions.memberUpdate(formData, config));
  };
  return (
    <div>
      <form name='frm' encType='multipart/form-data' onSubmit={handleUpdate}>
        <li>
          이름 변경
          <input
            type='text'
            name='memberName'
            id='memberName'
            value={localStorage.getItem('memberName')}
            onChange={handleValueChange}
          ></input>
        </li>

        <li>
          비밀번호 변경
          <input
            type='text'
            name='memberPass'
            id='memberPass'
            onChange={handleValueChange}
          ></input>
        </li>

        <li>
          전화번호 변경
          <input
            type='text'
            name='memberPhone'
            id='memberPhone'
            // value={localStorage.getItem('memberPhone')}
            onChange={handleValueChange}
          ></input>
        </li>
      </form>
    </div>
  );
};

export default EditInfo;

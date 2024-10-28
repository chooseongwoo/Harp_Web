// 라이브러리
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// 파일
import * as _ from './style';
import Header from 'components/Header';
import ProfileEdit from 'assets/Icon/ProfileEdit';
import EmailCopy from 'assets/Icon/EmialCopy';
import NextButton from 'components/NextButton';
import { formatBirthday } from 'lib/utils/formatBirthday';
import { handleImageEdit } from 'lib/utils/handleImageEdit';
import { isValidDate } from 'lib/utils/isValidDate';
import { Auth_Image, Auth_ReadInfo, Auth_UserInfo } from 'lib/apis/Auth';
import { user } from 'types/user';

const Edit = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [initialInfos, setInitialInfos] = useState<user | null>(null);

  const [infos, setInfos] = useState<user>({
    profileImage: '',
    email: '',
    username: '',
    birthday: '',
    gender: ''
  });

  const [isImageChanged, setIsImageChanged] = useState(false);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const data = await Auth_ReadInfo();
        const { imgUrl, email, nickname, birthday } = data;
        let { gender } = data;
        gender = gender === 'MALE' ? '남자' : '여자';

        const fetchedInfos = {
          profileImage: location.state?.imageUrl || imgUrl,
          email,
          username: nickname,
          birthday,
          gender
        };

        setInfos(fetchedInfos);
        setInitialInfos({ ...fetchedInfos });
      } catch (error) {
        console.error('유저 정보를 불러오는 데 실패했습니다:', error);
      }
    };
    getUserInfo();
  }, [location.state?.imageUrl]);

  const handleInfos = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.currentTarget;
      const newValue = name === 'birthday' ? formatBirthday(value) : value;

      setInfos((prevInfos) => {
        const newInfos = { ...prevInfos, [name]: newValue };
        return newInfos;
      });
    },
    [infos, location.state?.imageUrl]
  );

  const handleEmailCopy = useCallback(() => {
    navigator.clipboard
      .writeText(infos.email)
      .then(() => {
        alert('이메일이 복사되었습니다.');
      })
      .catch((err) => {
        console.error('이메일 복사에 실패했습니다.', err);
      });
  }, [infos.email]);

  useEffect(() => {
    if (location.state?.imageUrl) {
      setInfos((prev) => ({ ...prev, profileImage: location.state.imageUrl }));
      setIsImageChanged(true);
    }
  }, [location.state?.imageUrl]);

  const handleProfileImageEdit = () => {
    handleImageEdit((selectedImage) => {
      navigate('/profile/edit/crop', {
        state: { imageSrc: selectedImage }
      });
      setInfos((prev) => ({ ...prev, profileImage: selectedImage }));
      setIsImageChanged(true);
    });
  };

  const handleUpdateProfile = async () => {
    try {
      await Auth_Image(location.state?.imageUrl);
      await Auth_UserInfo({
        nickname: infos.username,
        birthday: infos.birthday,
        gender: infos.gender === '남자' ? 'MALE' : 'FEMALE'
      });
      alert('프로필 수정 성공!');
      navigate(`/all`);
    } catch (error) {
      console.error('프로필 수정 실패:', error);
    }
  };

  const isFormValid = useCallback(() => {
    const { username, birthday, gender } = infos;

    const isInfoChanged =
      username !== initialInfos?.username ||
      birthday !== initialInfos?.birthday ||
      gender !== initialInfos?.gender ||
      isImageChanged;

    return (
      username.length >= 2 &&
      birthday &&
      isValidDate(birthday) &&
      (gender === '남자' || gender === '여자') &&
      isInfoChanged
    );
  }, [infos, initialInfos, isImageChanged]);

  return (
    <_.Edit_Layout>
      <Header title="회원 정보 수정" />
      <_.Edit_Content>
        <_.Edit_Profile>
          <_.Edit_Profile_Img src={infos.profileImage} alt="프로필 이미지" />
          <_.Edit_Profile_Edit onClick={handleProfileImageEdit}>
            <ProfileEdit />
          </_.Edit_Profile_Edit>
        </_.Edit_Profile>
        <_.Edit_Infos>
          <_.Edit_Info>
            <_.Edit_Info_Label>이메일</_.Edit_Info_Label>
            <_.Edit_Info_Email>
              {infos.email}
              <EmailCopy onClick={handleEmailCopy} />
            </_.Edit_Info_Email>
          </_.Edit_Info>
          <_.Edit_Info>
            <_.Edit_Info_Label>여행자 닉네임</_.Edit_Info_Label>
            <_.Edit_Info_Input
              name="username"
              value={infos.username}
              onChange={handleInfos}
            />
          </_.Edit_Info>
          <_.Edit_Info>
            <_.Edit_Info_Label>생년월일</_.Edit_Info_Label>
            <_.Edit_Info_Input
              name="birthday"
              value={infos.birthday}
              onChange={handleInfos}
            />
          </_.Edit_Info>
          <_.Edit_Info>
            <_.Edit_Info_Label>성별</_.Edit_Info_Label>
            <_.Edit_Info_Input
              name="gender"
              value={infos.gender}
              onChange={handleInfos}
            />
          </_.Edit_Info>
        </_.Edit_Infos>
      </_.Edit_Content>
      <NextButton
        text="저장하기"
        state={!!isFormValid()}
        onNextClick={handleUpdateProfile}
      />
    </_.Edit_Layout>
  );
};

export default Edit;

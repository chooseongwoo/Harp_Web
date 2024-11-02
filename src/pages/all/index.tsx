// 라이브러리
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// 파일
import * as _ from './style';
import MenuBar from 'components/MenuBar';
import SettingIcon from 'assets/Icon/SettingIcon';
import RightArrow from 'assets/Icon/RightArrow';
import { theme } from 'lib/utils/style/theme';
import { AllPageMenu } from 'data/AllPageMenu';
import { Auth_ReadInfo } from 'lib/apis/Auth';
import { user } from 'types/user';

const All = () => {
  const navigate = useNavigate();
  const [infos, setInfos] = useState<user>({
    profileImage: '',
    username: ''
  });

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const data = await Auth_ReadInfo();
        const { imgUrl, nickname } = data;
        let { gender } = data;
        gender = gender === 'MALE' ? '남자' : '여자';

        const fetchedInfos = {
          profileImage: imgUrl,
          username: nickname
        };

        setInfos(fetchedInfos);
      } catch (error) {
        console.error('유저 정보를 불러오는 데 실패했습니다:', error);
      }
    };
    getUserInfo();
  }, []);

  return (
    <_.All_Layout>
      <_.All_Header>
        <_.All_Name>전체</_.All_Name>
        <SettingIcon onClick={() => navigate(`/setting`)} />
      </_.All_Header>
      <_.All_Profile>
        <_.All_Profile_Image url={infos.profileImage} />
        <_.All_Name onClick={() => navigate(`/profile/edit`)}>
          {infos.username}
          <RightArrow width="14" height="14" color={theme.gray.black} />
        </_.All_Name>
      </_.All_Profile>
      <_.All_CategoryList>
        <_.All_CategoryList>
          {AllPageMenu.map((categoryItem, categoryIndex) => (
            <>
              <_.All_CategoryBox key={categoryIndex}>
                <_.All_Category>{categoryItem.category}</_.All_Category>
                <_.All_MenuList>
                  {categoryItem.menus.map((menuItem, menuIndex) => (
                    <_.All_Menu key={menuIndex}>
                      {menuItem.icon}
                      <span>{menuItem.title}</span>
                    </_.All_Menu>
                  ))}
                </_.All_MenuList>
              </_.All_CategoryBox>
              {(categoryIndex === 0 || categoryIndex === 1) && <_.All_Hr />}
            </>
          ))}
        </_.All_CategoryList>
      </_.All_CategoryList>
      <MenuBar selectState={4} />
    </_.All_Layout>
  );
};

export default All;

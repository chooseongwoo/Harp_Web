// 라이브러리
import React, { useEffect, useState } from 'react';
import { AppScreen } from '@stackflow/plugin-basic-ui';

// 파일
import * as _ from './style';
import MenuBar from 'components/MenuBar';
import SettingIcon from 'assets/Icon/SettingIcon';
import RightArrow from 'assets/Icon/RightArrow';
import { theme } from 'lib/utils/style/theme';
import { AllPageMenu } from 'data/AllPageMenu';
import { Auth_AllInfo } from 'lib/apis/Auth';
import { user } from 'types/user';
import { useFlow } from 'stackflow';

const All = () => {
  const { push } = useFlow();
  const [infos, setInfos] = useState<user>({
    profileImg: '',
    nickname: ''
  });

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const { data } = await Auth_AllInfo();
        const { profileImg, nickname } = data;
        let { gender } = data;
        gender = gender === 'MALE' ? '남자' : '여자';

        const fetchedInfos = {
          profileImg: profileImg,
          nickname: nickname
        };

        setInfos(fetchedInfos);
      } catch (error) {
        console.error('유저 정보를 불러오는 데 실패했습니다:', error);
      }
    };
    getUserInfo();
  }, []);

  return (
    <AppScreen>
      <_.All_Layout>
        <_.All_Header>
          <_.All_Name>전체</_.All_Name>
          <SettingIcon onClick={() => push('Setting', {})} />
        </_.All_Header>
        <_.All_Profile>
          <_.All_Profile_Image url={infos.profileImg} />
          <_.All_Name onClick={() => push('Edit', { imageUrl: '' })}>
            {infos.nickname}
            <RightArrow width="18" height="18" color={theme.gray.black} />
          </_.All_Name>
        </_.All_Profile>
        <_.All_CategoryList>
          {AllPageMenu.map((categoryItem, categoryIndex) => (
            <>
              <_.All_CategoryBox key={categoryIndex}>
                <_.All_Category>{categoryItem.category}</_.All_Category>
                <_.All_MenuList>
                  {categoryItem.menus.map((menuItem, menuIndex) => (
                    <_.All_Menu
                      key={menuIndex}
                      onClick={() => {
                        if (menuItem.title === '이벤트')
                          alert('준비 중인 서비스입니다!');
                        else push(menuItem.location as any, {});
                      }}
                    >
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
        <MenuBar selectState={3} />
      </_.All_Layout>
    </AppScreen>
  );
};

export default All;

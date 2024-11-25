// 라이브러리
import React from 'react';

// 파일
import * as _ from './style';
import Home from 'assets/Icon/MenuBar/Select/Home';
import Home_Not from 'assets/Icon/MenuBar/NotSelect/Home';
import Travel from 'assets/Icon/MenuBar/Select/Travel';
import Travel_Not from 'assets/Icon/MenuBar/NotSelect/Travel';
import Community from 'assets/Icon/MenuBar/Select/Community';
import Community_Not from 'assets/Icon/MenuBar/NotSelect/Community';
import All from 'assets/Icon/MenuBar/Select/All';
import All_Not from 'assets/Icon/MenuBar/NotSelect/All';
import { useFlow } from 'stackflow';

interface MenuBarProps {
  selectState: number;
}

const icons = [
  { selected: Home, notSelected: Home_Not, title: '홈', location: 'Home' },
  {
    selected: Travel,
    notSelected: Travel_Not,
    title: '여행',
    location: 'SelectDate'
  },
  {
    selected: Community,
    notSelected: Community_Not,
    title: '커뮤니티',
    location: 'Community'
  },
  { selected: All, notSelected: All_Not, title: '전체', location: 'All' }
];

const MenuBar = ({ selectState }: MenuBarProps) => {
  const { push, replace } = useFlow();
  return (
    <_.MenuBar_Container>
      {icons.map((icon, index) => (
        <_.Menubar_Icon
          key={index}
          onClick={() => {
            if (icon.title == '여행') {
              push(icon.location as any, { fromHome: true });
            } else {
              replace(icon.location as any, {}, { animate: false });
            }
          }}
        >
          {selectState === index + 1 ? <icon.selected /> : <icon.notSelected />}
          <_.Menubar_Title select={selectState === index + 1}>
            {icon.title}
          </_.Menubar_Title>
        </_.Menubar_Icon>
      ))}
    </_.MenuBar_Container>
  );
};

export default MenuBar;

// 라이브러리
import React from 'react';

// 파일
import * as _ from './style';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import Header from 'components/Header';

const Announcement = () => {
  const announcementList = [
    {
      id: 1,
      title: '하프 서비스 정식 출시 안내🎉',
      date: '2024.11.28.'
    }
  ];

  return (
    <AppScreen>
      <Header title="공지사항" />
      <_.Announcement_Layout>
        {announcementList.map((annoucement) => (
          <_.Announcement_Content key={annoucement.id}>
            <_.Announcement_Title>{annoucement.title}</_.Announcement_Title>
            <_.Announcement_Date> {annoucement.date}</_.Announcement_Date>
          </_.Announcement_Content>
        ))}
      </_.Announcement_Layout>
    </AppScreen>
  );
};

export default Announcement;

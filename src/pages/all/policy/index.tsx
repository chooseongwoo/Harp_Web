import React from 'react';
import * as _ from './style';
import TermsContent from 'components/TermsContent';
import TermsData from 'data/Terms';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';
import Header from 'components/Header';

const Policy: ActivityComponentType = () => {
  return (
    <AppScreen>
      <Header />
      <_.Policy_Layout>
        <_.Policy_Container>
          <_.Policy_Title>서비스 이용을 위한</_.Policy_Title>
          <_.Policy_SubTitle>
            <_.Policy_SubTitle_Highlight>
              이용약관 확인
            </_.Policy_SubTitle_Highlight>
          </_.Policy_SubTitle>
          <_.Policy_Deatil>
            {TermsData.map((item) => (
              <TermsContent
                key={item.id}
                id={item.id}
                title={item.title}
                detail={item.desc}
                isTerms={false}
              />
            ))}
          </_.Policy_Deatil>
        </_.Policy_Container>
      </_.Policy_Layout>
    </AppScreen>
  );
};

export default Policy;

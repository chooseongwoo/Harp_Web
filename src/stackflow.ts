import '@stackflow/plugin-basic-ui/index.css';
import { stackflow } from '@stackflow/react';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { historySyncPlugin } from '@stackflow/plugin-history-sync';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';

import Splash from 'pages/splash';
import Auth from 'pages/auth';
import Home from 'pages/home';
import NotFound from 'pages/notFound';
import Callback from 'pages/Callback';

// register
import Terms from 'pages/register/terms';
import UserInfo from 'pages/register/userinfo';
import SurveyStyle from 'pages/register/surveyStyle';
import SurveyFood from 'pages/register/surveyFood';
import SurveyMBTI from 'pages/register/surveyMBTI';
import SurveyTMI from 'pages/register/surveyTMI';
import SurveyEnd from 'pages/register/surveyEnd';

// plan
import Chat from 'pages/plan/chat';
import SelectDate from 'pages/plan/selectDate';
import Info from 'pages/plan/info';
import Map from 'pages/plan/map';
import InfoCrop from 'pages/plan/crop';
import Memo from 'pages/plan/memo';
import Update from 'pages/plan/update';
import AddSearch from 'pages/plan/addSearch';
import AddDetail from 'pages/plan/addDetail';

// profile
import Edit from 'pages/profile/edit';
import CropPage from 'pages/profile/crop';
import All from 'pages/all';
import Setting from 'pages/setting';

// community
import Community from 'pages/community/home';
import Detail from 'pages/community/postDetail';
import Write from 'pages/community/write';

export const { Stack, useFlow, useStepFlow } = stackflow({
  transitionDuration: 350,
  activities: {
    Splash,
    Auth,
    Home,
    Callback,
    NotFound,
    Terms,
    UserInfo,
    SurveyStyle,
    SurveyFood,
    SurveyMBTI,
    SurveyTMI,
    SurveyEnd,
    Chat,
    SelectDate,
    Info,
    Map,
    InfoCrop,
    Memo,
    Update,
    AddSearch,
    AddDetail,
    Edit,
    CropPage,
    All,
    Setting,
    Community,
    Detail,
    Write
  },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino'
    }),
    historySyncPlugin({
      routes: {
        // 메인
        Home: '/',
        Splash: '/splash',
        Auth: '/auth',
        Callback: '/auth/kakao/callback',

        // 회원가입
        Terms: '/register/terms',
        UserInfo: '/register/userinfo',
        SurveyStyle: '/register/surveystyle',
        SurveyFood: '/register/surveyfood',
        SurveyMBTI: '/register/surveymbti',
        SurveyTMI: '/register/surveytmi',
        SurveyEnd: '/register/surveyend',

        // 일정
        Chat: '/plan/chat/:id',
        SelectDate: '/plan/selectdate',
        Info: '/plan/info/:id',
        Map: '/plan/map/:id',
        InfoCrop: '/plan/info/:id/crop',
        Memo: '/plan/info/:id/day/:dayIndex/time/:timeIndex',
        Update: '/plan/info/:id/day/:dayIndex/time/:timeIndex/update',
        AddSearch: '/plan/info/:id/addsearch',
        AddDetail: '/plan/info/:id/add',

        // 프로필
        Edit: '/profile/edit',
        EditCrop: '/profile/edit/crop',
        All: '/all',
        Setting: '/setting',

        // 커뮤니티
        Community: '/community',
        CommunityDetail: '/community/detail/:id',
        CommunityWrite: '/community/write',

        // NotFound
        NotFound: '*'
      },
      fallbackActivity: () => 'NotFound'
    })
  ]
});

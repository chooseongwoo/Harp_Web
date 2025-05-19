[![배너](https://i.postimg.cc/NMQzB54c/image.png)](https://postimg.cc/JydqQ7v6)

# 사용자 맞춤형 여행 일정 작성 서비스 (HARP)
AI와 대화하며 쉽고 빠르게 **개인 맞춤형 여행 일정을 작성**할 수 있는 서비스입니다.
기존 방식에서 발생하는 **장소 검색, 정보 정리, 시간 배분 등 복잡한 과정을 해결**했습니다.

프로젝트 기간 - 2024.04. ~ 2024.11.
[운영중인 서비스 바로가기](https://harp-frontend.netlify.app/auth)

## 기능
**🧠 사용자 맞춤 설문**

* 여행 스타일, 선호 음식, MBTI 등을 기반으로 사용자 성향을 분석합니다.
* 맞춤형 일정 추천의 초기 데이터로 활용됩니다.

**💬 AI 기반 채팅**

* AI와 대화를 통해 여행 일정을 자동으로 생성할 수 있습니다.
* 사용자의 요구를 실시간으로 반영해 일정을 제안합니다.

**🗓 일정 관리 및 지도 연동**

* AI가 생성한 일정을 바탕으로 사용자 일정 CRUD 기능을 제공합니다.
* 카카오맵 API를 활용하여 일정 장소를 지도에서 직관적으로 확인할 수 있습니다.

**👥 커뮤니티**

* 사용자 간 여행 팁, 후기, 장소 추천을 공유할 수 있는 커뮤니티를 운영합니다.
* 다른 사람의 여행 경험을 참고하거나 질문을 통해 도움을 받을 수 있습니다.


## 기술 도입

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Expo](https://img.shields.io/badge/Expo-WebView-000020?style=flat-square&logo=expo&logoColor=white)
![React Query](https://img.shields.io/badge/React_Query-TanStack-FF4154?style=flat-square&logo=reactquery&logoColor=white)
![Recoil](https://img.shields.io/badge/Recoil-State_Management-3578E5?style=flat-square&logo=recoil&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled_Components-CSS_in_JS-DB7093?style=flat-square&logo=styled-components&logoColor=white)

## 트러블 슈팅
### 1. WebView에서 StatusBar와 콘텐츠가 겹치는 문제

#### As-Is : WebView에서 콘텐츠와 StatusBar를 겹침

* WebView 내 콘텐츠가 StatusBar 아래로 렌더링되어 UI가 잘리는 현상이 발생했습니다.
* 특히 특정 경로에서는 StatusBar를 숨겨야 했지만, 유연한 처리 방식이 존재하지 않았습니다.

#### To-Be : WebView 내부 스타일 및 네이티브 제어 로직 개선

* WebView 내부에서는 `padding-top` 등 CSS로 직접 여백을 조절하고,
* 외부 React Native 단에서는 `StatusBar` 컴포넌트를 직접 제어하여 충돌을 방지했습니다.
* 특정 URL을 감지해 StatusBar를 자동으로 표시하거나 숨기는 동적 처리 로직을 구현했습니다.

#### 회고 : 네이티브와 WebView 간 역할 분리가 중요함을 인식

* 네이티브 요소와 WebView DOM이 맞물릴 때, 책임 분리를 명확히 해야 관리가 쉬워짐
* postMessage 이전에 발생하는 렌더링 이슈에 대비한 초기 UI 세팅 로직의 중요성을 체감함

|                             개선 전                            |                            개선 후                            |
| :---------------------------------------------------------: | :--------------------------------------------------------: |
| ![개선 전](https://i.postimg.cc/Fz3pSvGZ/before.png) | ![개선 후](https://i.postimg.cc/Pfw29bhw/after.png) |

### 2. WebView 기반 환경에서의 부자연스러운 화면 전환

#### As-Is : 앱스러운 전환 흐름 부족

* 이전 페이지로는 이동이 가능했지만, 화면 간 전환 애니메이션이 없고 방향성이 불분명했습니다.
* ‘뒤로 가기’는 작동했지만, 스택 기반 앱처럼 쌓이고 돌아가는 UX가 부족했습니다.

#### To-Be : [**Stackflow**](https://stackflow.dev) 를 도입해 앱스러운 전환 흐름 구현

* WebView 구조 특성을 고려해 SPA 방식 대신 `Stackflow`를 도입
* 화면 이동 시 `push`, `pop` 방식의 스택 전환을 구현해 맥락을 명확히 전달
* 각 페이지 간 전환에 애니메이션을 적용해 네이티브 앱에 가까운 UX를 제공

#### 회고 : WebView에서도 앱다운 전환 흐름이 중요

* 화면이 빠르게 전환되는 상황에서 방향성과 계층감이 매우 중요하다는 것을 체감
* 단순히 화면을 보여주는 것이 아니라, 사용자의 행동 흐름을 시각적으로 안내해야 함

## 페이지 구성

|                               회원가입 및 회원정보 입력 페이지                              |                               성향 및 선호도 설문조사 페이지                              |
| :---------------------------------------------------------------: | :---------------------------------------------------------------: |
| <img width="329" src="https://i.postimg.cc/YSxw6cDt/harp-1.png"/> | <img width="329" src="https://i.postimg.cc/50NWpPDL/harp-2.png"/> |

|                           홈, 날짜 선택, AI 채팅, 일정 확인 페이지                                |                             일정 메모, 지도, 일정 추가, 일정 수정 페이지                             |
| :---------------------------------------------------------------: | :---------------------------------------------------------------: |
| <img width="329" src="https://i.postimg.cc/mkKxLTky/harp-3.png"/> | <img width="329" src="https://i.postimg.cc/Tw7MsVXS/harp-4.png"/> |

|                              커뮤니티, 글 작성, 글 상세 페이지                              |                            전체, 설정, 유저 프로필 페이지                            |
| :---------------------------------------------------------------: | :---------------------------------------------------------------: |
| <img width="329" src="https://i.postimg.cc/qqNVHNJ7/harp-5.png"/> | <img width="329" src="https://i.postimg.cc/XNP6ckLB/harp-6.png"/> |

## 팀원
| <img src="https://avatars.githubusercontent.com/u/82251632?v=4" width="130"/> | <img src="https://avatars.githubusercontent.com/u/126847458?v=4" width="130"/> | <img src="https://avatars.githubusercontent.com/u/128370710?v=4" width="130"/> | <img src="https://avatars.githubusercontent.com/u/122879868?v=4" width="130"/> |
| :---------------------------------------------------------------------------: | :----------------------------------------------------------------------------: | :----------------------------------------------------------------------------: | :----------------------------------------------------------------------------: |
|                [이승현](https://github.com/jamkris) <br/> Frontend               |              [추성우](https://github.com/chooseongwoo) <br/> Frontend             |                [조예설](https://github.com/choyeseol) <br/> Backend               |              [강민지](https://github.com/rkdalswl718) <br/> Designer             |

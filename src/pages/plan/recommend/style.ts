import styled from 'styled-components';

export const Recommend_Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  gap: 10px;
  padding: 10px 16px;
`;

export const Recommend_Image = styled.div<{ imgUrl: string }>`
  width: 100%;
  height: 180px;
  background:
    linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%),
    url(${({ imgUrl }) => imgUrl}) lightgray 50% / cover no-repeat;
  border-radius: 20px;
`;

export const Recommend_Title = styled.p`
  color: #000;
  font-size: 26px;
  font-weight: 700;
`;

export const Recommend_Description = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 400;
`;

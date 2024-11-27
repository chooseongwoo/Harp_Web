import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const PastSchedule_Layout = styled.div`
  padding: 12px 20px;
  width: 100vw;
  height: max-content;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const PastSchedule_Plan = styled.div`
  border-radius: 10px;
  border: 0.5px solid ${theme.gray[3]};
  padding: 12px;
  display: flex;
  gap: 10px;
`;

export const PastSchedule_Image = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 10px;
  object-fit: cover;
`;

export const PastSchedule_Texts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PastSchedule_Title = styled.div`
  color: ${theme.gray[4]};
  font-size: 17px;
  font-weight: 500;
`;

export const PastSchedule_Date = styled.div`
  color: ${theme.gray[4]};
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const PastSchedule_ErrorOrNothing = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: ${theme.gray[3]};
`;

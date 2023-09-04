import styled from 'styled-components';

export const StatisticsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Grid = styled.div`
  min-width: 320px;
  display: flex;
  justify-content: center;

  .option-wrapper {
    display: flex;
    justify-content: space-around;
    gap: 60px;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export const ResultWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  p:nth-child(1) {
    font-size: 20px;
    font-weight: bold;
  }
`;

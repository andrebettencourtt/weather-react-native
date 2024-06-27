import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 359px;
  height: 292px;
  background-color: #16161f;
  border-radius: 8px;
`;

export const DetailContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 327px;
  height: 56px;
  border-style: solid;
  border-bottom-color: #1c1c27;
  border-bottom-width: 1px;
`;

export const DetailDescription = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 12px;
  align-items: center;
`;

export const DetailImage = styled.Image`
  width: 24px;
  height: 24px;
`;

export const DetailText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: white;
`;

export const DescriptionText = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: white;
`;

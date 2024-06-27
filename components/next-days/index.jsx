import {
  Container,
  DayContainer,
  DayImage,
  DayText,
  MaxTempText,
  MinTempText,
  TempContainer,
} from "./styles";

import Trovoada from "../../assets/images/cloud-rain.png";
import Chuva from "../../assets/images/cloud-rain2.png";
import SolNublado from "../../assets/images/sun-cloud.png";
import Nuvem from "../../../../assets/images/clud-white.png";
import Sol from "../../assets/images/sun-yellow.png";

export default function NextDays() {
  return (
    <Container>
      <DayContainer>
        <DayText>Ter</DayText>
        <DayImage source={Trovoada} />
        <TempContainer>
          <MaxTempText>32ºc</MaxTempText>
          <MinTempText>26ºc </MinTempText>
        </TempContainer>
      </DayContainer>
      <DayContainer>
        <DayText>Qua</DayText>
        <DayImage source={Chuva} />
        <TempContainer>
          <MaxTempText>32ºc</MaxTempText>
          <MinTempText>26ºc </MinTempText>
        </TempContainer>
      </DayContainer>
      <DayContainer>
        <DayText>Qui</DayText>
        <DayImage source={SolNublado} />
        <TempContainer>
          <MaxTempText>32ºc</MaxTempText>
          <MinTempText>26ºc </MinTempText>
        </TempContainer>
      </DayContainer>
      <DayContainer>
        <DayText>Sex</DayText>
        <DayImage source={Nuvem} />
        <TempContainer>
          <MaxTempText>32ºc</MaxTempText>
          <MinTempText>26ºc </MinTempText>
        </TempContainer>
      </DayContainer>
      <DayContainer>
        <DayText>Sab</DayText>
        <DayImage source={Sol} />
        <TempContainer>
          <MaxTempText>32ºc</MaxTempText>
          <MinTempText>26ºc </MinTempText>
        </TempContainer>
      </DayContainer>
    </Container>
  );
}

import nerdImage from "../assets/images/illustration.png";
import Button from "./Button";
import {
  CardContainer,
  ContentContainer,
  BtnContainer,
} from "./styles/Container.style";
import { TagELement, H1, P, Image } from "./styles/Element.style";
import { StyledCustom } from "./styles/Custom.style";

export default function Card() {
  return (
    <CardContainer>
      <ContentContainer>
        <TagELement>Exclusive </TagELement>
        <H1>
          <StyledCustom text="React_Style Component" />
        </H1>
        <P>
          Exclusive React JS Tutorial on Styled Components where you will learn
          why we need this & how to use it.
        </P>
        <BtnContainer>
          <Button link="https://lwsbd.link/rsc" text="Watch now" />
          <Button link="https://lwsbd.link/react" text="Github repo" />
        </BtnContainer>
      </ContentContainer>
      <Image src={nerdImage} alt="nerd" width="270px"></Image>
    </CardContainer>
  );
}

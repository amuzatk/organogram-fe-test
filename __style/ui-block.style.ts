/* eslint-disable linebreak-style */
import styled from 'styled-components';

export const StyledImgCon = styled.div<{ w?: string; h?: string }>`
  width: ${({ w }) => w};
  height: ${({ h }) => h};
`;
export const StyledUnderline = styled.div<{
  mt?: string;
  mb?: string;
  border: string;
}>`
  margin-top: ${({ mt }) => mt};
  margin-bottom: ${({ mb }) => mb};
  border-top: ${({ border }) => border};
`;
export const StyledDiv = styled.div<{
  m?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mh?: string;
  w?: string;
  mw?: string;
  mr?: string;
  p?: string;
  bg?: string;
  br?: string;
  pt?: string;
  pb?: string;
  bb?: string;
  pl?: string;
  pr?: string;
  fsize?: string;
  color?: string;
  oFlow?: string;
  textAlign?: string;
}>`
  margin: ${({ m }) => m};
  margin-top: ${({ mt }) => mt};
  margin-bottom: ${({ mb }) => mb};
  margin-left: ${({ ml }) => ml};
  margin-right: ${({ mr }) => mr};
  padding: ${({ p }) => p};
  padding-top: ${({ pt }) => pt};
  padding-bottom: ${({ pb }) => pb};
  padding-left: ${({ pl }) => pl};
  padding-right: ${({ pr }) => pr};
  width: ${({ w }) => w};
  text-align: ${({ textAlign }) => textAlign};
  max-width: ${({ mw }) => mw};
  background: ${({ bg }) => bg};
  border-radius: ${({ br }) => br};
  height: ${({ mh }) => mh};
  font-size: ${({ fsize }) => fsize};
  color: ${({ color }) => color};
  overflow-x: ${({ oFlow }) => oFlow};
  border-bottom: ${({ bb }) => bb};
`;

export const StyledFlex = styled.div<{
  cg?: string;
  g?: string;
  rg?: string;
  justify?: string;
  align?: string;
  flexW?: string;
  bg?: string;
  p?: string;
  fDirection?: string;
  bb?: string;
  oFlow?: string;
  bt?: string;
  m?: string;
}>`
  display: flex;
  flex-direction: ${({ fDirection }) => fDirection ?? ''};
  flex-wrap: ${({ flexW }) => flexW ?? 'unset'};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  column-gap: ${({ cg }) => cg};
  background: ${({ bg }) => bg};
  padding: ${({ p }) => p};
  row-gap: ${({ rg }) => rg};
  gap: ${({ g }) => g};
  border-bottom: ${({ bb }) => bb};
  border-top: ${({ bt }) => bt};
  margin: ${({ m }) => m};
  overflow-x: ${({ oFlow }) => oFlow};
`;
export const StyledFlexItem = styled(StyledDiv)<{
  mWidth?: string;
  grow?: boolean;
  basis?: string;
  overflowX?: string;
}>`
  flex-basis: ${({ basis }) => basis && basis};
  overflow-x: ${({ overflowX }) => overflowX && overflowX};
  max-width: ${({ mWidth }) => mWidth && mWidth};
  flex-grow: ${({ grow }) => grow && 1};
`;
export const StyledGrid = styled.div<{
  cg?: string;
  rg?: string;
  justify?: string;
  align?: string;
  p?: string;
  gtc: string;
}>`
  grid-template-columns: ${({ gtc }) => gtc ?? 'unset'};
  display: grid;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  column-gap: ${({ cg }) => cg};
  row-gap: ${({ rg }) => rg};
  padding: ${({ p }) => p};
`;

export const StyledButton = styled.button<{
  border?: string;
  bg?: string;
  cursor?: string;
  hoverB?: string;
  hoverC?: string;
  focusB?: string;
  focusC?: string;
  shadow?: string;
  color?: string;
  hBorder?: string;
  fBorder?: string;
  fsize?: string;
  fstyle?: string;
  fw?: string;
  lh?: string;
  borderR?: string;
  w?: string;
  h?: string;
  p?: string;
}>`
  border: ${({ border }) => border ?? 'none'};
  border-radius: ${({ borderR }) => borderR ?? 0};
  background: ${({ bg }) => bg ?? 'none'};
  cursor: ${({ cursor }) => cursor ?? 'pointer'};
  color: ${({ color }) => color ?? 'none'};
  font-size: ${({ fsize }) => fsize};
  font-style: ${({ fstyle }) => fstyle ?? 'normal'};
  font-weight: ${({ fw }) => fw};
  line-height: ${({ lh }) => lh};
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  padding: ${({ p }) => p};

  transition: all 0.3s;
  &:hover {
    transition: all 0.3s;
    background: ${({ hoverB, bg }) => hoverB ?? bg ?? 'none'};
    color: ${({ hoverC, color }) => hoverC ?? color ?? 'none'};
    border: ${({ border, hBorder }) => hBorder ?? border ?? 'none'};
  }
  &:focus {
    outline: none;
    transition: all 0.3s;
    box-shadow: none;
    border: ${({ border, fBorder }) => fBorder ?? border ?? 'none'};
    background: ${({ focusB, bg }) => focusB ?? bg ?? 'none'};
    color: ${({ focusC, color }) => focusC ?? color ?? 'none'};
  }
`;

export const StyledBadge = styled.div<{
  border?: string;
  bRadius?: string;
  bg?: string;
}>`
  background: ${({ bg }) => bg ?? 'none'};
  border: ${({ border }) => border ?? 'none'};
  border-radius: ${({ bRadius }) => bRadius ?? 'none'};
  display: inline-block;
`;
export const StyledLink = styled(StyledDiv)<{
  fsize: string;
  fstyle?: string;
  fw: string;
  lh?: string;
  color?: string;
  ff?: string;
  textTransform?: string;
  activeColor?: string;
  isActive?: boolean;
  bottom?: string;
}>`
  display: inline-block;
  font-family: ${({ ff }) => ff ?? 'var(--Primary-font)'};
  font-size: ${({ fsize }) => fsize};
  font-style: ${({ fstyle }) => fstyle ?? 'normal'};
  font-weight: ${({ fw }) => fw};
  line-height: ${({ lh }) => lh};
  text-transform: ${({ textTransform }) => textTransform};
  color: ${({ activeColor, color, isActive }) =>
    isActive ? activeColor : color};
  position: relative;
  /* transition: all 0.3s; */
  :after {
    transition: all 0.3s;
    content: '';
    position: absolute;
    bottom: ${({ bottom }) => bottom};
    width: 0;
    left: 0;
    border-bottom: 1px solid transparent;
  }
  &:hover {
    transition: all 0.3s;
    :after {
      transition: all 0.3s;
      width: 100%;
      /* border-bottom: 1px solid
        ${({ activeColor, isActive }) =>
        activeColor && !isActive ? activeColor : 'transparent'}; */
    }
  }
`;
export const StyledContainer = styled.section`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 868px) {
    .main-container {
      max-width: 840px;
    }
  }
  @media (min-width: 991px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1065px;
  }

  @media (min-width: 1600px) {
    max-width: 1250px;
  }
`;
export const StyledContainerFluid = styled(StyledContainer)`
  @media (min-width: 768px) {
    max-width: 740px;
  }
  @media (min-width: 868px) {
    max-width: 840px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1360px) {
    max-width: 1290px;
  }
  @media (min-width: 1600px) {
    max-width: 1500px;
  }
`;

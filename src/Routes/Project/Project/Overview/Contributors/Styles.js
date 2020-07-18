import styled from 'styled-components';

import { color, radius } from '../../../../../shared/utils/Styles';

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 25px 10px 15px;
  background-color: ${color.backgroundLightPrimary};
  border-radius: ${radius.cardRadius};
  margin: 10px 10px;
`;

export const Contributor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 62.5%;
`;

export const HeadItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 25px 10px 15px;
`;

export const ContributorsContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 435px;
  background-color: ${color.backgroundDark};
  border-radius: ${radius.cardRadius};
  display: block;
  padding: 15px;
`;

export const ContributorList = styled.ul`
  max-height: 370px;
  overflow: hidden;
  overflow-y: scroll;
`;

export const ComponentHeader = styled.h2`
  text-align: center;
  margin: 0 0 10px;
`;

import React from 'react';
import style from 'styled-components';
import ColorBoxItem from './ColorBoxItem';
const ContentWrapper = style.li`
padding:10px;
`;
const ContentTitle = style.p`
font-size:15px;
color:#474747;
margin-bottom:5px;
`;
const TitleWrapper = style.div`
display:flex;
flex-direction:row;
align-items:center;
`;
const ContentDescription = style.p`
font-size:13px;
color:#A3A7AC;
`;
const DropDownItem = ({title, description, color}) => {
  return (
    <ContentWrapper>
      <TitleWrapper>
        {color ? <ColorBoxItem color={color} /> : null}
        <ContentTitle>{title}</ContentTitle>
      </TitleWrapper>
      <ContentDescription>{description}</ContentDescription>
    </ContentWrapper>
  );
};

export default DropDownItem;
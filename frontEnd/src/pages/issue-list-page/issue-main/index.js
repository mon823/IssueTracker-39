import React from 'react';

import IssueList from './issue-list';
import styled from 'styled-components';
import IssueMainHeader from './issue-main-header';
// 이곳에 ContextAPI 나중에 추가할것!

const issueMainWidth = '90%';
const IssueMainWrapper = styled.main`
  box-sizing: border-box;
  width: ${issueMainWidth};
  margin: 5% auto;
`;

const IssueMain = () => {
  return (
    <IssueMainWrapper>
      <IssueMainHeader></IssueMainHeader>
      <IssueList></IssueList>
    </IssueMainWrapper>
  );
};

export default IssueMain;

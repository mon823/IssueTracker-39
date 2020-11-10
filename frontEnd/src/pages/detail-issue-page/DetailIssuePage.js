import React from 'react';
import styled from 'styled-components';
import Header from '~/*/components/header/Header';
import Sidebar from '~/*/components/create-issue/Sidebar';
import Title from './DetailIssueheader';
import Body from './DetailIssueContent';
import Comment from './DetailIssueComment';

const IssueWrapper = styled.main`
  max-width: 1280px;
  margin: 30px auto;
`;

const BodyWrapper = styled.div`
  display: flex;
`;
const ContextWaapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin-right: 10px;
`;

const DetailIssuePage = () => {
  // 몇 번째 글인지 알아야하니까 /:idx 로 요청해서 하나 가져오고
  // /list/:issueIdx 로 댓글도 가져오고
  return (
    <>
      <Header></Header>
      <IssueWrapper>
        <Title />
        <BodyWrapper>
          <ContextWaapper>
            <div>
              <Body />
              <Body />
              <hr></hr>
            </div>
            <Comment />
          </ContextWaapper>
          <Sidebar />
        </BodyWrapper>
      </IssueWrapper>
    </>
  );
};

export default DetailIssuePage;
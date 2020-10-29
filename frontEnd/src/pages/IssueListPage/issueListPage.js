import React from 'react';
import styled from 'styled-components';

import Header from '../../components/Header/Header';
import Issue from '../../components/Issue/Issue';
import IssueMain from './IssueMain';

const IssueListPage = () => {
  let issue = {
    title: 'This is title',
    labelTitle: 'FE',
    labelColor: 'red',
    createdTime: 'createdTime',
    closedTime:'closedTime',
    status:'status',
    author: 'someone',
    milestoneIdx:'1'
  }

  return (
    <>
      <Header />
      <IssueMain />
    </>
  );
};

export default IssueListPage;
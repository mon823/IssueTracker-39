import React, {createContext, useReducer, useContext} from 'react';
import {modelStore} from '~/*/models/store';
export const FilterModelContext = createContext();

export const UpdateAuthor = 'UpdateAuthor';
export const UpdateLabel = 'UpdateLabel';
export const UpdateMilestone = 'UpdateMilestone';
export const UpdateAssignee = 'UpdateAssignee';
export const UpdateStatus = 'UpdateStatus';

function updateAuthorAction(data) {
  return {
    type: UpdateAuthor,
    Author: data,
  };
}

function updateLabelAction(data) {
  return {
    type: UpdateLabel,
    Label: data,
  };
}

function updateAssigneeAction(data) {
  return {
    type: UpdateAssignee,
    Assignee: data,
  };
}

function updateStatusAction(data) {
  return {
    type: UpdateStatus,
    Status: data,
  };
}

function updateMilestoneAction(data) {
  return {
    type: UpdateMilestone,
    Milestone: data,
  };
}

function reducer(state, action) {
  switch (action.type) {
    case UpdateAuthor: {
      return {
        ...state,
        Author: action.Author,
      };
    }
    case UpdateLabel: {
      return {
        ...state,
        Label: action.Label,
      };
    }
    case UpdateMilestone: {
      return {...state, Milestone: action.Milestone};
    }
    case UpdateAssignee: {
      return {
        ...state,
        Assignee: action.Assignee,
      };
    }
    case UpdateStatus: {
      return {
        ...state,
        Status: action.Status,
      };
    }
    default: {
      throw new Error('filter Model 옳바르지 않은 형식이네요');
    }
  }
}

const FilterModelConsumer = ({children}) => {
  const {store: issueStore, actions: issueActions} = useContext(
    modelStore.IssueList,
  );
  const [store, dispatch] = useReducer(reducer, {});

  const actions = {
    Author: updateAuthorAction,
    Label: updateLabelAction,
    Assignee: updateAssigneeAction,
    Status: updateStatusAction,
    Milestone: updateMilestoneAction,
  };

  return (
    <FilterModelContext.Provider
      value={{
        store,
        actions,
        dispatch,
      }}
    >
      {children}
    </FilterModelContext.Provider>
  );
};

export default FilterModelConsumer;

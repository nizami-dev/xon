import { String2 } from '~/lib/core';

export interface IssueMessage {
  actual: String2;
  expect: String2 | null;
}

export const issueMessage = {
  unexpectedNode: {
    actual: 'Unexpected node',
    expect: null,
  },
};
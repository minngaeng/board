import styled from '@emotion/styled';

export const ClickPageWrapper = styled.div`
  cursor: pointer;

  /* span {
    &:hover {
      color: #6868ff;
    }
  } */
`;

export const Page = styled.span<ButtonElement>`
  padding: 0 0.5rem;
  cursor: pointer;

  &:hover {
    color: #8f99f7;
  }

  color: ${(props) => (props.isActive ? '#8f99f7' : '')};
`;

interface ButtonElement {
  isActive: boolean;
}

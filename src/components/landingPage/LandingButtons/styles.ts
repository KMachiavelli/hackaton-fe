import { Button, styled } from "@mui/material";

export const StyledLandingButtons = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  margin: ${({ theme }) => theme.spacing(2)};
  width: 100%;
  a {
    width: 100%;
    text-align: center;
  }
`;

export const StyledLandingButton = styled(Button)`
  width: 100%;
`;

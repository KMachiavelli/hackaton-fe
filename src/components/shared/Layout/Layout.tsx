import { Navbar } from "../Navbar/Navbar";
import { StyledBackground, StyledLayout, StyledMain } from "./styles";

interface LayoutI {
  children: React.ReactElement;
}

export const Layout = ({ children }: LayoutI) => {
  return (
    <StyledLayout>
      <Navbar />
      <StyledMain>
        {children}
        <StyledBackground />
      </StyledMain>
      <footer />
    </StyledLayout>
  );
};

import styled from "styled-components";

export const NavContainer = styled.div`
  font-family: var(--font1);
  height: 60px;
  width: 100vw;
  position: fixed;
  z-index: 55;
`;

export const NavWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 5px 15px;
  border: 1px solid var(--gray-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLogo = styled.h2`
  color: var(--secondary-color);
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  padding: 5px 8px;
`;

export const NavSearch = styled.div`
  display: flex;
  width: 50vw;
  border: 2px solid #e7e7e7;
  transition: all 0.3s ease-in;
  background-color: #fff;
  padding: 10px 0;
  border-radius: 5px;
  gap: 10px;

  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
  }

  svg {
    margin-left: 5px;
    color: var(--dark-color);
    font-size: 1rem;
    cursor: pointer;
  }

  &:hover {
    border: 2px solid var(--secondary-color);
  }
`;

export const NavAdd = styled.button`
  background-color: var(--dark-color);
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 10px 15px;
  border-radius: 3px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    filter: brightness(60%);
  }
`;

export const HomeContainer = styled.div`
  height: 100%;
  width: 100%;
  top: 60px;
  position: relative;
`;

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 30px 20px 20px 20px;
  background-color: aliceblue;
  gap: 10px;
`;

export const BookContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
`;

export const BookWrapper = styled.div`
  width: 24%;
  height: fit-content;
  background: #fff;
  display: flex;
  align-items: center;
  padding-top: 5px;
  flex-direction: column;
  gap: 1rem;
  color: var(--dark-color);

  p {
    font-size: 1rem;
    font-weight: 500;
  }

  b {
    font-size: 1.5rem;
  }

  span {
    padding: 0 8px;
  }
`;

export const BookImg = styled.img`
  width: fit-content;
  height: fit-content;
`;

export const BookTitle = styled.h2`
  text-transform: capitalize;
  line-height: 1.5rem;
`;

export const HomeBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;

  svg {
    margin-top: 10px;
    font-size: 1.2rem;
    color: var(--primary-color);
  }
`;    

export const FooterContainer = styled.div`
  height: 280px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 60px;
`;

export const FooterWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

`;

export const TopFooter = styled.div`
  background-color: var(--dark-color);
  height: 40px;
  width: 100%;
  display: flex;
  cursor: pointer;
  align-items: center;
  
  &:hover {
    background-color: #5f6368;
  }
  
  p{
    color: #fff;
    font-size: 12px;
    text-align: center;
    right: 0;
    left: 0;
    z-index: 5;
    position: absolute;
  }
`;

export const BottomFooter = styled.div`
  padding: 20px 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--dark-color);

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BottomFooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    color: #f5f5f5;
    font-weight: 500;
  }

  p {
    color: #d7d7d7;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  background-color: var(--dark-color);
  color: #fff;
  gap: 10px;

  svg {
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const BottomIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--dark-color);
  width: 100%;
  gap: 40px;

  i {
    color: #d7d7d7;
    font-size: small;
    white-space: nowrap;
  }
`;

export const AddBookContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const AddTitle = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const AddForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AddInput = styled.input`
  padding: 10px 0;
  width: 320px;
  border-radius: 2.5px;
  outline: none;
  border: 1px solid #ddd;

  &:hover {
    outline: #5f6368;
  }
`;

export const AddBtn = styled.button`
  padding: 0.5rem 1rem;
  background-color: var(--secondary-color);
  border: none;
  cursor: pointer;
  color: #fff;
  border-radius: 0.2rem;
  font-weight: bolder;
  font-size: 1.05rem;
  transition: 0.3s ease-in-out;

  &:hover {
    opacity: 0.9;
  }
`;

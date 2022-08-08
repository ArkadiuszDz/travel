import styled from 'styled-components';

export const CookieBanner = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.98);
  border: 1px solid #0048ff;

  p {
    margin-right: 20px;
    font-weight: bold;
  }

  button {
    width: 80px;
    padding: 5px 0;
    border-radius: 40px;
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    color: #fff;
    background-color: #0048ff;
    cursor: pointer;
    border: none;
  }
`;
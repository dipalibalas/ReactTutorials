import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteAllUsers } from "../store/slices/UserSlice";

export const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const deleteAllUserData = () => {
    dispatch(deleteAllUsers());
  };

  return (
    <Wrapper>
      <button className="btn clear-btn" onClick={() => deleteAllUserData()}>
        deleteAllUsers
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .clear-btn {
    text-transform: capitalize;
    background-color: #db338a;
    margin-top: 2rem;
  }
`;

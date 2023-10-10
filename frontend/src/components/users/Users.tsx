import { memo, useCallback } from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import createFormData from "../../methods/apis/createFormData";
import { useGetUsersQuery } from "../../api";

type FormData = {
  name: string;
  email: string;
};

const Users = memo(() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    createFormData(data);
  };

  const handleClick = useCallback(() => {
    console.log("初めてのMUI Button");
  }, []);

  const { data = [], isFetching } = useGetUsersQuery();
  console.log(data, isFetching);

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            id="name"
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            {...register("email", { required: "Email is required" })}
            id="email"
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
      <StyledButton>
        <Button variant="contained" color="primary" onClick={handleClick}>
          MUI Button
        </Button>
      </StyledButton>
      <Link to="/">Topに戻る</Link>
    </Wrapper>
  );
});

const StyledButton = styled("div")`
  margin: 20px 0;
`;

const Wrapper = styled("div")`
  text-align: center;
`;

export default Users;

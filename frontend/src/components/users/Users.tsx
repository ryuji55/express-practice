import React, { memo } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

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
    try {
      const response = await axios.post("/users/submit-form", data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
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
  );
});

export default Users;

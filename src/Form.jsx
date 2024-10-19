import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]:event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      userName: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">FullName</label>
      <input
        placeholder="Enter your Name"
        type="text"
        value={formData.fullName}
        id="fullName"
        name="fullName"
        onChange={handleInputChange}
      />
      <br></br><br></br>
      <label htmlFor="userName">Username</label>
      <input
        placeholder="Enter your userName"
        type="text"
        value={formData.userName}
        id="userName"
        name="userName"
        onChange={handleInputChange}
      />
      <br></br><br></br>
      <label htmlFor="password">Password</label>
      <input
        placeholder="Enter your Password"
        type="password"
        value={formData.password}
        id="password"
        name="password"
        onChange={handleInputChange}
      />
      <br></br><br></br>
      <button>submit</button>
    </form>
  );
}

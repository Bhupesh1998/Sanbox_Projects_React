import React, { useState } from "react";

function ReactForm() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
  });

  const handletextChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitform = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    setFormData({
      fname: "",
      lname: "",
    });
  };

  return (
    <div>
      <h1>React Form</h1>
      <div>
        <form
          onSubmit={handleSubmitform}
          style={{ display: "flex", flexDirection: "column", gap: 20 }}
        >
          <input
            type="text"
            name="fname"
            onChange={handletextChange}
            placeholder="Enter Fname"
            value={formData.fname}
          />
          <input
            type="text"
            name="lname"
            onChange={handletextChange}
            placeholder="Enter Lname"
            value={formData.lname}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ReactForm;

import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const Admin = () => {
  const options = [
    { label: "Women" },
    { label: "Men" },
    { label: "Unisex" },
    { label: "Sale" },
    { label: "Summer 22" },
  ];
  const [value, setValue] = React.useState("fruit");
  const [count, setCount] = useState(0);
 
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const Dropdown = ({ label, options, onChange }) => {
    return (
      <label>
        {label}
        <select onChange={onChange} className="btn">
          {options.map((option) => (
            <option>{option.label}</option>
          ))}
        </select>
      </label>
    );
  };

  return (
    <div>
      <fieldset className="d-flex justify-content-center">
        <form method="" class="mx-5 mt-5">
          <legend className="form-group mt-12 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            Create a new Product
          </legend>
          <div class="form-group mt-12 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <label className="admin_label" for="exampleFormControlInput1">Category</label>
            <div>
              <Dropdown
                options={options}
                name="category"
                value={value}
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="form-group mt-12 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <label className="admin_label" for="exampleFormControlTextarea1">Description</label>
            <textarea
              class="form-control mt-3 "
              name="description"
              id="exampleFormControlTextarea1"
              continer="4"
              maxLength={400}
              onChange={(e) => setCount(e.target.value.length)}
            ></textarea>
            <p className="adminCount">{count}</p>
          </div>

          <div class="form-group mt-12 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <label className="admin_label"  for="exampleFormControlSelect1">Picture</label>
            <input
              type="file"
              name="image_url"
              class="form-control mt-3"
              id="exampleFormControlInput1"
              placeholder="https://via.placeholder.com/150x150?text=XXXX"
            />
            <input
              type="text"
              name="image_url"
              class="form-control mt-3"
              id="exampleFormControlInput1"
              placeholder="https://via.placeholder.com/150x150?text=XXXX"
            />
          </div>

          <div class="form-group mt-12 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <label className="admin_label" for="exampleFormControlInput1">Price</label>
            <input
              type="number"
              name="Price"
              class="form-control mt-3"
              id="exampleFormControlInput1"
              placeholder="Price"
/>
          </div>

          <div class="form-group mt-12 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <button class="btn btn-primary ">Save</button>
          </div>
        </form>
      </fieldset>

      {/* ------------------------------------------ */}
      <hr className="hr1"></hr>
      <fieldset className="d-flex justify-content-center">
        <form method="" class="mx-5 mt-5">
          <legend className="form-group mt-12 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            Create a new Category
          </legend>
          <div class="form-group mt-12 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <label for="exampleFormControlSelect1">Name</label>
            <input
              type="text"
              name="name_of_category"
              class="form-control mt-3"
              id="exampleFormControlInput1"
              placeholder="Name of category"
            />
          </div>
          <div class="form-group mt-12 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <label for="exampleFormControlTextarea1">Description</label>
            <textarea
              class="form-control mt-3 "
              name="description"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          <div class="form-group mt-12 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <button class="btn btn-primary ">Save</button>
          </div>
        </form>
      </fieldset>
    </div>
  );
};

export default Admin;

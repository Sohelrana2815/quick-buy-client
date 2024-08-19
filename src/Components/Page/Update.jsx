import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    fetch(`http://localhost:5000/singleCart/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFormData({
          name: data.name || "",
          price: data.price || "",
          description: data.description || "",
        });
        console.log(data);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCart = formData;
    console.log(updatedCart);
    fetch(`http://localhost:5000/updateCart/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCart),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("Cart updated!!!");
        }
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Update now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                className="input input-bordered"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Enter price"
                className="input input-bordered"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Enter description"
                className="input input-bordered"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="Update" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;

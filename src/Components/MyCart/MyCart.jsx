import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Card from "./Card";

const MyCart = () => {
  const { user } = useContext(AuthContext);

  const [myCarts, setMyCarts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myCart/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyCarts(data);
      });
  }, [user]);

  return (
    <div>
      <h2 className="text-center">{myCarts.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myCarts.map((myCart, index) => (
              <Card
                key={myCart._id}
                myCart={myCart}
                myCarts={myCarts}
                setMyCarts={setMyCarts}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;

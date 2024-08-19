import { FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ myCart, myCarts, setMyCarts, index }) => {
  const { name, price, description, _id } = myCart;

  return (
    <tr className="hover">
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{price}</td>
      <td>{description}</td>
      <td>
        <Link to={`/update/${_id}`}>
          <button className="btn">
            <FaPen />
          </button>
        </Link>
      </td>
      <td>
        <button className="btn">
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default Card;

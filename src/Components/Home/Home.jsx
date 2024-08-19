import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const products = useLoaderData();
  console.log(products);

  return (
    <>
      <div className="grid md:grid-cols-2">
        {products.map((product) => (
          <div
            key={product._id}
            className="card card-compact bg-base-100 w-96 shadow-xl"
          >
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p>{product.price}</p>
              <p className="text-lg">{product.description}</p>
              <p className="text-lg">{product?.email}</p>
              <div className="card-actions justify-end">
                <Link to={`/details/${product._id}`}>
                  <button className="btn btn-primary">View details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;

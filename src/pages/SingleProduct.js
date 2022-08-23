import { Link, useParams} from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
	const {productID} = useParams()
	const product = products.find((product)=> product.id === productID)

	const {image, name}= product
  return (
    <section className='section product'>
		
      <h5>single product</h5>
			<img className="image" src={image} alt="po" />

			<p>{name}</p>

		 <Link to='/products'> {`< ` }back to Products</Link>
			
    </section>
  );
};

export default SingleProduct;

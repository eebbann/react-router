import { Link } from "react-router-dom";
import products from "../data";
const Products = () => {
	return (
		<>
			<section className="section">
				<h2>products</h2>
				<div className="products">
					{products.map((product) => {
           let {name,image,id}= product
						return (
							<article key={id}>
							 <img src={image} className="img" alt={name} />
								<h5>{name}</h5>
								<Link to={`/products/${id}`}>more info</Link>
							</article>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default Products;

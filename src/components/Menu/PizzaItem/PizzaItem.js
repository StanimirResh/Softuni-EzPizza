import { Link } from "react-router-dom"

export const PizzaItem = (props) => {
    return (
        <div className="col-lg-3 col-md-6 mb-4 pb-2">
            <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                <div className="bg-primary mt-n5 py-3" style={{ width: 80 }}>
                    <h4 className="font-weight-bold text-white mb-0">{props.pizza.price.toFixed(2)}$</h4>
                </div>
                <div
                    className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3"
                    style={{ width: 150, height: 150 }}
                >
                    <img
                        className="rounded-circle w-100 h-100"
                        src={props.pizza.imageUrl}
                        style={{ objectFit: "cover" }}
                        alt="img"
                    />
                </div>
                <h5 className="font-weight-bold mb-4">{props.pizza.name}</h5>
                <Link to={"/menu/" + props.database + "/" + props.pizza._id} className="btn btn-sm btn-secondary">
                    Order Now
                </Link>
            </div>
        </div>

    )
}
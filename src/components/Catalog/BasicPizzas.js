import { PizzaItem } from "./PizzaItem/PizzaItem"

export const BasicPizzas = () => {
    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="section-title position-relative mb-5">
                            Best Services We Provide For Our Clients
                        </h1>
                    </div>
                    <div className="col-lg-6 mb-5 mb-lg-0 pb-5 pb-lg-0" />
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="owl-carousel service-carousel owl-loaded owl-drag">
                            <div className="owl-stage-outer">
                                <PizzaItem />
                                <PizzaItem />
                                <PizzaItem />
                            </div>
                            <div className="owl-nav">
                                <div className="owl-prev">
                                    <i className="fa fa-angle-left" aria-hidden="true" />
                                </div>
                                <div className="owl-next">
                                    <i className="fa fa-angle-right" aria-hidden="true" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>

    )
}
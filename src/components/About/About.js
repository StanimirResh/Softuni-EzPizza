import { Link } from 'react-router-dom'

export const About = () => {
    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <h1 className="section-title position-relative text-center mb-5">
                            Easy Pizzas Since 2003
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 py-5">
                        <h4 className="font-weight-bold mb-3">About Us</h4>
                        <h5 className="text-muted mb-3">
                            We in
                            <span className="text-secondary"> Ez</span>
                            <span className="text-primary">Pizza </span>
                            try and bring you all kind of different tastes!
                        </h5>
                        <p>
                            It all started in 2003 in Sofia, Bulgaria when Stanimir
                            Reshavski was born, his parents were big pizza lovers and the
                            night after the child came, they decided to celebrate with some Pizza!
                            Thats when they started talking about how people need more types of pizzas
                            and tastes and how they are bored of the same things over and over again.
                            Thats when the idea for EzPizza came to mind! What if we let people just
                            put whatever they want - who cares if there is pineapple or eggplants or chicken
                            or anything really. Everything is yummy on pizza! His parents started experimenting
                            a lot and they started giving the recipes to their neighbours who were amazed by
                            the combinations of flavours. When Stanimir finally got older he decided its time to
                            bless the whole world with that idea and in 2020
                            <span className="text-secondary"> Ez</span>
                            <span className="text-primary">Pizza </span>
                            came to live!

                        </p>
                    </div>
                    <div className="col-lg-4" style={{ minHeight: 400 }}>
                        <div className="position-relative h-100 rounded overflow-hidden">
                            <img
                                alt="img"
                                className="position-absolute w-100 h-100"
                                src="https://www.tasteandtellblog.com/wp-content/uploads/2011/05/Pizza-Cups-tasteandtellblog.com-2-600x900.jpg"
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                    <div className="col-lg-4 py-5">
                        <h4 className="font-weight-bold mb-3">Our Features</h4>
                        <p>
                            In our kitchen we offer you not only Traditional and Delicious pizzas but
                            we give you the option to add your own twist to it!
                            Create your own pizza and share it for everyone to try!

                        </p>
                        <h5 className="text-muted mb-3">
                            <i className="fa fa-check text-secondary mr-3" />
                            Good old traditional pizza recipes
                        </h5>
                        <h5 className="text-muted mb-3">
                            <i className="fa fa-check text-secondary mr-3" />
                            New, funky and never before tried recipes
                        </h5>
                        <h5 className="text-muted mb-3">
                            <i className="fa fa-check text-secondary mr-3" />
                            All cooked with a lot of love and fun
                        </h5>
                        <Link to="/" className="btn btn-primary mt-2">
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}
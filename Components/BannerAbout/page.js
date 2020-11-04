
const Page = ({mapCards}) => {


    const CardsList = mapCards.map((item, index) => {

        return (
            <>
                <div className="card col-md-4 border-0" key={index}>
                    <img className="card-img-top" src={item.Image} alt="mission" />
                    <div className="card-body">
                        <p className="card-title h5">{item.Title}</p>
                        <p className="card-text">{item.Description}</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </>
        )
    })

    return (
        <>
            <div className="container mt-5">
                <div className="">
                    <p className="text-center h1">
                        ABOUT US
                    </p>
                    <p className="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className="card-deck mt-5">
                    {CardsList}
                </div>

            </div>

        </>
    )
}
export default Page;
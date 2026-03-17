

const Card = (props) => {
    return (
            <div className="card">
                <img src={props.img} alt="" />
                <h1>{props.user},{props.age}</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, in molestiae molestias earum dolorum officiis corrupti ipsa excepturi iure a.</p>
                <button className="btn">View Ingrediants</button>
            </div>
    )
}

export default Card

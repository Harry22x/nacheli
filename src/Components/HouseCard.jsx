import './HouseCardStyle.css'
import { Link } from 'react-router-dom'

function HouseCard({price,title,location,bed,bath,size,thumbnail,id,images,description}){
    return(
      <Link to={`houses/${id}`}>
        <div className="box">
      <div className="group">
        <div className="rectangle" />

        <div className="text-wrapper">{title}</div>

        <div className="div">{price}</div>

        <div className="text-wrapper-2">{location}</div>

        <div className="text-wrapper-3"></div>

        <div className="rectangle-2" />

        <div className="text-wrapper-4">
            <p>📐</p>
        </div>

        <div className="text-wrapper-5">{bed} Bed</div>

        <div className="text-wrapper-6">{size}</div>

        <div className="mdi-bed">
          <p>🛏️</p>
        </div>

        <div className="text-wrapper-7">
            <p>🚿</p>
        </div>

        <div className="text-wrapper-8">{bath} Bath</div>

        <div className="fa-solid-bath" />

        <div className="fluent-globe-surface">
          <div className="group-2" />
          
        </div>

        <img className="mask-group" alt="Mask group" src={thumbnail} />
      </div>
    </div>
    </Link>
    )
}

export default HouseCard
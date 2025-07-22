
import PropTypes from 'prop-types';

export default function ProductCard({
    key,img,title,price,desc,onAddToCard,className,disPrice
}){


    return (
        <div>
            <div className="shadow p-4 w-full ">
            <img src={img} alt={title}
            className='w-full h-48 object-cover'
            />
            <h3 className='text-gray-600 font-bold mt-2'>{title}</h3>
            <p> <strong>Price: {price}</strong> <strong> Discount: {disPrice}</strong>  </p>
            <button onClick={onAddToCard}
                className='mt-4 w-full bg-blue-500 text-center py-2 rounded hover:bg-blue-600'
            >
                Add to Cart

            </button>
        </div>
        </div>
    )
}


ProductCard.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    disPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    desc:PropTypes.string,
    onAddToCard: PropTypes.func,
}


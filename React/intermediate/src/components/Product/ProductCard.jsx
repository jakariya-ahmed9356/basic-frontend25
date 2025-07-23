
import PropTypes from 'prop-types';

export default function ProductCard({
    key,img,title,price,desc,onAddToCard,className,disPrice
}){


    return (
        <div className="shadow p-4">
            <img src={img} alt={title}
            className='w-full h-48'
            />
            <h3 className='text-gray-600 font-bold mt-2'>{title}</h3>
            <p> <strong>Price: {price}</strong> <strong> Discount: {disPrice}</strong>  </p>
            <button onClick={onAddToCard}
                className='mt-4 bg-orange-400 hover:bg-orange-500 text-center text-white font-semibold py-2 px-6 rounded-full rounded'
            >
                Add to Cart

            </button>
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


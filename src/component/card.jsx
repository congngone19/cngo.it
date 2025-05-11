function Card(props) {
    return (
        <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img className="w-full object-cover" src={props.product.img} alt="Product Image" />
            <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">{props.product.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{props.product.describe}</p>

                <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold text-orange-500">{props.product.price.toLocaleString('de-DE')}</span>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition duration-200">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
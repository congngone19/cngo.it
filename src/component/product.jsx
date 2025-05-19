import { useEffect, useState } from "react";
import Card from "./card";
import axios from "axios";

function Product() {
    const [productList, setProductList] = useState(
        [
            // {
            //     "title": "Python",
            //     "img": "https://beecrowd.com/wp-content/uploads/2024/04/2022-07-19-Melhores-cursos-de-Python.jpg",
            //     "describe": "Comfortable and stylish sneakers perfect for everyday wear. Available in multiple colors.",
            //     "price": 5000000
            // },
            // {
            //     "title": "Python",
            //     "img": "https://beecrowd.com/wp-content/uploads/2024/04/2022-07-19-Melhores-cursos-de-Python.jpg",
            //     "describe": "Comfortable and stylish sneakers perfect for everyday wear. Available in multiple colors.",
            //     "price": 5000000
            // },
            // {
            //     "title": "Python",
            //     "img": "https://beecrowd.com/wp-content/uploads/2024/04/2022-07-19-Melhores-cursos-de-Python.jpg",
            //     "describe": "Comfortable and stylish sneakers perfect for everyday wear. Available in multiple colors.",
            //     "price": 5000000
            // },
            // {
            //     "title": "Python",
            //     "img": "https://beecrowd.com/wp-content/uploads/2024/04/2022-07-19-Melhores-cursos-de-Python.jpg",
            //     "describe": "Comfortable and stylish sneakers perfect for everyday wear. Available in multiple colors.",
            //     "price": 5000000
            // }
        ]
    )
    useEffect(() => {
        getCourse();
    }, []);
    var getCourse = async function () {
        try {
            var config = {
                method: 'post',
                url: 'https://og-19.online/api/course_v1',
                data: {
                    "action": "getall"
                }
            };
            var response = await axios.request(config);
            var result = JSON.parse(response["data"]["result"]);
            setProductList(result)
        } catch (error) {
            console.error('POST error:', error);
        }
    }
    return (
        <div id="productList" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-10 md:px-20 max-w-6xl px-8 mx-auto xl:px-5">
            {productList.map((p) => <Card product={p} />)}
        </div>
    );
}

export default Product;
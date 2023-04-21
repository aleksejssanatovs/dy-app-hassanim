import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import setDYContext from "../../helpers/dyContext";

const Item = () => {
    const params = useParams();
    const item = useSelector((state) => state.items).filter((item) => Number(item.id) === Number(params.id))[0];
    useEffect(() => {
        setDYContext("PRODUCT", [item.sku]);
    }, []);
    return (
        <div>
            {item.name}
        </div>
    )
}

export default Item;
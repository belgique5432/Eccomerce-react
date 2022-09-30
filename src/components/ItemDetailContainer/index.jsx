import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail";
import { useParams } from 'react-router-dom';


const films = [
    {
        id: 1, price: 120, image: "https://images.wikidexcdn.net/mwuploads/wikidex/a/ae/latest/20191223183253/Cyndaquil_Masters.png", title:"Interestellar", category:"fire"
    },
    {
        id: 2, price: 150, image: "https://images.wikidexcdn.net/mwuploads/wikidex/f/f5/latest/20190824171129/Torchic_Masters.png", title:"Star Trek", category:"water"
    }
]


export const ItemDetailContainer = () => {
    const {detalleId} = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(films);
            })
        }, 3000);
        getData.then(res => setData(res.find (film => film.id === parseInt(detalleId))));
    },[])

    return (
        <ItemDetail data={data}></ItemDetail>
    )
}

export default ItemDetailContainer;
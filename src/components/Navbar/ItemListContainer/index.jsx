import React, {useEffect, useState} from 'react';
import Title from '../../Title';

import ItemList from '../../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const films = [
    {
        id: 1, price:120, image: "https://images.wikidexcdn.net/mwuploads/wikidex/a/ae/latest/20191223183253/Cyndaquil_Masters.png", title:"Interestellar", category:"fire"
    },
    {
        id: 2, price:150, image: "https://images.wikidexcdn.net/mwuploads/wikidex/f/f5/latest/20190824171129/Torchic_Masters.png", title:"Star Trek", category:"water"
    }
]


export const ItemListContainer = () => {

    const [data, setData] = useState([]);
    
    const {categoryId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(films);
            })
        }, 3000);
        if (categoryId) {
            getData.then(res => setData( res.filter(fire => fire.category === categoryId)));
        } else {
            getData.then(res => setData(res));
        }
    },[categoryId])



    return (
        <>
        <Title greeting='Pablo'></Title>
        <ItemList data={data}></ItemList>
        </>
    )
}

export default ItemListContainer 
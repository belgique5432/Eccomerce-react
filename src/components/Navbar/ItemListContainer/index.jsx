import React, {useEffect, useState} from 'react';
import Title from '../../Title';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import ItemList from '../../ItemList/ItemList';
import { useParams } from 'react-router-dom';



export const ItemListContainer = () => {

    const [data, setData] = useState([]);
    
    const {categoryId} = useParams();

    useEffect(() => {
        const querydb = getFirestore()
        const queryCollection = collection(querydb, 'products');

        
        if (categoryId) {
            const queryFilter = query(queryCollection, where('category', '==', categoryId))
            getDocs(queryFilter)
        .then(res => setData(res.docs.map(product =>( {id: product.id, ...product.data()}))))

     } else {
        getDocs(queryCollection)
        .then(res => setData(res.docs.map(product =>( {id: product.id, ...product.data()}))))

     }
     },[categoryId])



    return (
        <div className='Itemlist-container'>
        <Title></Title>
        <ItemList data={data}></ItemList>
        </div>
    )
}

export default ItemListContainer 
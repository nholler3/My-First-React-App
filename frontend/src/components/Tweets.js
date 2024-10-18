import React, {useEffect, useState} from "react";

function Tweets(){
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async() =>{
        const data = await fetch('/Tweets'); //retrieve data
        const items = await data.json(); //set data
        setItems(items); //return data
    };

    return(
        <section>
            {
            items.map(item => (
                <div key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.msg}</p>
                    <p>{item.username}</p>
                </div>
            ))
            }
        </section>
    );
}

export default Tweets;
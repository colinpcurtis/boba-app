import React, {useState, useEffect} from 'react'
import Person from './Person';


const Boba = () => {
    const [items, setItems] = useState(null)

    const getBoba = async () => {
        const r = await fetch(`${process.env.REACT_APP_API_URL}/boba`, {
            method: "GET",
        })
        const json = await r.json()
        console.log(json)
        setItems(json)
    }

    const displayCount = () => {
        if (items !== null) {
            return (
                <div>
                    {Object.keys(items).map((name) => (
                        <Person name={name} count={items[name]} />
                    ))}
                </div>
            )
        }
    }

    // call API on page load
    useEffect(() => {
        getBoba()
    }, [])

    return (
        <div>
            <h1 class="boba">The boba count is:</h1>
           {displayCount()}
        </div>
    )
}

export default Boba;

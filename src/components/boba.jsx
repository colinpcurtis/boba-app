import React, { useState } from 'react'
import Person from './Person';
import { Input, Button } from 'semantic-ui-react'


const Boba = () => {
    const [items, setItems] = useState(null)
    const [server, setServer] = useState("")
    const [error, setError] = useState(null)

    const getBoba = async () => {
        const url = `${process.env.REACT_APP_API_URL}/boba/` + server
        const r = await fetch(url, {
            method: "GET",
        })
        const json = await r.json()
        console.log(json)
        if ("error" in json) {
            setError(json.error)
        }
        else {
            setItems(json)
        }
    }

    const displayCount = () => {
        if (items !== null) {
            return (
                <div>
                    <h1 class="boba">The boba count is:</h1>
                    {Object.keys(items).map((name) => (
                        <Person name={name} count={items[name]} />
                    ))}
                </div>
            )
        }
    }

    const displayError = () => {
        if (error !== null) {
            return (
                <div>
                    <p class="error">{error}</p>
                </div>
            )
        }
    }

    return (
        <div>
            <center>
                <Input focus placeholder={"Search for a server"} value={server} onChange={(e) => setServer(e.target.value)}/>
                <Button primary onClick={getBoba}>Search</Button>
            </center>
            
           {displayCount()}
           {displayError()}
        </div>
    )
}

export default Boba;

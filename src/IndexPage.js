import db from "./firebase"
import { onSnapshot, collection, setDoc, doc, addDoc } from "firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";
import './App.css';

const IndexPage = () => {

    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [error, setError] = useState('');
    const collectionref = collection(db, "songs");

    const handelSubmit = async (e) => {
        e.preventDefault();
        if (genre === '' || name === '') {
            setError("Baka put the song and the genre both");
        } else {
            setError('... AND DONE');
            const payload = { name: name, genre: genre };
            await addDoc(collectionref, payload);
            console.log("Done");
        }




    }

    return (
        <div className='main'>
            <h2 className="title">Yo, Give Your Songs Recommends to Dev Sama</h2>
            <form onSubmit={handelSubmit}>
                <input type="text" placeholder="give them here peasents" className='input-f' onChange={e => setName(e.target.value)}></input>
                <select className='genre-sel' onChange={e => setGenre(e.target.value)}>
                    <option disabled selected>--Genre--</option>
                    <option value="Indie">Indie</option>
                    <option value="Pop">Pop</option>
                    <option value='K-Pop'>K-Pop</option>
                    <option value="Metal">Metal</option>
                    <option value="Sad">Sad</option>
                    <option value="I dont know">I dont know</option>
                </select>
                {error && <div className="error">{error}</div>}
                <input className='submit-btn' type="Submit"></input>
            </form>
            <div className="link">
                <Link to='/songs' style={{ textDecoration: "inherit", color: "blue", }} >Check out what other ppl recommended me</Link>
            </div>
        </div >

    );
}

export default IndexPage;
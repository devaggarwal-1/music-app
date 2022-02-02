import db from "./firebase";
import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

const SongDetails = () => {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db, "songs"), (snap) => {
            setSongs(snap.docs.map(doc => doc.data()));
        })
    }, [])

    return (
        <div>
            <div >
                <h2 className="title-2">all of the reccomendations</h2>
                {songs.map((song) => (
                    <div className="song-det">
                        <p>Song Name : {song.name}</p>
                        <p>Genre : {song.genre}</p>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default SongDetails;
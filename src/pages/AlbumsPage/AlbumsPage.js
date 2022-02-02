import {useEffect, useState} from "react";
import {Outlet, useParams} from "react-router-dom";

import {userService} from "../../services";
import {Album} from "../../components";

const AlbumsPage = () => {
    const [albums, setAlbums] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        userService.getAlbumsById(id).then(value => setAlbums(value))
    }, [id]);

    return (
        <div>
            {albums.map(album => <Album key={album.id} album={album}/>)}
            <Outlet/>
        </div>
    );
};

export {AlbumsPage};
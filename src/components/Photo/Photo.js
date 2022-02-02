import css from "./photo.module.css";

const Photo = ({photo}) => {
    const {id, albumId, title, thumbnailUrl} = photo;
    return (
        <div className={css.Photo}>
            <div>
                <div>{id}</div>
                <div>{albumId}</div>
                <div>{title}</div>
            </div>
            <div>
                <img src={thumbnailUrl} alt={title}/>
            </div>
        </div>
    );
};

export {Photo};
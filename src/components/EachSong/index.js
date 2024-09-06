import './index.css'

const EachSong = props => {
  const {details, onClickdeleteButton} = props
  const {id, duration, genre, imageUrl, name} = details
  const onCLickdelete = () => {
    onClickdeleteButton(id)
  }
  return (
    <li className="eachSongItem">
      <div className="song-details">
        <img src={imageUrl} className="song-image" alt="track" />
        <div className="song-name-and-type">
          <p className="song-name">{name}</p>
          <p className="song-genre">{genre}</p>
        </div>
      </div>
      <div className="song-duration-and-delete">
        <p className="song-duration">{duration}</p>
        <button
          type="button"
          data-testid="delete"
          className="delete-button"
          onClick={onCLickdelete}
        >
          delete
        </button>
      </div>
    </li>
  )
}

export default EachSong

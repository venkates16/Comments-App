// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'



const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

let color = 'color'
let ListItems = props => {
  let {toggleLike, objectItem, deleteItem} = props
  let {name, yourComment, id, isFavorite} = objectItem
  console.log(formatDistanceToNow(new Date()))
  let isActive = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const click = () => {
    toggleLike(id)
  }

  const deleteclick = () => {
    deleteItem(id)
  }
  return (
    <li>
      <div className="nameGroup">
        <div className="orange initalName">
          <p>ch</p>
        </div>
        <h1 className="name">{name}</h1>
        <p className="date">16-4-2000</p>
      </div>

      <p className="commentUser">{yourComment}</p>
      <div className="likeCard">
        <div className="like">
          <div>
            <img id="buttonImg" alt="like" src={isActive} />
          </div>
          <button
            onClick={click}
            className="likedtext"
            className={{isActive} ? color : {undefined}}
          >
            Like
          </button>
        </div>
        <div>
          <button onClick={deleteclick} data-testid="delete">
            <img
              id="buttonImg"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
      <hr className="horizontal" />
    </li>
  )
}

export default ListItems

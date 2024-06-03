import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import ListItems from '../CommentItem'



const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',

  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    dataList: [],
    count: 0,
    name: '',

    yourComment: '',
  }

  submitClick = event => {
    event.preventDefault()
    let {count, name, yourComment} = this.state

    let obj = {
      id: uuidv4(),
      name,
      yourComment,
      isFavorite: false,
    }

    console.log(obj)
    this.setState(previous => {
      return {
        count: previous.count + 1,
        dataList: [...previous.dataList, obj],
        name: '',
        yourComment: '',
      }
    })
  }

  nameChange = event => {
    this.setState({name: event.target.value})
  }

  commentChange = event => {
    this.setState({yourComment: event.target.value})
  }
  toggleLike = props => {
    //console.log(props)

    this.setState(previous => {
      return {
        dataList: previous.dataList.map(each => {
          if (props === each.id) {
            return {...each, isFavorite: !each.isFavorite}
          }
          return each
        }),
      }
    })
  }

  deleteItem = props => {
    //console.log(props)
    this.setState(each => {
      return {
        count: each.count - 1,
        dataList: each.dataList.filter(item => {
          return item.id !== props
        }),
      }
    })
  }

  render() {
    const {count, name, yourComment, dataList} = this.state
    console.log(dataList)
    //    console.log(count)

    return (
      <div className="Outercontainer">
        <div className="container">
          <div>
            <h1 className="comment">Comments</h1>
            <img
              className="screenBlock buttonImg img"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />

            <form className="card" onSubmit={this.submitClick}>
              <p className="aboutTec">Say Something about 4.0 technologys</p>
              <input
                placeholder="Your Name"
                value={name}
                onChange={this.nameChange}
              />
              <textarea
                value={yourComment}
                rows="6"
                cols="6"
                onChange={this.commentChange}
                placeholder="Your Comment"
              ></textarea>

              <div>
                <button className="button1">Add comment</button>
              </div>
            </form>
          </div>
          <img
            className="BlockLeft "
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <hr className="horizontal" />
        <p className="comCount">
          <span className="count">{count}</span>
          Comments
        </p>
        <ul>
          {dataList.map(each => {
            return (
              <ListItems
                objectItem={each}
                toggleLike={this.toggleLike}
                key={each.id}
                deleteItem={this.deleteItem}
                decreseCount={this.decreseCount}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Comments

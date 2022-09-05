// Write your code here.

import {Component} from 'react'

import './index.css'

const plusIcon =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusIcon =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isClicked: false}

  renderAnswerText = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isClicked} = this.state

    if (isClicked) {
      return (
        <div>
          <hr className="horizontal-line" />
          <div>
            <p className="answer-para">{answerText}</p>
          </div>
        </div>
      )
    }
    return null
  }

  onToggleAnswer = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  activeImage = () => {
    const {isClicked} = this.state
    const icons = isClicked ? minusIcon : plusIcon
    const altText = isClicked ? 'minus' : 'plus'

    return (
      <button
        className="icon-button"
        type="button"
        onClick={this.onToggleAnswer}
      >
        <img src={icons} alt={altText} className="plus-minus-icons" />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    return (
      <li className="list-container">
        <div className="image-container">
          <h1 className="ques-head">{questionText}</h1>
          {this.activeImage()}
        </div>
        {this.renderAnswerText()}
      </li>
    )
  }
}
export default FaqItem

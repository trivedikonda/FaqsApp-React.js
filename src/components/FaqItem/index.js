// Write your code here.
import './index.css'
import {Component} from 'react'

class FaqItem extends Component {
  state = {isAnswerResolved: false}

  onClickToggleBtn = () => {
    this.setState(prevState => ({
      isAnswerResolved: !prevState.isAnswerResolved,
    }))
  }

  render() {
    const {faqDetails} = this.props
    const {isAnswerResolved} = this.state
    const {questionText, answerText} = faqDetails
    const iconUrl = isAnswerResolved
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const iconAltTxt = isAnswerResolved ? 'minus' : 'plus'
    return (
      <li className="each-faq">
        <div className="question-and-icon">
          <h1 className="question">{questionText}</h1>
          <button
            type="button"
            className="button"
            onClick={this.onClickToggleBtn}
          >
            <img src={iconUrl} alt={iconAltTxt} />
          </button>
        </div>
        {isAnswerResolved && <hr className="line" />}
        <div>{isAnswerResolved && <p className="answer">{answerText}</p>}</div>
      </li>
    )
  }
}

export default FaqItem

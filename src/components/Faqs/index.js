import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="faqs-bg-container">
      <div className="faqs-bg-card">
        <h1 className="faqs-heading">FAQs</h1>
        <ul className="u-list">
          {faqsList.map(eachList => (
            <FaqItem faqDetails={eachList} key={eachList.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Faqs

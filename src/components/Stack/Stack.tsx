import './Stack.scss'
import {
  CssIcon,
  HtmlIcon,
  JavascriptIcon,
  NextIcon,
  ReactIcon,
  SassIcon,
  TypescriptIcon,
} from '@/assets/icons/Brands'

const Stack = () => {
  return (
    <section className="stack">
      <h3 className="stack__title">/Stack</h3>
      <div className="stack__grid">
        <NextIcon className="stack__grid-icon" />
        <SassIcon className="stack__grid-icon" />
        <TypescriptIcon className="stack__grid-icon" />
        <JavascriptIcon className="stack__grid-icon" />
        <ReactIcon className="stack__grid-icon" />
        <HtmlIcon className="stack__grid-icon" />
        <CssIcon className="stack__grid-icon" />
      </div>
    </section>
  )
}

export default Stack

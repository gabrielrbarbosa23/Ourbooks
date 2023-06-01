import "./button.css"

import { BsArrowUpSquareFill } from 'react-icons/bs';

function ScrollToTopButton() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button onClick={handleClick}>
      <BsArrowUpSquareFill className="icon"/>
    </button>
  );
}

export default ScrollToTopButton;

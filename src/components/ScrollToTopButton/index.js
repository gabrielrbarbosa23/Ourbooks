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
    <div onClick={handleClick}>
      <BsArrowUpSquareFill className="icon"/>
    </div>
  );
}

export default ScrollToTopButton;

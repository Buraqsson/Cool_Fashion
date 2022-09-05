import './SocialMedia.css';
import SocialMediaCard from './SocialMediaCard.jsx';

const SocialMediaMenu = ({ newProducts }) => {


  return (
    <div>
      {/* <h3>Social Media menu</h3> */}
      {/* <SocialMediaCard /> */}
      {newProducts.map(({ title, text }, i) => (
        <SocialMediaCard title={title} text={text} key={i} />
      ))}

      <div className='socialParent'>
        {newProducts.title}

        <div className='div1'>
          <a href='/'>
            <img
              className='imgSocialMedia'
              src='https://via.placeholder.com/290x450?text=Social'
              alt=''
            />
          </a>
        </div>

        <div className='div2'>
          <a href='/'>
            <img
              className='imgSocialMedia'
              src='https://via.placeholder.com/290x450?text=Media'
              alt=''
            />
          </a>
        </div>

        <div className='div3'>
          <a href='/'>
            <img
              className='imgSocialMedia'
              src='https://via.placeholder.com/290x140?text=Images'
              alt=''
            />
          </a>
        </div>

        <div className='div4'>
          <a href='/'>
            <p className='socialText'>Make a statement!</p>
          </a>
        </div>

        <div className='div5'>
          <a href='/'>
            <p className='socialText'>New Customers Gets 20% Off</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaMenu;

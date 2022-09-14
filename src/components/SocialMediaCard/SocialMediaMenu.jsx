import './SocialMedia.css';
import SocialMediaCard from './SocialMediaCard.jsx';

const SocialMediaMenu = () => {
  return (
    <div>
      {/* <h3>Social Media menu</h3> */}
      {/* <SocialMediaCard /> */}

      {/* <SocialMediaCard /> */}
      <h2 className="socialMediaHeader">Follow us on social media @CoolFashion</h2>
      <div className='socialParent'>
        <div className='div1'>
          <a href='/'>
            <div className="polaroid"><img
              className='imgSocialMedia'
              src='https://picsum.photos/id/338/400/500'
              alt=''
            />
            <div className="caption">Happy with my new clothes! <br/> #MakeAStatement</div></div>
          </a>
        </div>

        <div className='div2'>
          <a href='/'>
          <div className="polaroid"><img
              className='imgSocialMedia'
              src='https://picsum.photos/id/342/400/500'
              alt=''
            /><div className="caption">I make a statement for myself <br/> #MakeAStatement</div></div>
          </a>
        </div>

        <div className='div3'>
          <a href='/'>
          <div className="polaroid"><img
              className='imgSocialMedia'
              src='https://picsum.photos/id/604/400/500'
              alt=''
            /><div className="caption">Look at this cool boots <br/> #MakeAStatement</div></div>
          </a>
        </div>

        <div className='div4'>
          <a href='/'>
            <p className='socialText'>Make a statement for yourself! <br/> <small>Tag us on social media with #MakeAStatement</small></p>
          </a>
        </div>

        <div className='div5'>
          <a href='/'>
            <p className='socialText'>New Customers Gets 20% Off! <br /> <small>Sign up on our newsletter and get your discount-code!</small></p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaMenu;

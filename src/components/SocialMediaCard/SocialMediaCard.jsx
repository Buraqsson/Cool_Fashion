const SocialMediaCard = ({ title, text }) => {
  return (
    <div>
      <a href='/'>
        <img src={title} />
        <p>{text}</p>
      </a>
    </div>
  );
};

export default SocialMediaCard;

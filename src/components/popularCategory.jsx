const PopularCategorys = () => {
  const array = [1, 2, 3];
  return (
    <div className="widget">
      <h2 className="widget-title">Popular Categories</h2>
      <div className="link-widget">
        <ul>
          <li>
            <a href="#">
              Fahsion <span>(21)</span>
            </a>
          </li>
          <li>
            <a href="#">
              Lifestyle <span>(15)</span>
            </a>
          </li>
          <li>
            <a href="#">
              Art & Design <span>(31)</span>
            </a>
          </li>
          <li>
            <a href="#">
              Health Beauty <span>(22)</span>
            </a>
          </li>
          <li>
            <a href="#">
              Clothing <span>(66)</span>
            </a>
          </li>
          <li>
            <a href="#">
              Entertaintment <span>(11)</span>
            </a>
          </li>
          <li>
            <a href="#">
              Food & Drink <span>(87)</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PopularCategorys;

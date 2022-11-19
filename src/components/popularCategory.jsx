import Link from "next/link";
const PopularCategorys = () => {
  const array = [1, 2, 3];
  return (
    <div className="widget">
      <h2 className="widget-title">Хуудаснууд</h2>
      <div className="link-widget">
        <ul>
          <li>
            <Link href={`/Энтэртаймент`}>
              <a>
                Энтэртаймент<span>(15)</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href={`/Зөвлөгөө`}>
              <a>
                Зөвлөгөө<span>(15)</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href={`/Технологи`}>
              <a>
                Технологи<span>(15)</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href={`/Дизайн`}>
              <a>
                Дизайн<span>(15)</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href={`/Дэлхий`}>
              <a>
                Дэлхий<span>(15)</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href={`/Спорт`}>
              <a>
                Спорт<span>(15)</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PopularCategorys;

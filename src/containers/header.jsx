import React from "react";
import menu_04 from "../upload/menu_04.jpg";
import logo from "../images/logo.png";
import Link from "next/link";
import TopBar from "./extraHeader";

const Header = () => {
  return (
    <>
      <TopBar />
      <div className="header-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="logo">
                <Link href="/">
                  <img src={logo.src} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="header">
        <div className="container">
          <nav className="navbar navbar-inverse navbar-toggleable-md">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#cloapediamenu"
              aria-controls="cloapediamenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-md-center"
              id="cloapediamenu"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link color-orange-hover">Эхлэл</a>
                  </Link>
                </li>
                <li className="nav-item dropdown has-submenu">
                  <Link href={"/Энтертайнмент"}>
                    <a
                      className="nav-link dropdown-toggle "
                      id="dropdown02"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Энтертайнмент
                    </a>
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="dropdown02">
                    <li>
                      <Link href={"/Энтертайнмент/Дуухөгжим"}>
                        <a className="dropdown-item">
                          Дуу хөгжим
                          <span className="hidden-md-down hidden-sm-down hidden-xs-down">
                            <i className="fa fa-angle-right"></i>
                          </span>
                        </a>
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link href={"/Энтертайнмент/Дуухөгжим/Гадаад"}>
                            <a className="dropdown-item">Гадаад дуу клип</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href={"/Энтертайнмент/Видео"}>
                        <a className="dropdown-item">
                          Видео
                          <span className="hidden-md-down hidden-sm-down hidden-xs-down"></span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/Энтертайнмент/Кино"}>
                        <a className="dropdown-item">Кино ертөнц</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/Энтертайнмент/Сонинхачин"}>
                        <a className="dropdown-item">Сонин хачин</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/Энтертайнмент/Фотозураг"}>
                        <a className="dropdown-item" href="page.html">
                          Фото зураг
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/Энтертайнмент/Тоглоом"}>
                        <a className="dropdown-item" href="page-fullwidth.html">
                          Тоглоом
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/Энтертайнмент/Шоубизнес"}>
                        <a className="dropdown-item">Шоу бизнес</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown has-submenu">
                  <Link href={"/Зөвлөгөө"}>
                    <a
                      className="nav-link dropdown-toggle color-pink-hover"
                      id="dropdown02"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Зөвлөгөө
                    </a>
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="dropdown02">
                    <li>
                      <Link href={"/Зөвлөгөө/Ахуйамьдрал"}>
                        <a className="dropdown-item">Ахуй амьдрал</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/Зөвлөгөө/Гоосайхан"}>
                        <a className="dropdown-item">
                          Гоо сайхан
                          <span className="hidden-md-down hidden-sm-down hidden-xs-down"></span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/Зөвлөгөө/Лайфхак"}>
                        <a className="dropdown-item">Лайф хак</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/Зөвлөгөө/Зурхай"}>
                        <a className="dropdown-item">Зурхай</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/Зөвлөгөө/Сонжоо"}>
                        <a className="dropdown-item" href="page.html">
                          Сонжоо, тест
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/Зөвлөгөө/Бизнес"}>
                        <a className="dropdown-item" href="page-fullwidth.html">
                          Бизнес, мөнгө санхүү
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/Зөвлөгөө/Сэтгэлзүй"}>
                        <a className="dropdown-item">Сэтгэлзүй</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/Зөвлөгөө/Турах"}>
                        <a className="dropdown-item">Турах</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/Зөвлөгөө/Хайр"}>
                        <a className="dropdown-item">Хайр, гэр бүл</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/Зөвлөгөө/Эрүүлмэнд"}>
                        <a className="dropdown-item">Эрүүл мэнд</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown has-submenu">
                  <Link href={"/Технологи"}>
                    <a
                      className="nav-link dropdown-toggle color-red-hover"
                      id="dropdown02"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Технологи
                    </a>
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="dropdown02">
                    <li>
                      <Link href={"/Технологи/Авто"}>
                        <a className="dropdown-item">Авто</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/Технологи/Гаджет"}>
                        <a className="dropdown-item">Гаджет</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/Технологи/Техник"}>
                        <a className="dropdown-item">Техник</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/Технологи/Шинэсанаа"}>
                        <a className="dropdown-item">Шинэ санаа</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown has-submenu">
                  <Link href={"/Хэвмаяг"}>
                    <a
                      className="nav-link dropdown-toggle color-aqua-hover"
                      id="dropdown02"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Хэв маяг
                    </a>
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="dropdown02">
                    <li>
                      <Link href={"/Хэвмаяг/БүтээлчСанаа"}>
                        <a className="dropdown-item">Бүтээлч санаа</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/Хэвмаяг/Загвар"}>
                        <a className="dropdown-item">Загвар</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/Хэвмаяг/Мэдлэг"}>
                        <a className="dropdown-item">Мэдлэг</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/Хэвмаяг/Хоолхүнс"}>
                        <a className="dropdown-item">Хоол хүнс</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/Хэвмаяг/Хүмүүс"}>
                        <a className="dropdown-item">Хүмүүс</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown has-submenu">
                  <Link href={"/Дизайн"}>
                    <a
                      className="nav-link dropdown-toggle color-green-hover"
                      id="dropdown02"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Дизайн
                    </a>
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="dropdown02">
                    <li>
                      <Link href={"/Дизайн/Архтектур"}>
                        <a className="dropdown-item">Архтектур</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/Дизайн/График"}>
                        <a className="dropdown-item">График</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/Дизайн/Дижиталарт"}>
                        <a className="dropdown-item">Дижитал арт</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/Дизайн/Интерьер"}>
                        <a className="dropdown-item">Интерьер</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/Дизайн/Сурталчилгаа"}>
                        <a className="dropdown-item">Сурталчилгаа</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown has-submenu">
                  <Link href={"/Дэлхий"}>
                    <a
                      className="nav-link dropdown-toggle color-yelow-hover"
                      id="dropdown02"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Дэлхий
                    </a>
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="dropdown02">
                    <li>
                      <Link href={"/Дэлхий/Байгаль"}>
                        <a className="dropdown-item">Байгаль</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/Дэлхий/Анамьтад"}>
                        <a className="dropdown-item">Ан амьтад</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/Дэлхий/Түүх"}>
                        <a className="dropdown-item">Түүх</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/Дэлхий/Хүмүүс"}>
                        <a className="dropdown-item">Хүмүүс</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/Дэлхий/Үйлявдал"}>
                        <a className="dropdown-item">Үйл явдал</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link href={"/Спорт"}>
                    <a
                      className="nav-link color-grey-hover"
                      href="blog-category-06.html"
                    >
                      Спорт
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

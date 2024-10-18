"use client";
import { useState, useEffect } from "react";
import css from "./page.module.css";

import Slider from "../components/slider";

export default function Page() {
  const [selectedId, setSelectedId] = useState(null);
  const [isPresentationLayout, setPresentationLayout] = useState(false);
  return (
    <main className={`main container ${css.main}`}>
      <h1>Услуги</h1>
      <div className={css.card_wrapper}>
        {services_data.map((el, i) => {
          return (
            <Card
              props={{
                id: el.id,
                href: `/services/${el.id}`,
                title: el.title,
                img: el.img,
              }}
              fx={{ setSelectedId, setPresentationLayout }}
              key={i}
            />
          );
        })}
      </div>
      {isPresentationLayout && (
        <PresentationLayout
          props={{ id: selectedId }}
          fx={{ setPresentationLayout }}
        />
      )}
    </main>
  );
}

const Card = ({ props, fx }) => {
  return (
    <div
      onClick={() => {
        fx.setSelectedId(props.id);
        fx.setPresentationLayout(true);
      }}
      className={css.card}
    >
      {/* <p className={css.title}>{props.title}</p> */}
      {/* <div className={css.card_logo} /> */}
      <img src={props.img[0].src} alt={"alt"} className={css.img} />
    </div>
  );
};

const PresentationLayout = ({ props, fx }) => {
  return (
    <div className={css.PresentationLayout}>
      <div
        className={css.close}
        onClick={() => {
          fx.setPresentationLayout(false);
        }}
      >
        ✖️
      </div>
      <div className={css.container}>
        {services_data.map((el) => {
          if (props.id == el.id) {
            return (
              <div className={css.slider_wrapper}>
                <Slider slides={el.img} />
              </div>
            );
          }
        })}

        {services_data.map((el) => {
          if (props.id == el.id) {
            return <div className={css.text_wrapper}>{el.text()}</div>;
          }
        })}
        {/* <div>Записаться на консультацию</div> */}
      </div>
    </div>
  );
};

const services_data = [
  {
    id: "1",
    title: "Базовый курс бариста",
    description: "",
    img: [
      {
        src: "/cards/1-1.png",
      },
    ],
    text: () => {
      return (
        <div>
          <h2>Хотите вкусно варить кофе?</h2>
          <h3>Мы проводим базовое обучение бариста, рекомендуем его для:</h3>

          <span>
            🙋Новичкам бариста, которые имеют небольшой опыт в работе с кофе.{" "}
          </span>
          <br />
          <span>
            💁Собственникам кофеен, чтобы глубже понимать все процесс.
          </span>
          <br />
          <span>
            ☕️Кофейням, которые хотят повысить уровень квалификации своих
            сотрудников.
          </span>
          <br />

          <h3>В программу базового курса входит:</h3>
          <br />
          <div>
            <b>1. Работа с кофе:</b>
            <br />
            Настройка помола
            <br />
            Темперовка
            <br />
            Понимание работы пропорций и умение их комбинировать (вход кофе,
            время экстракции, выход эспрессо)
          </div>
          <br />
          <div>
            <b>2. Работа с молоком:</b>
            <br />
            Работа с форсункой (стимером) <br />
            Температурный режим и способ приготовления основных молочных позиций
            кофе (капучино, латте, флэт уайт)
          </div>
          <br />
          <div>
            30 минут теории <br />4 часа практики с теорией в виде домашних
            заданий
            <br />
            <br />
            Есть как индивидуальный занятия, так и в группе.
            <br />
            <br />
            Также возможна отработка отдельных блоков(навыков), обсуждается
            индивидуально.
          </div>
        </div>
      );
    },
  },
  {
    id: "2",
    title: "Суточная аренда",
    img: [
      {
        src: "/cards/2-1.png",
      },
      {
        src: "/cards/2-2.png",
      },
    ],
    text: () => {
      return (
        <>
          <h2>Аренда кофемашин на ваши мероприятия</h2>
          Предоставляем в аренду автоматические кофемашины на ваши мероприятия
          от 1 дня. <br />
          Так же предоставляем полный пакет сопутствующих товаров (молоко, кофе,
          стаканчики…) <br />
          <br />
          Занимаемся организацией кофейной зоны под ключ.
        </>
      );
    },
  },
  {
    id: "3",
    title: "Консультация по ведению кофейного бизнеса",
    img: [
      {
        src: "/cards/3-1.png",
      },
      {
        src: "/cards/3-2.png",
      },
    ],
    text: () => {
      return (
        <>
          <h2>Хотите открыть кофейню, но не знаете с чего начать?</h2>
          <br />
          <b>Мы поможем вам!</b> <br />
          <br />
          <div>
            <b>Наши услуги:</b>
            <br />
            ☕️Составление и разработка кофейной карты, в том числе проработка
            уже действующего меню (ттк+ценообразование).
            <br />
            ☕️Налаживание связей с поставщиками и отладка бизнес процессов.
            <br />
            ☕️Помощь в работе с государственными надзорными органами ( честный
            знак, меркурий).
            <br />
            ☕️Открытие кофейни с нуля (открытие юр. лица, проработка ЦА,
            составление бизнес-план, доведение до полного функционирования
            кофейни- первый чек).
            <br />
            ☕️Поиск, найм и обучение сотрудников.
            <br />
            Стоимость услуг обговаривается индивидуально, есть пакетные
            предложения.
            <br />
            Выезд по Санкт-Петербургу - БЕСПЛАТНО!
          </div>
        </>
      );
    },
  },
  // {
  //   id: "",
  //   title: "test4",
  //   img: {
  //     src: "https://avatars.mds.yandex.net/i?id=6a6e1a9c35db257c79c4a0e4721f6f56_l-6212678-images-thumbs&n=13",
  //   },
  //   text: "",
  // },
];

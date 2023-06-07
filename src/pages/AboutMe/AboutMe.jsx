import React from "react";
import BackBtn from "../../components/BackBtn/BackBtn";

const AboutMe = () => {
  return (
    <>
      <BackBtn />

      <div className="container">
        <h2 className="text-center mb-5">Обо мне</h2>
        <p className="fs-3">
          Меня зовут Бетенов Ербол. Я начинающий Frontend разработчик. 1 год
          назад закончил курсы программирования.На этих курсах я обучился
          основам программирования на JavaScript,также HTML и CSS. Еще на этих
          же курсах получил хорошие знания React фреймворка , Redux ,
          Redux-Saga, Redux-toolkit. После окончания курсов проходил стажировку
          в одной местной компании 2 месяца. <br />
          Очень хочу попасть в крутую , опытную команду разработчиков и получить
          бесценный опыт.
        </p>
      </div>
    </>
  );
};

export default AboutMe;

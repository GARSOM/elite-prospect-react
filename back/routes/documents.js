const express = require("express");
const router = express.Router();

// Заглушка — пока без БД
const documents = [
  {
    id: "22",
    title: "Договор_Управления_Шаблон.",
    url: "https://drive.google.com/file/d/1Y5qaV3he9UCL_jRrjWtiCPpNfLSBytai/view?usp=drive_link"
  },
  {
    id: "21",
    title: "Приложение №2 Перечень и стоимость услуг.",
    url: "https://drive.google.com/file/d/1Y2xeQ6JV-hTb-sH4Dun3vwbB2dSnYT4y/view?usp=drive_link"
  },
  {
    id: "20",
    title: "Собрание собственников помещений в августе 2025г.",
    url: "https://drive.google.com/drive/folders/1AFV5qU65-mt00BGe7ShA-aSjSwkCupnh?usp=drive_link"
  },
  {
    id: "1",
    title: "Отчёт о выполненных работах по техническому обслуживанию и модернизации оборудования МЖК \"Новая Александрия\" за 2020г",
    url: "https://drive.google.com/file/d/18COlGvdDf8zJBN4528PBHuZwAFfRpv5P/view?usp=share_link"
  },
  {
    id: "2",
    title: "Информация о привлечении управляющей организации к административной ответственности за нарушение в сфере управления многоквартирными домами.",
    url: "https://drive.google.com/file/d/1v255XqykXVdTGt67tRH-ai9IPsVaJCej/view?usp=share_link"
  },
  {
    id: "3",
    title: "Элементы благоустройства",
    url: "https://drive.google.com/file/d/1brPavIaHhlSCSYTKTFvF4qiMgAh-lj_n/view?usp=share_link"
  },
  {
    id: "4",
    title: "План-график работ по обслуживанию электрооборудования (г. Сочи, проспект Пушкина, дом №6)",
    url: "https://drive.google.com/file/d/18Oslr2knkyR6herFoOaA6TlF_46Gink4/view?usp=share_link"
  },
  {
    id: "5",
    title: "План-график обслуживания систем теплоснабжения, водоснабжения, вентиляции (г. Сочи, проспект Пушкина, дом №6)",
    url: "https://drive.google.com/file/d/1O4JNqUXUWnm9WNTLN21VUcMXDu0KPWSA/view?usp=share_link"
  },
  {
    id: "6",
    title: "Планируемые работы по косметическому ремонту имущества (г. Сочи, проспект Пушкина, дом №6)",
    url: "https://drive.google.com/file/d/1-raCVmoRhXY07xw2XL2ZNQ98D1HDUA9C/view?usp=share_link"
  },
  {
    id: "7",
    title: "План-график работ по уборке помещений (г. Сочи, проспект Пушкина, дом №6)",
    url: "https://drive.google.com/file/d/1Fmcq8aVqsKMfB9KAIGzhmJYW-67zLKt0/view?usp=share_link"
  }, {
    id: "8",
    title: "Общая характеристика многоквартирного дома",
    url: "https://drive.google.com/file/d/1H2z0u-FPoQEP2b_tpC8n7Pg6N-lY_NtG/view?usp=share_link"
  },
  {
    id: "9",
    title: "Общая информация об управляющей организации",
    url: "https://drive.google.com/file/d/17EQdoSheEaVXZctEL4SvHiSU9pNSio-O/view?usp=share_link"
  },
  {
    id: "10",
    title: "Перечень многоквартирных домов, управление которыми осуществляет управляющая организация",
    url: "https://drive.google.com/file/d/1pJ09c-JUMjQ8atzam9WqU9cq0qlvRAT_/view?usp=share_link"
  },
  {
    id: "11",
    title: "Перечень многоквартирных домов, с расторгнутыми договорами управления",
    url: "https://drive.google.com/file/d/1xjdSNG-zaHevzintn_EmbvST9vkPJU_a/view?usp=share_link"
  },
  {
    id: "12",
    title: "Перечень работ по слаботочным системам",
    url: "https://drive.google.com/file/d/1PcVGUK0cJPD5TvplUHx6Yy80YwvKuQVC/view?usp=share_link"
  },
  {
    id: "13",
    title: "Сведения о многоквартирном доме, управление которым осуществляет управляющая организация",
    url: "https://drive.google.com/file/d/1Pz89URwpQbgjU65XZXeG3adKH0nMVPwL/view?usp=share_link"
  },
  {
    id: "14",
    title: "Сведения об использовании общего имущества в многоквартирном доме",
    url: "https://drive.google.com/file/d/1-zDWsEf9CwJPg41kgbZtZBJ6TGbYt7x-/view?usp=share_link"
  },
  {
    id: "15",
    title: "Сведения об оказываемых коммунальных услугах",
    url: "https://drive.google.com/file/d/1deuPlUwI_FIvK6jkrLG6cU6mlqmDVvue/view?usp=share_link"
  },
  {
    id: "16",
    title: "Сведения о лицензии на осуществление деятельности по управлению многоквартирными домами",
    url: "https://drive.google.com/file/d/12C_P7K-8mrjqtKbvVpl58rv3-3Gb688M/view?usp=share_link"
  },
  {
    id: "17",
    title: "Сведения о выполняемых работах по содержанию и ремонту общего имущества",
    url: "https://drive.google.com/file/d/1yho8Ou91pVZ_wMniJ31YKk2kubIsHfMR/view?usp=share_link"
  },
  {
    id: "18",
    title: "Выполненные работы за 2017 г.",
    url: "https://drive.google.com/file/d/1wv_OztQcxaCJWRCx4IMohYbJuWLP_9zq/view?usp=share_link"
  },
  {
    id: "19",
    title: "Выполненные работы за 2019 г.",
    url: "https://drive.google.com/file/d/1QetE7z9mYoOFIA8CtH8rHp72ZMK1Biq7/view?usp=share_link"
  }
];

router.get("/", (req, res) => {
  res.json(documents);
});

module.exports = router;

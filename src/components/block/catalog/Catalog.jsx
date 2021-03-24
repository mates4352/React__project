import gidro1 from "./../../../assets/images/PageCatalog/Gidro/gidrotsikl1.png";
import gidro2 from "./../../../assets/images/PageCatalog/Gidro/gidrotsikl2.png";
import gidro3 from "./../../../assets/images/PageCatalog/Gidro/gidrotsikl3.png";
import gidro4 from "./../../../assets/images/PageCatalog/Gidro/gidrotsikl4.png";
import gidro5 from "./../../../assets/images/PageCatalog/Gidro/gidrotsikl5.png";
import gidro6 from "./../../../assets/images/PageCatalog/Gidro/gidrotsikl6.png";
import gidro7 from "./../../../assets/images/PageCatalog/Gidro/gidrotsikl7.png";
import gidro8 from "./../../../assets/images/PageCatalog/Gidro/gidrotsikl8.png";
import gidro9 from "./../../../assets/images/PageCatalog/Gidro/gidrotsikl9.png";
import gidro10 from "./../../../assets/images/PageCatalog/Gidro/gidrotsikl10.png";
import gidro11 from "./../../../assets/images/PageCatalog/Gidro/gidrotsikl11.png";
import gidro12 from "./../../../assets/images/PageCatalog/Gidro/gidrotsikl12.png";

import s from "./Catalog.module.scss";

import Card from "./../../common/card/Card";



const Catalog = (props) => {
    return (
        <>
        <div className={s.catalog}>
        <Card
                image={gidro1}
                styleImg={{ width: "250px", height: "190px", marginRight: "0px" }}
                name="Гидроцикл BRP SeaDoo GTI 130hp SE Black\Mango"
                styleName={{ fontSize: "17px" }}
                price="1 049 500 ₽"
                absent=""
                message=""
            />
            <Card
                image={gidro2}
                styleImg={{ width: "250px", height: "190px" }}
                name="Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic"
                styleName={{ fontSize: "17px" }}
                price="1 100 475 ₽"
                absent=""
                message=""
            />
            <Card
                image={gidro3}
                styleImg={{ width: "250px", height: "190px" }}
                name="Гидроцикл BRP SeaDoo GTR 230hp X California green"
                styleName={{ fontSize: "17px" }}
                price="1 323 700 ₽"
                absent=""
                message=""
            />
            <Card
                image={gidro4}
                styleImg={{ width: "250px", height: "190px" }}
                name="Гидроцикл BRP SeaDoo GTR 230hp STD Black / Gulfstream"
                styleName={{ fontSize: "17px" }}
                price=""
                absent="нет в наличии"
                message="сообщить о поступлении"
            />
            <Card
                image={gidro5}
                styleImg={{ width: "250px", height: "190px" }}
                name="Гидроцикл BRP SeaDoo GTX 300hp LTD Liquid Metal "
                styleName={{ fontSize: "17px" }}
                price="1 543 000 ₽"
                absent=""
                message=""
            />
            <Card
                image={gidro6}
                styleImg={{ width: "250px", height: "190px" }}
                name="Гидроцикл BRP SeaDoo Spark 60hp 2 up"
                styleName={{ fontSize: "17px" }}
                price="732 345 ₽"
                absent=""
                message=""
            />
            <Card
                image={gidro7}
                styleImg={{ width: "250px", height: "190px" }}
                name="Гидроцикл BRP SeaDoo Spark GTS 90hp Rental"
                styleName={{ fontSize: "17px" }}
                price="857 666 ₽"
                absent=""
                message=""
            />
            <Card
                image={gidro8}
                styleImg={{ width: "250px", height: "190px" }}
                name="Гидроцикл BRP SeaDoo WAKE 230hp PRO Teal blue"
                styleName={{ fontSize: "17px" }}
                price="1 229 711 ₽"
                absent=""
                message=""
            />
            <Card
                image={gidro9}
                styleImg={{ width: "250px", height: "190px" }}
                name="Гидроцикл Spark 2-UP 900 Ho Ace Chili Pepper"
                styleName={{ fontSize: "17px" }}
                price="587 440 ₽"
                absent=""
                message=""
            />
            <Card
                image={gidro10}
                styleImg={{ width: "250px", height: "190px" }}
                name="Гидроцикл Spark 2-UP 900 Ho Ace Pineapple"
                styleName={{ fontSize: "17px" }}
                price="587 440 ₽"
                absent=""
                message=""
            />
            <Card
                image={gidro11}
                styleImg={{ width: "250px", height: "190px" }}
                name="Гидроцикл BRP Sea-doo Spark 2-UP 900 Ace Vanilla "
                styleName={{ fontSize: "17px" }}
                price=""
                absent="нет в наличии"
                message="сообщить о поступлении"
            />
            <Card
                image={gidro12}
                styleImg={{ width: "250px", height: "190px" }}
                name="Гидроцикл Spark 3-UP 900 HO Ace IBR Blueberry"
                styleName={{ fontSize: "17px" }}
                price=""
                absent="нет в наличии"
                message="сообщить о поступлении"
            />

        </div>
            

        </>
    );
}

export default Catalog;
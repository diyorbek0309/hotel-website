import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";

import StyledHero from "../components/StyledHero";
export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }
  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3> Bunday xona topilmadi...</h3>
          <Link to="/rooms" className="btn-primary">
            Xonalarga qaytish
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    const [main, ...defaultImages] = images;

    return (
      <>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name} xona`}>
            <Link to="/rooms" className="btn-primary">
              Xonalarga qaytish
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Xona haqida...</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Ma'lumot</h3>
              <h6>Narxi: {price} so'm</h6>
              <h6>O'lchami: {size} kv.m</h6>
              <h6>
                Mehmonlar Soni:
                {`${capacity} kishi`}
              </h6>
              <h6>{pets ? "Uy hayvonlari mumkin" : "Uy hayvonlari mumkin emas!"}</h6>
              <h6>{breakfast && "Bepul nonushta beriladi"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Qo'shimcha </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}

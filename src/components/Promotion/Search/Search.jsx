import axios from "axios";
import { useState, useEffect } from "react";

import PromotionList from "../List/List";
import { Link } from "react-router-dom";
import "./Search.css";

const PromotionSearch = () => {
  const [promotions, setPromotions] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const params = {};
    if (search) {
      params.title_like = search;
    }
    axios
      .get("http://localhost:3004/promotions?_embed=comments", { params })
      .then((response) => {
        setPromotions(response.data);
        console.log(search);
      });
  }, [search]);

  return (
    <div>
      <header className="promotion-search_header">
        <h1>Promo Show</h1>
        <Link to="/create">Nova Promoção</Link>
      </header>
      <input
        type="search"
        className="promotion-search_header__input"
        placeholder="Buscar"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />
      <PromotionList promotions={promotions} loading={!promotions.length} />
    </div>
  );
};

export default PromotionSearch;

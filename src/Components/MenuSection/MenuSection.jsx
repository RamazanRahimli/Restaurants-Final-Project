import React, { useEffect, useState } from "react";
import style from "./MenuSection.module.scss";

import axios from "axios";
import { useFormik } from "formik";
import { AiOutlineDelete } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MenuSection = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("https://6686cba783c983911b03a94a.mockapi.io/basket")
      .then((res) => setData(res.data))
      .catch((err) => {
        toast.error("Error fetching data");
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteItem = (id) => {
    axios
      .delete(`https://6686cba783c983911b03a94a.mockapi.io/basket/${id}`)
      .then(() => {
        toast.success("Item deleted successfully");
        getData();
      })
      .catch((err) => {
        toast.error("Error deleting item");
      });
  };

  const addToCart = (item) => {
    axios
      .post(`https://6686cba783c983911b03a94a.mockapi.io/wish`, item)
      .then(() => {
        toast.success("Item added to cart successfully");
      })
      .catch((err) => {
        toast.error("Error adding item to cart");
      });
  };

  const formik = useFormik({
    initialValues: {
      thumbnail: "",
      title: "",
      price: "",
      description: "",
    },

    onSubmit: (values) => {
      axios
        .post(`https://6686cba783c983911b03a94a.mockapi.io/basket`, values)
        .then(() => {
          toast.success("Item added successfully");
          getData();
        })
        .catch((err) => {
          toast.error("Error adding item");
        });
    },
  });
  const sortedDataAZ = () => {
    const sorteddata = [...data].sort((a, b) => a.title.localeCompare(b.title));
    setData(sorteddata);
  };
  const sortedDataZA = () => {
    const sorteddata = [...data].sort((a, b) => b.title.localeCompare(a.title));
    setData(sorteddata);
  };
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (item) => {
    setSearchTerm(item.target.value);
  };

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <section className={style.menu} id="menu">
      <ToastContainer />
      <h1 className={style.heading}>
        {" "}
        OUR <span> MENU </span>
      </h1>
      <div className={style.inputmenu}>
        <input
          type="text"
          placeholder="AXTAR..."
          onChange={handleSearchChange}
        />
        <i className="fas fa-search"></i>
        <div style={{ display: "flex", gap: "3px" }}>
          <select
            onChange={(e) => {
              if (e.target.value === "az") {
                sortedDataAZ();
              } else if (e.target.value === "za") {
                sortedDataZA();
              }
            }}
          >
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
          </select>
        </div>
      </div>
      <div className={style["box-container"]}>
        {data &&
          filteredData.map((item) => (
            <div className={style.box} id="card" key={item.id}>
              <div className={style["box-head"]}>
                <img
                  src={item.thumbnail}
                  className={style.imgs}
                  alt={item.title}
                />
                <p className={style.description}>{item.description}</p>
                <h3 className={style.title}>{item.title}</h3>
                <div className={style.price}>${item.price}</div>
              </div>
              <div className={style["box-bottom"]}>
                <button
                  id="add-btn"
                  className={style.btn}
                  onClick={() => addToCart(item)}
                >
                  add to cart
                </button>
                <button
                  type="button"
                  onClick={() => deleteItem(item.id)}
                  className={style.btne}
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}
        <div className={style.boxa} id="card">
          <div className={style["box-head"]}>
            <div className={style.containerDash}>
              <form onSubmit={formik.handleSubmit}>
                <label htmlFor="thumbnail">Thumbnail</label>
                <input
                  id="thumbnail"
                  name="thumbnail"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.thumbnail}
                />
                <label htmlFor="title">Title</label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.title}
                />
                <label htmlFor="description">Description</label>
                <input
                  id="description"
                  name="description"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                />
                <label htmlFor="price">Price</label>
                <input
                  id="price"
                  name="price"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.price}
                />
                <button type="submit" className={style.btne}>
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;

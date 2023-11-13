import React, { useEffect } from "react";
import { useState } from "react";
const URL =
  "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";

export const UserContext = React.createContext(null);
const fetch_data = async () => {
  {
    const response = await fetch(URL);
    const data = await response.json();
    const prod = data;
    return prod;
  }
};
const products = await fetch_data();

export const Data = ({ children }) => {
  const [catalogue, setCatalogue] = useState(products);
  const [search, setSearch] = useState("");
  const searchHandler = (e) => setSearch(e.target.value);
  const [colorFilterList, setColorFilter] = useState([]);
  const [typefilterList, setTypeFilter] = useState([]);
  const [genderFilterList, setGenderFilter] = useState([]);
  const [priceFilterList, setPriceFilter] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState({});
  const [checkoutitems, setCheckoutitems] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const [selectedNo, setSlecetedNo] = useState(0);

  useEffect(() => {
    let selectedItems = [];
    let price = 0;
    selectedItems = catalogue.filter((item) =>
      selectedProducts.hasOwnProperty(item.id)
    );
    setCheckoutitems(selectedItems);
    price = selectedItems.reduce(
      (accumulator, item) =>
        accumulator + item.price * selectedProducts[item.id],
      0
    );
    setTotalPrice(price);
    let total = Object.values(selectedProducts)?.filter((i) => i !== 0).length;
    setSlecetedNo(total);
  }, [selectedProducts]);

  useEffect(() => {
    if (search === "") {
      setCatalogue(products);
    }
    if (search !== "") {
      let a = products.filter((item) => {
        if (
          search.toLowerCase() === item.name.toLowerCase() ||
          search.toLowerCase() === item.type.toLowerCase() ||
          search.toLowerCase() === item.color.toLowerCase()
        ) {
          return true;
        }
        return false;
      });
      setCatalogue(a);
    }
  }, [search]);

  useEffect(() => {
    if (colorFilterList.length == 0) {
      setCatalogue(products);
    } else {
      let filteredProds = products.filter((item) =>
        colorFilterList.includes(item.color)
      );
      setCatalogue(filteredProds);
    }
  }, [colorFilterList]);

  useEffect(() => {
    if (genderFilterList.length == 0) {
      setCatalogue(products);
    } else {
      let filteredProds = products.filter((item) =>
        genderFilterList.includes(item.gender)
      );
      setCatalogue(filteredProds);
    }
  }, [genderFilterList]);

  useEffect(() => {
    if (typefilterList.length == 0) {
      setCatalogue(products);
    } else {
      let filteredProds = products.filter((item) =>
        typefilterList.includes(item.type)
      );
      setCatalogue(filteredProds);
    }
  }, [typefilterList]);

  useEffect(() => {
    if (priceFilterList.length == 0) {
      setCatalogue(products);
    } else {
      let filteredProds = products.filter((item) => {
        return item.price <= priceFilterList[0];
      });

      setCatalogue(filteredProds);
    }
  }, [priceFilterList]);

  function addProductstoCart(id) {
    setSelectedProducts({
      ...selectedProducts,
      [id.toString()]:
        selectedProducts[id] !== undefined ? selectedProducts[id] + 1 : 1,
    });
  }
  function RemoveProductsFromCart(id) {
    setSelectedProducts({
      ...selectedProducts,
      [id.toString()]: selectedProducts[id] >= 0 ? selectedProducts[id] - 1 : 0,
    });
  }
  function typeFilterHandler(type) {
    let filter = [];

    if (typefilterList.indexOf(type) !== -1) {
      filter = typefilterList.filter((item) => type !== item);
    } else {
      filter = [...typefilterList, type];
    }
    setTypeFilter(filter);
  }

  function genderFilterHandler(gender) {
    let filter = [];
    if (genderFilterList.indexOf(gender) !== -1) {
      filter = genderFilterList.filter((item) => gender !== item);
    } else {
      filter = [...genderFilterList, gender];
    }
    setGenderFilter(filter);
  }

  function priceFilterHandler(price) {
    let filter = [];
    if (priceFilterList.indexOf(price) !== -1) {
      filter = priceFilterList.filter((item) => price !== item);
    } else {
      filter = [...priceFilterList, price];
    }
    filter = filter.sort((a, b) => b - a);
    setPriceFilter(filter);
  }

  function colorFilterHandler(color) {
    let filteredColors = [];
    if (colorFilterList.indexOf(color) !== -1) {
      filteredColors = colorFilterList.filter((item) => color !== item);
    } else {
      filteredColors = [...colorFilterList, color];
    }
    setColorFilter(filteredColors);
  }

  const colorFilter = () => {
    if (!products) {
      return [];
    }

    const colorList = [];
    products.forEach((product) => {
      if (!colorList.includes(product.color)) {
        colorList.push(product.color);
      }
    });
    if (colorFilterList.length == 0) {
      return colorList;
    }
    return colorList;
  };

  // type:
  const typeFilter = () => {
    {
      if (!products) {
        return [];
      }

      const TypeList = [];
      products.forEach((product) => {
        if (!TypeList.includes(product.type)) {
          TypeList.push(product.type);
        }
      });
      return TypeList;
    }
  };

  // priceFilter:
  const priceFilter = () => {
    {
      const PriceList = [];
      products.forEach((product) => {
        if (!PriceList.includes(product.price)) {
          PriceList.push(product.price);
        }
      });
      return PriceList.sort();
    }
  };
  const genderFilter = () => {
    if (!products) {
      return [];
    }

    const genderList = [];
    products.forEach((product) => {
      if (!genderList.includes(product.gender)) {
        genderList.push(product.gender);
      }
    });

    return genderList;
  };

  const colorList = colorFilter();
  const genderList = genderFilter();
  const priceList = priceFilter();
  const typeList = typeFilter();

  return (
    <UserContext.Provider
      value={{
        catalogue,
        colorList,
        genderList,
        priceList,
        typeList,
        search,
        searchHandler,
        colorFilterHandler,
        colorFilterList,
        priceFilterHandler,
        typeFilterHandler,
        typefilterList,
        genderFilterHandler,
        genderFilterList,
        addProductstoCart,
        selectedProducts,
        RemoveProductsFromCart,
        checkoutitems,
        totalPrice,
        selectedNo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

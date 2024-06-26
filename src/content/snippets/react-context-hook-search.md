---
title: "Search"
description: "React Context hook for search values."
pubDate: "Oct 21 2022"
---

```js
import React, { useState, useContext, createContext } from 'react';

const searchContext = createContext();

export function ProvideSearch({ children }) {
  const search = useProvideSearch();
  return (
    <searchContext.Provider value={search}>{children}</searchContext.Provider>
  );
}

export const useSearch = () => {
  return useContext(searchContext);
};

function useProvideSearch() {
  const [search, setSearch] = useState('');

  const onSearch = (e) => {
    e.preventDefault();

    const searchValue = e.target.value;
    const valueWithoutSlash = searchValue.replace('/', '');

    setSearch(valueWithoutSlash);
    return valueWithoutSlash;
  };

  return {
    onSearch,
    search
  };
}
```
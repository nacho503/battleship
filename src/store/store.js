const getState = ({ setStore, getActions, getStore }) => {
  return {
    store: {
      compTarget: [], //valores para x e y
    },
    actions: {
      setCompTarget: (x, y) => {
        // const store = getStore();
        setStore({ compTarget: [x, y] });
      },
    },
  };
};

export default getState;

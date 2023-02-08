const getState = ({ setStore, getActions, getStore }) => {
  return {
    store: {
      compTarget: [], //valores para x e y
      compTargets: [],
    },
    actions: {
      setCompTarget: (x, y) => {
        const store = getStore();
        setStore({ compTarget: [x, y] });
        setStore({ compTargets: [...store.compTargets, [x, y]] });
      },
      filterCompTargets: (x, y) => {
        const store = getStore();
        let targetsArr = store.compTargets;
        let searchCoords = false;
        let xAndY = [x, y];
        for (let i = 0; i <= targetsArr.length - 1; i++) {
          if (targetsArr[i].every((val, index) => val === xAndY[index])) {
            searchCoords = true;
          }
        }
        return searchCoords;
      },
    },
  };
};

export default getState;

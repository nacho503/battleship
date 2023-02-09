const getState = ({ setStore, getActions, getStore }) => {
  return {
    store: {
      compTarget: [],
      compTargets: [],
    },
    actions: {
      setCompTarget: (x, y) => {
        setStore({ compTarget: [x, y] });
      },
      setCompTargets: (x, y) => {
        const store = getStore();
        setStore({ compTargets: [...store.compTargets, [x, y]] });
      },
      filterCompTargets: (x, y) => {
        //True if found x,y on the compTargets array
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

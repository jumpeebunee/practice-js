const obj = {
  getDatabase() {
    console.log("Success");
  },
};

const proxyHandler = {
  get(obj, key, receiver) {
    console.log("GET");
    return Reflect.get(obj, key, receiver);
  },

  set(obj, key, value, receiver) {
    console.log("SET");
    return Reflect.set(obj, key, value, receiver);
  },
};

const p = new Proxy(obj, proxyHandler);
const { proxy, revoke } = Proxy.revocable(p.getDatabase, {});

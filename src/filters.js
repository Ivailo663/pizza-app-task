export const capitalize = {
  name: "capitalize",
  filter: function (value) {
    if (!value) return "";
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
  },
};

export const uppercase = {
  name: "uppercase",
  filter: function (value) {
    return value.toUpperCase();
  },
};

export default { capitalize };

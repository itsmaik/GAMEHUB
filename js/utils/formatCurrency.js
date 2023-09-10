function formatCurrency(value) {
  if (typeof value !== "number") {
    value = parseFloat(value);

    if (isNaN(value)) {
      return "Invalid";
    }
  }

  const formattedCurrency = value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formattedCurrency;
}

export { formatCurrency };

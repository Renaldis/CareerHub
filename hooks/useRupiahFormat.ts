export default function useRupiahFormat() {
  const formatRupiah = (value: number) => {
    if (typeof value !== "number") return "Rp 0";
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  return { formatRupiah };
}

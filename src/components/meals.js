const meals = [
  {
    id: 1,
    name: "Masala Dosa",
    image: "https://imgs.search.brave.com/sRmcd-YzDBqIwESRfFAuq_s1o9ag1G1nPzSEm3EaKm0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4y/LmZvb2R2aXZhLmNv/bS9zdGF0aWMtY29u/dGVudC9mb29kLWlt/YWdlcy9zb3V0aC1p/bmRpYW4tcmVjaXBl/cy9tYXNhbGEtZG9z/YS9tYXNhbGEtZG9z/YS5qcGc",
    category: "South Indian",
    speciality: "Crispy & Spicy",
    description:
      "Masala dosa is a popular Tamil Nadu breakfast dish made from fermented rice batter, filled with spicy potato masala and served with chutney and sambar."
  },
  {
    id: 2,
    name: "Idli",
    image: "https://imgs.search.brave.com/knlR0a3aqtpwwlUDSj33eQNlVUWgx6_LnOQACXmuN1M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zdGVh/bWVkLWlkbGlzLWlk/bHktaWRsaS10b21h/dG8tY29jb251dC1j/aHV0bmV5LWNodXRu/ZXktcG93ZGVyLWRy/aXp6bGUtb2lsLWlt/YWdlLWRpc3BsYXlz/LXBsYXRlLXRyYWRp/dGlvbmFsLTM5MTQ1/MjA0NC5qcGc",
    category: "South Indian",
    speciality: "Soft & Healthy",
    description:
      "Idli is a soft steamed rice cake that is light, nutritious, and commonly served with coconut chutney and hot sambar."
  },
  {
    id: 3,
    name: "Vada",
    image: "https://imgs.search.brave.com/AnXADIQRd-fu--rpMfq2-XIY5_r6cDCakciuzKt3K7U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg0/NzExMjg5OC9waG90/by92YWRhaS1kaXNo/LWluLWJvd2wuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTV1/STk3VXk5djBFX2Ut/WE13V09fUXVvdjJB/MjVNR1Q5bXdhcV9o/U1hpSTQ9",
    category: "South Indian",
    speciality: "Crispy",
    description:
      "Medu vada is a deep-fried snack made from urad dal batter, crispy outside and soft inside, served with chutney."
  },
  {
    id: 4,
    name: "Pongal",
    image: "https://imgs.search.brave.com/p7k1RKMetb2snS6VwEiPBIkmlxP1zVXLweSmAXmtmis/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE4LzQyLzM4Lzgw/LzM2MF9GXzE4NDIz/ODgwNDNfYktFakpD/cXNrbkhKYUVBdUJV/amZtZzNhdlhkNW5H/c0guanBn",
    category: "South Indian",
    speciality: "Comfort Food",
    description:
      "Ven pongal is a traditional Tamil dish made with rice, moong dal, ghee, pepper, and cumin."
  },
  {
    id: 5,
    name: "Sambar Rice",
    image: "https://imgs.search.brave.com/Kc-ZSzxJxoA3PSSCfUzdX01cFMkUwv9to2e5PwN5yAs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0Lzk3LzI3LzMx/LzM2MF9GXzQ5NzI3/MzEyNl9waWtXOFh1/bVdIYklReVF3VTF3/SmtVSUJDUDRHT0xN/UC5qcGc",
    category: "South Indian",
    speciality: "Spicy & Tangy",
    description:
      "Rice mixed with sambar made from lentils and vegetables, giving a rich Tamil Nadu flavor."
  },
  {
    id: 6,
    name: "Curd Rice",
    image: "https://imgs.search.brave.com/GdP6Z056lbaB_n9fG1zazGZCON8QukKveKJHiubIDcI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE0LzM3LzUzLzg1/LzM2MF9GXzE0Mzc1/Mzg1OTlfV2xndDVC/cVBBN2lFNHlyM3di/YnlDVEJWSTlyTnBw/cE4uanBn",
    category: "South Indian",
    speciality: "Cooling",
    description:
      "Curd rice is a simple dish made with rice and yogurt, perfect for cooling the body."
  },
  {
    id: 7,
    name: "Lemon Rice",
    image: "https://imgs.search.brave.com/bXWQUUPy8nfqaX-8uAIE60WqKKpqEsEfoRD3qOSbXEI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTcv/OTQyLzc2NS9zbWFs/bC9hLWJvd2wtb2Yt/cmljZS13aXRoLWxl/bW9uLWFuZC1zcGlj/ZXMtcGhvdG8uanBn",
    category: "South Indian",
    speciality: "Tangy",
    description:
      "Rice flavored with lemon juice, mustard seeds, and curry leaves."
  },
  {
    id: 8,
    name: "Kothu Parotta",
    image: "https://imgs.search.brave.com/-MCSeqcWNYRd89Y19E0trkA8UIut2KNiwV8wMm5ySsw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9jaGlj/a2VuLWtvdGh1LXBh/cm90dGEtY3Vycmll/ZC1zaHJlZGRlZC1p/bmRpYW4tZmxhdGJy/ZWFkLXBvcHVsYXIt/c291dGgtc3RyZWV0/LWZvb2QtbWFkZS1s/YXllcmVkLWJyZWFk/LXBpZWNlcy1tZWF0/LWVnZy0yMjU5Mjcz/NjkuanBn",
    category: "Street Food",
    speciality: "Spicy & Chopped",
    description:
      "Popular street food made by chopping parotta with egg, chicken, and spices."
  },
  {
    id: 9,
    name: "Parotta",
    image: "https://imgs.search.brave.com/Fszky3cUxWWhir7EeJABbmCYPSD3bZvCLMznoRQQUHI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE3LzgxLzc2LzI1/LzM2MF9GXzE3ODE3/NjI1NjRfMENObE4y/Q2JJalR4NlRiOHhV/RUltUnVyaUs2UWpa/MUwuanBn",
    category: "South Indian",
    speciality: "Layered",
    description:
      "Flaky layered flatbread served with kurma or salna."
  },
  {
    id: 10,
    name: "Chettinad Chicken",
    image: "https://imgs.search.brave.com/2U1NjvRIVqanuC665p0dBEPlufWBzbMCQ-Hmw7ZWLJA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90cmlz/aGFza2l0Y2hlbmFs/Y2hlbXkud29yZHBy/ZXNzLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNi8wNS9j/aGV0dGluYWQtY2hp/Y2tlbi0xLmpwZz93/PTEwMDA",
    category: "Non-Veg",
    speciality: "Spicy",
    description:
      "A famous Tamil Nadu dish known for its strong spices and rich flavor."
  }
];

export default meals;
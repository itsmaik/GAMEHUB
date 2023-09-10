const giftCards = [
  {
    giftCardId: "gift-card-10",
    giftCardLabel: "10 dollar gift card",
    giftCardPromoValue: 10,
    giftCardPromoCode: "AAA-AAA",
  },
  {
    giftCardId: "gift-card-10",
    giftCardLabel: "20 dollar gift card",
    giftCardPromoValue: 20,
    giftCardPromoCode: "BBB-BBB",
  },
];

const discounts = [
  {
    discountId: "discount-10",
    discountLabel: "1 dollar discount",
    discountPromoValue: 1,
    discountPromoCode: "111111",
  },
  {
    discountId: "discount-10",
    discountLabel: "3 dollar discount",
    discountPromoValue: 3,
    discountPromoCode: "222222",
  },
];

function findGiftCardByPromoCode(promoCode) {
  for (const giftCard of giftCards) {
    if (giftCard.giftCardPromoCode === promoCode) {
      return giftCard;
    }
  }
  return null;
}

function findDiscountCardByPromoCode(promoCode) {
  for (const discount of discounts) {
    if (discount.discountPromoCode === promoCode) {
      return discount;
    }
  }
  return null;
}

export { findGiftCardByPromoCode, findDiscountCardByPromoCode };

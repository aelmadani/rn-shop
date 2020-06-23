import moment from "moment";

class Order {
  constructor(id, items, totalAmount, date) {
    this.id = id;
    this.items = items;
    this.totalAmount = totalAmount;
    this.date = date;
  }

  get readableDate() {
    moment.locale("dk");
    return moment(this.date).format("DD-MM-YYYY, HH:mm");

    // return this.date.toLocaleDateString("da-DA", {
    //   year: "numeric",
    //   month: "long",
    //   day: "numeric",
    //   hour: "2-digit",
    //   minute: "2-digit",
    // });
  }
}

export default Order;

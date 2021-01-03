import {
  onDemand
} from "../utils/demand";


export default (ctx, inject) => {

  // const script = document.createElement('script')
  // script.src = 'https://www.paypalobjects.com/api/checkout.js'
  // document.getElementsByTagName('head')[0].appendChild(script)
  let credit = "ASKGkdVGEa8CTP5NdHT0xh1mJ41GSW76Tm60rRUT10hTwkOdGseoXyMoeL7HaDhVOqefZcrRlbRe7_ag";

  if (process.client) {
    let loader = new onDemand(
      `https://www.paypal.com/sdk/js?client-id=ASKGkdVGEa8CTP5NdHT0xh1mJ41GSW76Tm60rRUT10hTwkOdGseoXyMoeL7HaDhVOqefZcrRlbRe7_ag&vault=true&disable-funding=card`
    );
    inject('subPaypal', {
      load() {
        loader.load()
      },
      import() {
        return paypal;
      }
    })



    // loader = new onDemand("/js/gg-sdk.js")
    // loader.load()
    // loader = new onDemand('/js/fb-sdk.js')
  }

  // call whatever js the external script needs.
  // initTracker();
}

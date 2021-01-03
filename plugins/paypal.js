import {
  onDemand
} from "../utils/demand";


export default (ctx, inject) => {

  // const script = document.createElement('script')
  // script.src = 'https://www.paypalobjects.com/api/checkout.js'
  // document.getElementsByTagName('head')[0].appendChild(script)
  let credit = "ARW7QdH0Xc9KmPFEPTqjHVKHdHcOdErvGDZQ4DOLVXUgpx3CAzkKgRHc3vOBOt8dqJHFxfJ86zGICxrC";
  if (process.client) {
    let loader = new onDemand(
      `https://www.paypal.com/sdk/js?client-id=${credit}&disable-funding=card`
    );
    inject('paypal', {
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

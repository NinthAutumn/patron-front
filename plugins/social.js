import { onDemand } from "../utils/demand";

export default (ctx, inject) => {
  // const script = document.createElement('script')
  // script.src = 'https://www.paypalobjects.com/api/checkout.js'
  // document.getElementsByTagName('head')[0].appendChild(script)
  let credit =
    "ARW7QdH0Xc9KmPFEPTqjHVKHdHcOdErvGDZQ4DOLVXUgpx3CAzkKgRHc3vOBOt8dqJHFxfJ86zGICxrC";
  console.log("first");
  if (process.client) {
    let google = new onDemand("/js/gg-sdk.js");
    inject("social", {
      load() {
        google.load();
      },
    });

    // loader = new onDemand("/js/gg-sdk.js")
    // loader.load()
    // loader = new onDemand('/js/fb-sdk.js')
  }

  // call whatever js the external script needs.
  // initTracker();
};

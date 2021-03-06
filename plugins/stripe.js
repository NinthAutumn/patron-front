import {
  onDemand
} from "../utils/demand";


export default (ctx, inject) => {

  // const script = document.createElement('script')
  // script.src = 'https://www.paypalobjects.com/api/checkout.js'
  // document.getElementsByTagName('head')[0].appendChild(script)
  if (process.client) {
    let loader = new onDemand(
      "https://js.stripe.com/v3/"
    );
    inject('stripe', {
      load() {
        loader.load();
      },
      import() {
        return Stripe("pk_live_51HWLZfA8AAltUTTdTjK3oLqphLd2FXB3SHzuSEcvmSquXgyPUwXedVHPwbNkpFh1rBUZCCARVkvmVIgp2UCQOYnU008p44DeDu")
      }
    })
    // loader = new onDemand("/js/gg-sdk.js")
    // loader.load()
    // loader = new onDemand('/js/fb-sdk.js')
  }

  // call whatever js the external script needs.
  // initTracker();
}

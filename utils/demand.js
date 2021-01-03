export class onDemand {
  // src - the full url to load
  // waitForPageLoad - still wait for the page load event on first hit
  constructor(src, bottom = false, waitForPageLoad = true) {
    this.isLoaded = false;
    this.isLoading = false;
    this.callbacks = [];
    this.src = src;
    this.waitForPageLoad = waitForPageLoad;
    this.bottom = bottom;
  }
  load(callback = () => {}) {
    if (this.isLoaded) return callback();

    this.callbacks.push(callback);

    if (!this.isLoading) {
      this.isLoading = true;
      if (!this.waitForPageLoad || document.readyState === "complete")
        this._loadScript();
      else window.addEventListener("load", () => this._loadScript());
    }
  }

  _loadScript() {
    const script = document.createElement("script");
    script.src = this.src;
    script.onload = () => this._invokeCallbacks();
    this.bottom ? document.getElementsByTagName("Body")[document.getElementsByTagName("Body").length - 1].appendChild(script) : document.getElementsByTagName("head")[0].appendChild(script);
  }

  _invokeCallbacks() {
    this.isLoaded = true;
    this.callbacks.forEach(callback => callback());
  }
}

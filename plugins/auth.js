export default async function ({ $storage, store, $http, redirect, route }) {
  let track_id, token, refresh, strategy;
  refresh = $storage.getCookie("refresh_token");
  if (refresh && refresh != "undefined") {
    try {
      $http.setToken($storage.getCookie("access_token"), "Bearer");
      await store.dispatch("auth/refreshToken");
      if (process.client && refresh && refresh != "undefined") {
        await store.dispatch("auth/intervalRefresh");
      }
      if (route.query.token) {
      } else if (!store.getters["auth/getAuth"].onboarded) {
        redirect("/user/onboarding");
      }
    } catch (error) {
      await store.dispatch("auth/logout");
    }
  } else {
  }
}

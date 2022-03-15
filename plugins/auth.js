export default async function ({ $storage, store, $http, redirect, route }) {
  if ($storage.getCookie("access_token")) {
    $http.setToken($storage.getCookie("access_token"), "Bearer");
    await store.dispatch("auth/refreshToken");
    if (route.query.token) {
    } else if (!store.getters["auth/getAuth"].onboarded) {
      redirect("/user/onboarding");
    }
  }
}

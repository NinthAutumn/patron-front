export default function ({
  $storage,
  store,
  $http
}) {
  if ($storage.getCookie('Authorization')) {
    this.$http.setToken($storage.getCookie("Authorization"), 'Bearer')
    await store.dispatch('auth/refreshToken');
  }
}

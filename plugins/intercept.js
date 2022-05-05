export default function ({ $http, $toast, store }) {
  $http.onRequest((config) => {
    console.log("Making request to " + config.url);
  });

  $http.onRetry(async ({ request, options, error, retryCount }) => {
    // const token = await ky('https://example.com/refresh-token')
    // $http.setToken($storage.getCookie("access_token"), "Bearer");
    const { token } = await store.dispatch("auth/refreshToken");
    options.header.set("Authorization", `Bearer ${token.access_token}`);
  });

  $http.onError((error) => {
    if (error.statusCode === 500) {
      alert("Request Error!");
    }
    if (error.statusCode === 401) {
      error.response = {
        data: {
          error: "貴方はこの行為の権限がありません",
        },
      };
      return Promise.reject(error);
    }
    // Tip: error.response will be undefined if the connection dropped to the server
    // Tip: You can use error.response.data to get response message
    // Tip: You can return an object or Promise as fallback response to avoid rejection
  });
}

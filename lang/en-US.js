export default async (context, locale) => {
  return await Promise.resolve({
    home: {
      header: "Fund your own passion・hobby!",
      slogan:
        "Get your passionate fans to support your cause in new ways by paying monthly, yearly, or even throwaway money!",
      slogan_long: ` Get enthusiastic fans to support your cause in a new way with monthly, yearly, or throwaway money! Our service fee is <strong
      class="color color--error"
    >0% all the time</strong>  , 
      and withdrawals are always free. Subscriptions are available at the industry's lowest service fee of 3%.
      `,
      how_to_start: "How to Get Started",
      get_started: "Get Started With Onjin",
      find_creator: "Find Your Favourite Creator",
      create_account: "Create an Account",
      create_account_desc:
        "You can easily create an account for free at any time, and it takes about five minutes.",
      connect_service: "Connect your Payment Service account",
      connect_service_desc: `After creating an account, select a payment service and connect your account. The payment services currently supported by Onjin are <strong class='color color--success'>PayPal</strong> and <strong class='color color--success'>Stripe</strong>.`,
      link_page: "Share the page link and you're done!",
      link_page_desc:
        "Share the page address you chose when you created your account with your fans, viewers, and supporters.",
    },
    form: {
      search_placeholder: "Search Creator",
      username: "Username",
      credentials: "Email・username",
      password: "Password",
      email: "Email",
      password_confirmation: "Confirm Password",
      password_confirmation_placeholder: "Confirm Your Password",
      male: "Male",
      female: "Female",
      others: "Others",
      about_me: "About Me",
      about_me_placeholder: "Anything about me, eg, Hobby, What You do etc..",
      gender: "Gender",
      upload_avatar: "Upload Avatar",
      change_avatar: "Change Avatar",
    },
    notification: {
      login_success: "Successfully Logged In",
      internal_error: "Internal Server Error, Please contact support for help",
      register_success: "Successfully Created an Account",
    },
    onboarding: {
      at_onjin: "At Onjin...",
      to_support: "To Support Creators",
      to_get_support: "To Get Support As Creator",
      skip: "Skip This Step ",
      profile_setting: "Profile Setting",
      save_setting: "Save Setting",
      project_setting: "Project Setting",
    },
    basic: {
      create_using_email: "Create Using Email",
      google: "Google",
      twitter: "Twitter",
      line: "Line",
      facebook: "Facebook",
      create_account: "Create an Account",
      login: "Login",
      register: "Register",
      forgotten_password: "Forgotten Password",
      read_more: "Read More",
      start: "Claim",
      creator: "Creator",
      subscription: "Subscription",
      shop: "Shop",
      store: "Shop",
      donation: "Donation",
      all_subscription: "Monthly・Yearly subscription",
      search: "Search",
    },
  });
};

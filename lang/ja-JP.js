export default async (context, locale) => {
  return await Promise.resolve({
    home: {
      header: "自分の情熱・趣味に資金を供給しよう！",
      slogan:
        "熱中的ファンたちに月・年額・投げ銭であなたの活動を新たな方法でサポートを貰おう！",
      slogan_long: ` 熱狂的ファンたちに月額・年額・投げ銭であなたの活動を新たな方法でサポートを貰おう！
        投げ銭で資金・支援集めにおいて当社のサービス料金は
        <strong
          class="color color--error"
        >ずっと0%</strong> そして、いつでも無料で引出し可能。サブスクリプションは業界最安サービス料金3%から利用が可能です。`,
      how_to_start: "オンジンのはじめ方",
      get_started: "オンジンを始める",
      find_creator: "好きなクリエーターを見つける",
      create_account: "アカウントを作る",
      create_account_desc:
        "アカウントは簡単にいつでも無料で作ることができ、５分程で作ることができます。",
      connect_service: "決済サービスアカウントを繋げる",
      connect_service_desc: `アカウント作成後、決済サービスを選択し自分のアカウントを繋げます。現在オンジンでサポートされている決済サービスは<strong class='color color--success'>ペイパル</strong>と<strong class='color color--success'>ストライプ</strong>です。`,
      link_page: "ページリンクをシェアして完了",
      link_page_desc:
        "アカウント作成時に選んだページアドレスを自分のファン・視聴者・サポーターにシェアする。",
    },
    form: {
      search_placeholder: "クリエーターを検索",
      username: "ユーザー名",
      email: "Eメール",
      credentials: "Eメール・ユーザー名",
      password: "パスワード",
      confirm_password: "パスワードを確認",
      confirm_password_placeholder: "パスワードをもう一度",
      male: "男性",
      female: "女性",
      Others: "その他",
      about_me: "自分について",
      about_me_placeholder: "自分についてなんでも。。。",
      gender: "性別",
    },
    notification: {
      login_success: "ログインに成功しました",
      register_success: "アカウント作成に成功しました",
      internal_error: "サーバーで問題がありました",
      upload_avatar: "アバターを投稿",
      change_avatar: "アバター変更",
    },
    onboarding: {
      at_onjin: "オンジんで。。。",
      to_support: "支援をする",
      to_get_support: "支援をしてもらう",
      skip: "このステップをスキップする",
      profile_setting: "プロファイル設定",
      save_setting: "設定をセーブする",
      project_setting: "プロジェクトの設定",
    },
    basic: {
      create_using_email: "Eメールで作る",
      google: "グーグル",
      twitter: "ツイッター",
      line: "ライン",
      facebook: "フェースブック",
      create_account: "アカウントを作成",
      login: "ログインする",
      register: "アカウントを作成",
      forgotten_password: "パスワードを忘れた",
      read_more: "詳細を見る",
      start: "始める",
      home: "ホーム",
      submit: "投稿",
      search: "検索",
      notification: "通知",
      username: "ユーザー名",
      creator: "クリエーター",
      subscription: "サブスク",
      shop: "ショップ",
      donation: "投げ銭",
      all_subscription: "年・月間会員制サブスク",
      search: "検索",
    },
  });
};

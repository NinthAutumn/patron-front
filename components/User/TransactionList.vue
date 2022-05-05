<template>
  <table class="transaction-list">
    <thead>
      <tr>
        <th class="transaction-list__col transaction-list__col--id">ID</th>
        <th>Target</th>
        <th>Amount</th>
        <th>Type</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="transaction of transactions"
        :key="transaction.id"
      >
        <td
          class="transaction-list__col transaction-list__col--id"
        >{{transaction.id}}</td>
        <td>{{transaction.project.name}}</td>
        <td>${{transaction.amount}}</td>
        <td>{{transaction.type}}</td>
        <td>{{$dateFns.format(new Date(transaction.created_at))}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data: () => ({
    transactions: [],
    page: 1,
    limit: 25,
  }),
  async created() {
    this.transactions = await this.$http.$get(
      `/v1/transactions/user/history?page=${this.page}&limit=${this.limit}`
    );
  },
  methods: {
    async infiniteHandler() {},
  },
};
</script>

<style lang="scss">
.transaction-list {
  &__col {
    &--id {
      @media screen and (max-width: 492px) {
        display: none;
      }
    }
  }
}
table {
  width: 100%;
  height: 100%;
  background: var(--light-primary);
  border-radius: 0.5rem;
}
th,
td {
  @media screen and (min-width: 492px) {
    padding: 1rem;
  }
  text-align: center;
}
td {
  fotn-size: 1.4rem;
  @media screen and (min-width: 492px) {
    font-size: 1.6rem;
  }
}
</style>

<template>
  <div>
    <div>
      <div id="filter-container">
        <label>Start month:
          <input type="datetime" v-mask="'####/##'" placeholder="YYYY/MM" v-model="startMonth" required>
        </label>
        <label id="filter-end-month">End month:
          <input type="datetime" v-mask="'####/##'" placeholder="YYYY/MM" v-model="endMonth" required>
        </label>
        <button id="filter-button" @click="getTransactionsByDateRange(startMonth, endMonth)">Filter</button>
      </div>
      <table align="center" border="1">
        <thead>
          <tr>
            <th>#</th>
            <th>Account</th>
            <th>Description</th>
            <th>Category</th>
            <th>Reference</th>
            <th>Currency</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Transaction Date</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="transaction of transactions" :key="transaction.id">
            <router-link :to="{ name: 'details', params: { transaction:  transaction.id } }">
              <td>Details</td>
            </router-link>
            <td>{{ transaction.account }}</td>
            <td>{{ transaction.description }}</td>
            <td>{{ transaction.category }}</td>
            <td>{{ transaction.reference }}</td>
            <td>{{ transaction.currency }}</td>
            <td>{{ transaction.amount }}</td>
            <td>{{ transaction.status }}</td>
            <td>{{ transaction.transactionDate }}</td>
            <td>{{ transaction.createdAt }}</td>
            <td>{{ transaction.updatedAt }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
	name: "TransactionsList",
	methods: {
		getAllTransactions() {
			this.$apollo.query({
				query: gql` query {
          getAllTransactions {
            id,
            account,
            description,
            category,
            reference,
            currency,
            amount,
            status,
            transactionDate,
            createdAt,
            updatedAt
          }
        }`
			}).then(response => {
				const query = response.data;
				this.transactions = query.getAllTransactions;
			});
		},
		getTransactionsByDateRange(startMonth, endMonth) {
			this.$apollo.query({
				query: gql` query {
          getTransactionsByDateRange(startMonth: "${startMonth}", endMonth: "${endMonth}") {
            id,
            account,
            description,
            category,
            reference,
            currency,
            amount,
            status,
            transactionDate,
            createdAt,
            updatedAt
          }
        }`
			}).then(response => {
				const query = response.data;
				this.transactions = query.getTransactionsByDateRange;
			});
		}
	},
	data() {
		return {
			startMonth: "",
			endMonth: "",
			transactions: []
		};
	},
	mounted() {
		this.getAllTransactions();
	}
};
</script>
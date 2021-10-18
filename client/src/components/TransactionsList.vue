<template>
  <div>
    <div>
      <div id="filter-container">
        <label>Start month:
          <select v-model="startMonth" required>
            <option value="2020-01-01T00:00:00.000Z">January/2020</option>
            <option value="2020-02-01T00:00:00.000Z">February/2020</option>
            <option value="2020-03-01T00:00:00.000Z">March/2020</option>
            <option value="2020-04-01T00:00:00.000Z">April/2020</option>
            <option value="2020-05-01T00:00:00.000Z">May/2020</option>
            <option value="2020-06-01T00:00:00.000Z">June/2020</option>
            <option value="2020-07-01T00:00:00.000Z">July/2020</option>
            <option value="2020-08-01T00:00:00.000Z">August/2020</option>
            <option value="2020-09-01T00:00:00.000Z">September/2020</option>
            <option value="2020-10-01T00:00:00.000Z">October/2020</option>
            <option value="2020-11-01T00:00:00.000Z">November/2020</option>
            <option value="2020-12-01T00:00:00.000Z">December/2020</option>
          </select>
        </label>
        <label id="filter-end-month">End month:
          <select v-model="endMonth" required>
            <option value="2021-01-31T23:59:59.000Z">January/2021</option>
            <option value="2021-02-28T23:59:59.000Z">February/2021</option>
            <option value="2021-03-31T23:59:59.000Z">March/2021</option>
            <option value="2021-04-30T23:59:59.000Z">April/2021</option>
            <option value="2021-05-31T23:59:59.000Z">May/2021</option>
            <option value="2021-06-30T23:59:59.000Z">June/2021</option>
            <option value="2021-07-31T23:59:59.000Z">July/2021</option>
            <option value="2021-08-31T23:59:59.000Z">August/2021</option>
            <option value="2021-09-30T23:59:59.000Z">September/2021</option>
            <option value="2021-10-31T23:59:59.000Z">October/2021</option>
            <option value="2021-11-30T23:59:59.000Z">November/2021</option>
            <option value="2021-12-31T23:59:59.000Z">December/2021</option>
          </select>
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
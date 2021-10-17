<template>
  <div>
    <div>
      <div>
        <label>Start month:
          <select v-model="startMonth" required>
            <option value="2021-01-06T09:08:55.000Z">January</option>
            <option value="february">February</option>
            <option value="march">March</option>
            <option value="april">April</option>
            <option value="may">May</option>
            <option value="june">June</option>
            <option value="july">July</option>
            <option value="august">August</option>
            <option value="september">September</option>
            <option value="october">October</option>
            <option value="november">November</option>
            <option value="december">December</option>
          </select>
        </label>
        <label>End month:
          <select v-model="endMonth" required>
            <option value="january">January</option>
            <option value="2021-02-19T08:26:29.000Z">February</option>
            <option value="march">March</option>
            <option value="april">April</option>
            <option value="may">May</option>
            <option value="june">June</option>
            <option value="july">July</option>
            <option value="august">August</option>
            <option value="september">September</option>
            <option value="october">October</option>
            <option value="november">November</option>
            <option value="december">December</option>
          </select>
        </label>
        <button @click="getTransactionsByDateRange(startMonth, endMonth)">Filter</button>
      </div>
      <table width="80%" border="1" align="center">
        <thead>
          <tr>
            <th>#</th>
            <th>account</th>
            <th>description</th>
            <th>category</th>
            <th>reference</th>
            <th>currency</th>
            <th>amount</th>
            <th>status</th>
            <th>transactionDate</th>
            <th>createdAt</th>
            <th>updatedAt</th>
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
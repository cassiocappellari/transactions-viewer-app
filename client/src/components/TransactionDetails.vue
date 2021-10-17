<template>
  <div>
    <div>
      <router-link :to="{ name: 'list' }">Back</router-link>
      <table width="80%" border="1" align="center">
        <thead>
          <tr>
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
          <tr>
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
	name: "TransactionDetails",
	methods: {
		getTransactionById(transactionId) {
			this.$apollo.query({
				query: gql` query {
          getTransactionById(id: "${transactionId}") {
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
				this.transaction = query.getTransactionById;
			});
		}
	},
	data() {
		return {
			transactionParam: this.$route.params.transaction,
			transaction: {}
		};
	},
	mounted() {
		this.getTransactionById(this.transactionParam);
	},
};
</script>
<template>
  <div>
    <h1>Transactions List</h1>
    <TransactionsList />
  </div>
</template>

<script>
import TransactionsList from "../components/TransactionsList.vue";

export default {
	name: "List",
	components: {
		TransactionsList
	}
};
</script>
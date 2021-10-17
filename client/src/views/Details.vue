<template>
  <div>
    <h1>Transaction Details</h1>
    <TransactionDetails />
  </div>
</template>

<script>
import TransactionDetails from "./../components/TransactionDetails.vue";

export default {
	name: "Details",
	components: {
		TransactionDetails
	}
};
</script>
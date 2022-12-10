<script setup>
    const { data: reviewers } = await useFetch('https://randomuser.me/api/?results=3')
</script>

<template>
    <div>
        <div v-if="reviewers.results">
            <ReviewCard
                v-for="reviewer in reviewers.results"
                :key="reviewer.login.uuid"
                :review="reviewer"
            />
        </div>
    </div>
</template>
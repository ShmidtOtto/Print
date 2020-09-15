<template>
    <div class="footer-container">
        <p>{{ CompCompaniSiteAddress }}</p>
        <p>{{ CompanyName }}</p>
        <p>Email: {{ CompanyEmailAddress }}</p>
    </div>
</template>


<script>
    export default {
        name: "Footer",
        data: () => {
            return {
                CompanyName: "Print",
                CompaniSiteAddress: "Print.org",
                CompanyEmailAddress: "shmidt_o@inbox.ru"
            }
        }
    }
</script>

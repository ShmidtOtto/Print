<template>
    <v-app>
        <v-navigation-drawer app>
            <SideBar></SideBar>
        </v-navigation-drawer>
        <v-app-bar app>
        </v-app-bar>
        <v-main>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-main>
        <v-footer dark padless app>
            <Footer></Footer>
        </v-footer>
    </v-app>
</template>

<script>
    import Footer from "../components/Footer.vue";
    import SideBar from "../components/AdminSideBar.vue";
    export default {
        components: {
            Footer,
            SideBar
        }
    }
</script>

<template>
    <v-app>
        <v-system-bar app dark>
            <MonitoringPanel></MonitoringPanel>
        </v-system-bar>
        <v-navigation-drawer app dark permanent>
            <SideBar></SideBar>
        </v-navigation-drawer>
        <v-app-bar app dark>
            <TopBar></TopBar>
        </v-app-bar>
        <v-main app>
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
    import MonitoringPanel from "../components/AdminMonitoringPanel.vue";
    import Footer from "../components/Footer.vue";
    import SideBar from "../components/AdminSideBar.vue";
    import TopBar from "../components/AdminTopBar.vue"
    export default {
        components: {
            Footer,
            SideBar,
            MonitoringPanel,
            TopBar
        }
    }
</script>

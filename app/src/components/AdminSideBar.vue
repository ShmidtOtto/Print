<template>
    <div>
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title>
                    Панель управления
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list>
            <v-list-item v-for="item in items" :key="item.text" link>
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-content>
                        {{ item.title }}
                    </v-list-item-content>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </div>
</template>

<script>
    export default {
        data: () => {
            return {
                items: [{
                        title: "Пользователи",
                        icon: "mdi-account-multiple"
                    },
                    {
                        title: "Редактировать пользователя",
                        icon: "mdi-account-arrow-right"
                    },
                    {
                        title: "О системе",
                        icon: "mdi-help-box"
                    },
                ],
            }
        }
    }
</script>

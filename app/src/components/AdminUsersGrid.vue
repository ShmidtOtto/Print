<template>
    <div>
        <v-data-table v-model="selected" :headers="headers" :items="desserts" :single-select="singleSelect" item-key="name" show-select class="elevation-1">
            <template v-slot:top>
                <v-switch v-model="singleSelect" label="Single select" class="pa-3"></v-switch>
            </template>
        </v-data-table>
    </div>
</template>


<script>
    import axios from "axios";
    export default {
        data: () => {
            return {
                singleSelect: false,
                selected: [],
                headers: [{
                        text: "Dessert (100g serving)",
                        align: "start",
                        sortable: false,
                        value: "name",
                    },
                    {
                        text: "Имя пользователя",
                        value: "name"
                    },
                    {
                        text: "Email",
                        value: "email"
                    },
                    {
                        text: "Пароль",
                        value: "password"
                    },
                    {
                        text: "Логи",
                        value: "logIn"
                    },
                ],
                desserts: [{
                    name: "Frozen Yogurt",
                    email: 159,
                    password: 6.0,
                    logIn: 24
                }],
            }
        },
        mounted() {
            axios.get("http://localhost:3000/users", {
                "Access-Control-Allow-Origin": "*"
            }).then(response => {
                for (let i = 0, length = response.data.length; i < length; i++) {
                    let el = response.data[i];
                    let newdesserts = new Object;
                    newdesserts.name = el.UserName;
                    newdesserts.email = el.Email;
                    newdesserts.password = el.Password;
                    newdesserts.logIn = el.Login;
                    this.desserts.push(newdesserts);
                }
            });
        }
    }
</script>

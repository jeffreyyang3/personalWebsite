<template>
    <div class="bonkman">
        <h1>{{message1}}</h1>
        <button @click="exMethod()">test</button>
    </div>
</template>

<script>
    export default {
        name: "dankman",
        props: {
            message1: String
        },
        data: function() {
            return {
                message: "fromData"
            }
        },
        methods: {
            exMethod: function() {
                this.message1 = "changed"
            }
        }

       
        
    }
</script>


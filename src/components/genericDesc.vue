<template>
    <div class="genericDesc">
        <h1 class="gdHeading"> {{ title }} </h1>
        <p class="gdContent"> {{ content }} </p>
    </div>
</template>

<script>
    export default {
        name: "genericDesc",
        props: {
            title: String,
            content: String
        },
        data: function() {
            return {
                message: "fromData"
            }
        },
       
    }
</script>


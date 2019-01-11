// project description

<template>
    <div class="projectDesc">
        <h2> {{ title }} </h2>
        <h4> {{ technologies }}</h4>
        <p> {{ description }} </p>
        <a :href="url"> {{ sourceType }} </a>

    </div>
</template>

<script>
    export default {
        name: "projDesc",
        props: {
            title: String,
            technologies: String,
            description: String,
            url: String,
            sourceType: String,
        }
    }

</script>
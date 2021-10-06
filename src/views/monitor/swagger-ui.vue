<template>
    <iframe :src="swaggerSrc"
            frameborder="no" border="0" marginwidth="0" marginheight="0"
            allowtransparency="yes" style="overflow:hidden;" height="600px;" width="100%"></iframe>
</template>

<script>

    import {ref} from "vue";

    export default {
        setup() {
            const swaggerSrc = ref(import.meta.env.DEV ? '/api/swagger-ui.html' : '/swagger-ui.html')

            return {
                swaggerSrc,
            }
        }
    }
</script>


import Fastify from "fastify";

const app = Fastify()

// Metodo HTTP: Get, Post, Put, Patch, Delete

app.get("/" , () => {
    return "Hello World"
})

app.listen({
    port: 3333,
})
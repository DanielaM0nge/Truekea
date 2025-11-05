<template>
  <div class="home">
    <!-- Navbar -->
    <nav class="bg-white shadow-lg sticky top-0 z-50">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <span class="text-3xl font-bold text-primary">Truekea</span>
            <span class="text-sm text-gray-500">Intercambia, Dona, Vende</span>
          </div>
          
          <div class="hidden md:flex items-center space-x-6">
            <router-link to="/productos" class="text-gray-700 hover:text-primary transition">
              Explorar
            </router-link>
            <router-link to="/publicar" class="text-gray-700 hover:text-primary transition">
              Publicar
            </router-link>
            <router-link to="/chat" class="text-gray-700 hover:text-primary transition">
              Mensajes
            </router-link>
          </div>

          <div class="flex items-center space-x-4">
            <router-link to="/login" class="px-4 py-2 text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition">
              Ingresar
            </router-link>
            <router-link to="/register" class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition">
              Registrarse
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-primary to-primary-light py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Intercambia, Dona o Vende
        </h1>
        <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          La plataforma donde puedes darle nueva vida a tus objetos y encontrar lo que necesitas
        </p>
        <div class="flex flex-col md:flex-row items-center justify-center gap-4">
          <router-link to="/productos" class="px-8 py-4 bg-white text-primary rounded-lg font-bold hover:shadow-2xl transition transform hover:scale-105">
            Explorar Productos
          </router-link>
          <router-link to="/publicar" class="px-8 py-4 bg-primary-dark text-white rounded-lg font-bold hover:shadow-2xl transition transform hover:scale-105">
            Publicar Ahora
          </router-link>
        </div>
      </div>
    </section>

    <!-- Categorías -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">
          Explora por Categoría
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div v-for="categoria in categorias" :key="categoria.id" 
               class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer transform hover:scale-105">
            <div class="text-4xl mb-3 text-center">{{ categoria.emoji }}</div>
            <h3 class="text-lg font-semibold text-center text-gray-800">
              {{ categoria.nombre }}
            </h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Cómo funciona -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">
          ¿Cómo funciona Truekea?
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl">📸</span>
            </div>
            <h3 class="text-xl font-bold mb-2 text-gray-800">1. Publica</h3>
            <p class="text-gray-600">Sube fotos de lo que quieres intercambiar, donar o vender</p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl">💬</span>
            </div>
            <h3 class="text-xl font-bold mb-2 text-gray-800">2. Conecta</h3>
            <p class="text-gray-600">Chatea con personas interesadas en tus productos</p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl">🤝</span>
            </div>
            <h3 class="text-xl font-bold mb-2 text-gray-800">3. Intercambia</h3>
            <p class="text-gray-600">Coordina el encuentro y completa la transacción</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-4 text-center">
        <p class="text-lg font-bold text-primary mb-2">Truekea</p>
        <p class="text-gray-400">© 2025 Truekea. Todos los derechos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const categorias = ref([
  { id: 1, nombre: 'Electrónica', emoji: '📱' },
  { id: 2, nombre: 'Moda', emoji: '👕' },
  { id: 3, nombre: 'Hogar', emoji: '🏠' },
  { id: 4, nombre: 'Deportes', emoji: '⚽' },
  { id: 5, nombre: 'Libros', emoji: '📚' },
  { id: 6, nombre: 'Juguetes', emoji: '🎮' },
  { id: 7, nombre: 'Vehículos', emoji: '🚗' },
  { id: 8, nombre: 'Mascotas', emoji: '🐾' }
])
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}
</style>
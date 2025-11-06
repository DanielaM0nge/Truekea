<template>
  <div class="home">
    <!-- Animated Background -->
    <div class="fixed inset-0 -z-10 overflow-hidden">
      <div class="bg-blobs"></div>
    </div>

    <!-- Navbar -->
    <nav class="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-orange-100">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <router-link to="/" class="flex items-center space-x-3 group cursor-pointer">
            <div class="logo-icon">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
              </svg>
            </div>
            <div>
              <span class="text-2xl font-bold text-gradient">Truekea</span>
              <p class="text-xs text-gray-500">Intercambia • Dona • Vende</p>
            </div>
          </router-link>
          
          <!-- Menu Desktop -->
          <div class="hidden md:flex items-center space-x-8">
            <router-link to="/productos" class="nav-link">
              Explorar
            </router-link>
            <router-link to="/publicar" class="nav-link">
              Publicar
            </router-link>
            <router-link to="/chat" class="nav-link">
              Mensajes
            </router-link>
          </div>

          <!-- Botones de acción -->
          <div class="flex items-center space-x-3">
            <router-link to="/login" class="btn-secondary">
              Ingresar
            </router-link>
            <router-link to="/register" class="btn-primary">
              Registrarse
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative py-12 md:py-20 overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-8 items-center">
          
          <!-- Contenido Hero -->
          <div class="text-center lg:text-left">
            <div class="inline-flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full mb-6">
              <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              <span class="text-orange-600 font-semibold text-sm">¡Nueva forma de intercambiar!</span>
            </div>
            
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              <span class="text-gradient-animated block mb-2">
                Intercambia, Dona
              </span>
              <span class="text-gray-800 block">o Vende Fácil</span>
            </h1>
            
            <p class="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Dale nueva vida a tus objetos y descubre tesoros únicos. La comunidad más grande de intercambio en El Salvador 🇸🇻
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <router-link to="/productos" class="btn-hero-primary">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                Explorar Productos
              </router-link>
              <router-link to="/publicar" class="btn-hero-secondary">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                </svg>
                Publicar Gratis
              </router-link>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0">
              <div class="text-center lg:text-left">
                <p class="text-3xl font-bold text-orange-600">15K+</p>
                <p class="text-sm text-gray-600">Usuarios activos</p>
              </div>
              <div class="text-center lg:text-left">
                <p class="text-3xl font-bold text-orange-600">50K+</p>
                <p class="text-sm text-gray-600">Productos</p>
              </div>
              <div class="text-center lg:text-left">
                <p class="text-3xl font-bold text-orange-600">98%</p>
                <p class="text-sm text-gray-600">Satisfacción</p>
              </div>
            </div>
          </div>

          <!-- Ilustración Hero -->
          <div class="relative h-96 lg:h-[500px]">
            <!-- Tarjetas flotantes -->
            <div class="absolute top-0 right-10 bg-white rounded-xl shadow-2xl p-4 w-48 animate-float" style="animation-delay: 0s;">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <p class="font-bold text-gray-800 text-sm">iPhone 13 Pro</p>
                  <p class="text-orange-600 font-semibold text-sm">$650</p>
                </div>
              </div>
            </div>

            <div class="absolute bottom-16 left-0 bg-white rounded-xl shadow-2xl p-4 w-48 animate-float" style="animation-delay: 1s;">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <div>
                  <p class="font-bold text-gray-800 text-sm">Libro de Cocina</p>
                  <p class="text-green-600 font-semibold text-sm">¡Gratis!</p>
                </div>
              </div>
            </div>

            <div class="absolute top-1/2 right-0 -translate-y-1/2 bg-white rounded-xl shadow-2xl p-4 w-48 animate-float" style="animation-delay: 2s;">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                  </svg>
                </div>
                <div>
                  <p class="font-bold text-gray-800 text-sm">Intercambio</p>
                  <p class="text-blue-600 font-semibold text-sm">Por bicicleta</p>
                </div>
              </div>
            </div>

            <!-- Círculo central -->
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-2xl animate-pulse-slow">
              <svg class="w-32 h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Categorías -->
    <section id="categorias" class="py-16 bg-gradient-to-b from-white to-orange-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Explora por Categoría
          </h2>
          <p class="text-gray-600 text-lg">Encuentra exactamente lo que buscas</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div v-for="categoria in categorias" :key="categoria.id" 
               @click="irACategoria(categoria.id)"
               class="category-card">
            <div class="category-icon" :style="{ background: categoria.gradient }">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-center text-gray-800 mb-1">
              {{ categoria.nombre }}
            </h3>
            <p class="text-sm text-gray-500 text-center">{{ categoria.cantidad }} productos</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Cómo funciona -->
    <section id="como-funciona" class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            ¿Cómo funciona Truekea?
          </h2>
          <p class="text-gray-600 text-lg">Súper fácil en 3 pasos</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <!-- Paso 1 -->
          <div class="relative">
            <div class="absolute -top-4 -left-4 w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg z-10">
              1
            </div>
            <div class="bg-gradient-to-br from-orange-50 to-white p-8 pt-12 rounded-2xl border-2 border-orange-200 h-full hover:border-orange-400 transition-all hover:shadow-xl">
              <div class="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-4 text-gray-800 text-center">Publica</h3>
              <p class="text-gray-600 text-center leading-relaxed">
                Sube fotos de lo que quieres intercambiar, donar o vender. ¡Es gratis y toma menos de 2 minutos!
              </p>
            </div>
          </div>

          <!-- Paso 2 -->
          <div class="relative">
            <div class="absolute -top-4 -left-4 w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg z-10">
              2
            </div>
            <div class="bg-gradient-to-br from-orange-50 to-white p-8 pt-12 rounded-2xl border-2 border-orange-200 h-full hover:border-orange-400 transition-all hover:shadow-xl">
              <div class="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-4 text-gray-800 text-center">Conecta</h3>
              <p class="text-gray-600 text-center leading-relaxed">
                Chatea en tiempo real con personas interesadas. Negocia, pregunta y acuerda los detalles.
              </p>
            </div>
          </div>

          <!-- Paso 3 -->
          <div class="relative">
            <div class="absolute -top-4 -left-4 w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg z-10">
              3
            </div>
            <div class="bg-gradient-to-br from-orange-50 to-white p-8 pt-12 rounded-2xl border-2 border-orange-200 h-full hover:border-orange-400 transition-all hover:shadow-xl">
              <div class="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-4 text-gray-800 text-center">¡Intercambia!</h3>
              <p class="text-gray-600 text-center leading-relaxed">
                Coordina el encuentro en un lugar seguro y completa tu transacción. ¡Así de fácil!
              </p>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="text-center mt-12">
          <router-link to="/register" class="btn-cta">
            <span>Comenzar Ahora</span>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-4 gap-12 mb-8">
          <!-- Logo y descripción -->
          <div class="md:col-span-2">
            <div class="flex items-center space-x-3 mb-4">
              <div class="logo-icon">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                </svg>
              </div>
              <span class="text-3xl font-bold text-gradient">Truekea</span>
            </div>
            <p class="text-gray-400 mb-6 max-w-md">
              La plataforma líder de intercambio, donación y venta en El Salvador. Dale nueva vida a tus objetos.
            </p>
          </div>

          <!-- Enlaces rápidos -->
          <div>
            <h4 class="text-lg font-bold mb-4 text-orange-400">Enlaces</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-orange-400 transition">Sobre Nosotros</a></li>
              <li><a href="#" class="text-gray-400 hover:text-orange-400 transition">Ayuda</a></li>
              <li><a href="#" class="text-gray-400 hover:text-orange-400 transition">Términos</a></li>
              <li><a href="#" class="text-gray-400 hover:text-orange-400 transition">Privacidad</a></li>
            </ul>
          </div>

          <!-- Contacto -->
          <div>
            <h4 class="text-lg font-bold mb-4 text-orange-400">Contacto</h4>
            <ul class="space-y-2">
              <li class="text-gray-400">📧 hola@truekea.com</li>
              <li class="text-gray-400">📱 +503 1234-5678</li>
              <li class="text-gray-400">📍 San Salvador, SV</li>
            </ul>
          </div>
        </div>

        <div class="border-t border-gray-700 pt-8 text-center">
          <p class="text-gray-400">© 2025 <span class="text-orange-400 font-semibold">Truekea</span>. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const categorias = ref([
  { 
    id: 1, 
    nombre: 'Electrónica', 
    cantidad: 2340,
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    icon: 'IconSmartphone'
  },
  { 
    id: 2, 
    nombre: 'Moda', 
    cantidad: 4120,
    gradient: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
    icon: 'IconShirt'
  },
  { 
    id: 3, 
    nombre: 'Hogar', 
    cantidad: 1890,
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    icon: 'IconHome'
  },
  { 
    id: 4, 
    nombre: 'Deportes', 
    cantidad: 980,
    gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
    icon: 'IconDumbbell'
  },
  { 
    id: 5, 
    nombre: 'Libros', 
    cantidad: 1450,
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    icon: 'IconBook'
  },
  { 
    id: 6, 
    nombre: 'Juguetes', 
    cantidad: 760,
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    icon: 'IconGamepad'
  },
  { 
    id: 7, 
    nombre: 'Vehículos', 
    cantidad: 550,
    gradient: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
    icon: 'IconCar'
  },
  { 
    id: 8, 
    nombre: 'Mascotas', 
    cantidad: 1230,
    gradient: 'linear-gradient(135deg, #FF6B35 0%, #FFA500 100%)',
    icon: 'IconHeart'
  }
])

const irACategoria = (id) => {
  router.push(`/productos?categoria=${id}`)
}
</script>

<style scoped>
/* Usando tus clases del CSS global */
</style>
<script setup>
const avatarSrc = '/portfolio-assets/images/header-avatar.png'

defineProps({
  links: {
    type: Array,
    required: true,
  },
  activeSection: {
    type: String,
    required: true,
  },
  isMenuOpen: {
    type: Boolean,
    required: true,
  },
  isDark: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['toggle-theme', 'toggle-menu', 'close-menu'])

const onNavClick = () => {
  emit('close-menu')
}
</script>

<template>
  <header class="topbar">
    <div class="shell topbar-shell">
      <a class="brand" href="#home" aria-label="Voltar ao início" @click="onNavClick">
        <span class="brand-mark" aria-hidden="true">
          <img :src="avatarSrc" alt="" loading="eager" />
        </span>
        <span class="brand-name">Osvaldo Sérgio</span>
      </a>

      <div class="topbar-actions">
        <nav class="navlinks" :class="{ 'is-open': isMenuOpen }" aria-label="Navegação principal">
          <a
            v-for="link in links"
            :key="link.id"
            :href="`#${link.id}`"
            :class="{ 'is-active': activeSection === link.id }"
            @click="onNavClick"
          >
            {{ link.label }}
          </a>
        </nav>

        <button
          class="theme-toggle"
          type="button"
          :aria-label="isDark ? 'Ativar tema claro' : 'Ativar tema escuro'"
          :title="isDark ? 'Ativar tema claro' : 'Ativar tema escuro'"
          @click="emit('toggle-theme')"
        >
          <svg class="sun-and-moon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
            <mask id="moon-mask">
              <rect x="0" y="0" width="100%" height="100%" fill="white"></rect>
              <circle class="moon-cutout" cx="24" cy="10" r="6" fill="black"></circle>
            </mask>
            <circle class="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor"></circle>
            <g class="sun-beams" stroke="currentColor">
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </g>
          </svg>
        </button>

        <button
          class="menu-button"
          type="button"
          aria-label="Abrir menu"
          :aria-expanded="String(isMenuOpen)"
          @click="emit('toggle-menu')"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>

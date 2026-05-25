<script setup>
import { computed, onMounted } from 'vue'
import { initOpenDesignPortfolio, openDesignMarkup } from './open-design-export'

const baseUrl = import.meta.env.BASE_URL

const withBaseUrl = (markup) =>
  markup.replaceAll('"/portfolio-assets/', `"${baseUrl}portfolio-assets/`)

const pageMarkupWithoutFooter = computed(() =>
  withBaseUrl(openDesignMarkup).replace(/<footer class="footer">[\s\S]*?<\/footer>/, ''),
)

const keepFooterVisible = () => {
  const footerShell = document.querySelector('.footer .shell')

  if (!footerShell) return

  footerShell.classList.remove('reveal-on-scroll')
  footerShell.classList.add('is-revealed')
}

onMounted(() => {
  initOpenDesignPortfolio()
  requestAnimationFrame(keepFooterVisible)
})
</script>

<template>
  <div v-html="pageMarkupWithoutFooter"></div>
  <footer class="footer">
    <div class="shell">
      <span>&copy; 2026 Osvaldo S&eacute;rgio</span>
      <span>
        Full-stack portfolio /
        <span class="theme-word--dark">dark</span><span class="theme-word--light">light</span>
        visual system
      </span>
    </div>
  </footer>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { initOpenDesignPortfolio, openDesignMarkup } from './open-design-export'

const baseUrl = import.meta.env.BASE_URL

const withBaseUrl = (markup) =>
  markup.replaceAll('"/portfolio-assets/', `"${baseUrl}portfolio-assets/`)

const reorderNavLinks = (markup) =>
  markup.replace(
    [
      '        <a href="#sobre">Sobre</a>',
      '        <a href="#habilidades">Habilidades</a>',
      '        <a href="#projetos">Projetos</a>',
      '        <a href="#servicos">Servi\u00e7os</a>',
      '        <a href="#contato">Contato</a>',
    ].join('\n'),
    [
      '        <a href="#sobre">Sobre</a>',
      '        <a href="#projetos">Projetos</a>',
      '        <a href="#servicos">Servi\u00e7os</a>',
      '        <a href="#habilidades">Habilidades</a>',
      '        <a href="#contato">Contato</a>',
    ].join('\n'),
  )

const moveSkillsAfterServices = (markup) => {
  const skillsStart = markup.indexOf('    <section class="section skills-section" id="habilidades"')
  const projectsStart = markup.indexOf('    <section class="section" id="projetos"', skillsStart)

  if (skillsStart === -1 || projectsStart === -1) return markup

  const skillsBlock = markup.slice(skillsStart, projectsStart)
  const withoutSkills = markup.slice(0, skillsStart) + markup.slice(projectsStart)
  const servicesStart = withoutSkills.indexOf('    <section class="section" id="servicos"')
  const contactStart = withoutSkills.indexOf('    <section class="contact" id="contato"', servicesStart)

  if (servicesStart === -1 || contactStart === -1) return markup

  return `${withoutSkills.slice(0, contactStart)}${skillsBlock}${withoutSkills.slice(contactStart)}`
}

const muteVideoMarkup = (markup) =>
  markup.replaceAll(
    '<video controls="" preload="metadata" playsinline="">',
    '<video controls="" muted="" preload="metadata" playsinline="">',
  )

const applyRequestedAdjustments = (markup) =>
  muteVideoMarkup(moveSkillsAfterServices(reorderNavLinks(markup)))

const pageMarkupWithoutFooter = computed(() =>
  applyRequestedAdjustments(withBaseUrl(openDesignMarkup)).replace(
    /<footer class="footer">[\s\S]*?<\/footer>/,
    '',
  ),
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
